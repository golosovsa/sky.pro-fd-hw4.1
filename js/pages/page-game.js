/**
 * class page game
 */

import { BasePage } from "./base-page";
import { templateEngine } from "../common/template-engine";
import { timeout } from "../common/timeout";
import { pageGameTemplate } from "../templates/page-game";

const DIFFICULTY_VALUES = {
    1: 3,
    2: 6,
    3: 9,
};

const DEFAULT_DIFFICULTY_VALUE = 3;

const SHOW_CARDS_QUICKLY_DELAY = 5000;

export class PageGame extends BasePage {
    constructor(container, cardTable, timer) {
        super(container, { cardTable: cardTable, timer: timer });
        this.element = templateEngine(pageGameTemplate);

        this.cardTableContainer = this.element.querySelector(".game__main");
        this.timerContainer = this.element.querySelector(".game__timer");
        this.buttonStart = this.element.querySelector(".game__button_start");

        this.timer.setContainer(this.timerContainer);

        this.onStartPressed = this.onStartPressed.bind(this);
        this.onClickCardEvent = this.onClickCardEvent.bind(this);

        this.gameStarted = false;
        this.cardsHaveBeenShown = false;

        this.pairOfCards = [];
        this.pairsOfCardsGuessed = 0;
    }

    _enableStartButton() {
        this.buttonStart.classList.remove("game__button_disabled");
        this.buttonStart.addEventListener("click", this.onStartPressed);
    }

    onStartPressed() {
        this.buttonStart.classList.add("game__button_disabled");
        this.gameStarted = true;
    }

    async _showCardsQuickly() {
        await this.cardTable.showAll();
        await timeout(SHOW_CARDS_QUICKLY_DELAY);
        await this.cardTable.hideAll();
    }

    _attachCardEvent() {
        this.cardTableContainer.addEventListener(
            "click",
            this.onClickCardEvent
        );
    }

    _detachCardEvent() {
        this.cardTableContainer.removeEventListener(
            "click",
            this.onClickCardEvent
        );
    }

    onClickCardEvent(event) {
        const card = event.target.interface;
        if (!card) {
            return;
        }

        card.show();
        this.pairOfCards.push(card);
    }

    async run(settings) {
        const numberOfPairs =
            DIFFICULTY_VALUES[settings.difficulty] || DEFAULT_DIFFICULTY_VALUE;

        this.cardTable.spreadOut(this.cardTableContainer, numberOfPairs);
        this.container.replaceChildren(this.element);

        this.gameStarted = false;
        this.cardsHaveBeenShown = false;
        this.pairOfCards = [];
        this.pairsOfCardsGuessed = 0;

        this._enableStartButton();

        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (this.gameStarted && !this.cardsHaveBeenShown) {
                this.cardsHaveBeenShown = true;
                await this._showCardsQuickly();
                this._attachCardEvent();
            }

            if (this.pairOfCards.length === 2) {
                if (
                    this.pairOfCards[0].valueOf() !==
                    this.pairOfCards[1].valueOf()
                ) {
                    settings.lastGameStatus = "defeat";
                    settings.lastGameTime = this.timer.lastResult;
                    await timeout(1000);
                    return "next";
                }
                this.pairOfCards = [];
                this.pairsOfCardsGuessed++;
                if (this.pairsOfCardsGuessed === numberOfPairs) {
                    settings.lastGameStatus = "win";
                    settings.lastGameTime = this.timer.lastResult;
                    await timeout(1000);
                    return "next";
                }
            }

            await timeout(100);
        }
    }
}
