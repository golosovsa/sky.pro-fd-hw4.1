/**
 * class page game
 */

import { templateEngine } from "../common/template-engine";
import { timeout } from "../common/timeout";
import { pageGameTemplate } from "../templates/page-game";
import { CardTable } from "../widgets/card-table";
import { Timer } from "../widgets/timer";
import { Card } from "../widgets/card";
import { BasePage } from "./base-page";

const DIFFICULTY_VALUES: Dictionary<number> = {
    "1": 3,
    "2": 6,
    "3": 9,
};

const DEFAULT_DIFFICULTY_VALUE = 3;

const SHOW_CARDS_QUICKLY_DELAY = 5000;

export class PageGame extends BasePage {
    cardTable: CardTable;
    timer: Timer;
    element: HTMLElement;
    cardTableContainer: HTMLElement;
    timerContainer: HTMLElement;
    buttonStart: HTMLElement;
    gameStartOver: boolean;
    pairOfCards: Array<Card>;
    pairsOfCardsGuessed: number;

    constructor(container: HTMLElement, cardTable: CardTable, timer: Timer) {
        super(container); 
        
        this.cardTable = cardTable;
        this.timer = timer;

        this.element = templateEngine(pageGameTemplate) as HTMLElement;

        this.cardTableContainer = this.element.querySelector(".game__main") as HTMLElement;
        this.timerContainer = this.element.querySelector(".game__timer") as HTMLElement;
        this.buttonStart = this.element.querySelector(".game__button_start") as HTMLElement;

        this.timer.setContainer(this.timerContainer);

        this.onStartPressed = this.onStartPressed.bind(this);
        this.onClickCardEvent = this.onClickCardEvent.bind(this);

        this.gameStartOver = false;
        this.pairOfCards = [];
        this.pairsOfCardsGuessed = 0;
    }

    _resetGameStatuses() {
        this.gameStartOver = false;
        this.pairOfCards = [];
        this.pairsOfCardsGuessed = 0;
    }

    _enableStartButton() {
        this.buttonStart.classList.remove("game__button_disabled");
        this.buttonStart.addEventListener("click", this.onStartPressed);
    }

    _disableStartButton() {
        this.buttonStart.classList.add("game__button_disabled");
        this.buttonStart.removeEventListener("click", this.onStartPressed);
    }

    onStartPressed() {
        this.gameStartOver = true;
        this._disableStartButton();
    }

    async _showCardsQuickly(): Promise<void> {
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

    onClickCardEvent(event: Event) {
        const target = event.target; 
        
        if (!target || !("interface" in target)) {
            return;
        }
        const card = (target as unknown as Dictionary<object>).interface as Card;
    
        if (!card) {
            return;
        }

        card.show();
        this.pairOfCards.push(card);
    }

    async _startOver(settings: TSettings) {
        const numberOfPairs =
            DIFFICULTY_VALUES[settings.difficulty] || DEFAULT_DIFFICULTY_VALUE;

        this.cardTable.spreadOut(this.cardTableContainer, numberOfPairs);
        this.container.replaceChildren(this.element);

        await timeout(500);
        await this._showCardsQuickly();
        this._attachCardEvent();

        this._resetGameStatuses();
        this._enableStartButton();

        return numberOfPairs;
    }

    async run(settings: TSettings): Promise<string> {
        
        this.timer.reset();
        this.timer.start();
        this._disableStartButton();
        
        // eslint-disable-next-line no-constant-condition
        while (true){
            const numberOfPairs = await this._startOver(settings);

        // eslint-disable-next-line no-constant-condition
            while (true) {
                if (this.gameStartOver) {
                    await this.cardTable.hideAll();
                    await timeout(500);
                    break;
                }

                if (this.pairOfCards.length < 2) {
                    await timeout(100);
                    continue;
                }

                if (this.pairOfCards.length > 2) {
                    this._detachCardEvent();
                    return await this._defeat(settings);
                }

                if (this.pairOfCards[0].valueOf() !== this.pairOfCards[1].valueOf()) {
                    this._detachCardEvent();
                    return await this._defeat(settings);
                }
                    
                this.pairOfCards = [];
                this.pairsOfCardsGuessed++;
                if (this.pairsOfCardsGuessed === numberOfPairs) {
                    this._detachCardEvent();
                    return await this._win(settings);
                }
            }
        }
    }

    async _waitForStartButtonPressed(): Promise<void> {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            
            await timeout(100);
        }
    }

    async _defeat(settings: TSettings): Promise<string> {
        this.timer.stop();
        settings.lastGameStatus = "defeat";
        settings.lastGameTime = this.timer.lastResult;
        await timeout(1000);
        return "next";
    }

    async _win(settings: TSettings): Promise<string> {
        this.timer.stop();
        settings.lastGameStatus = "win";
        settings.lastGameTime = this.timer.lastResult;
        await timeout(1000);
        return "next";
    }
}
