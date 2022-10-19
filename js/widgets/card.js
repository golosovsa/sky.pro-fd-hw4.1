/**
 * class card
 */

import { templateEngine } from "./../common/template-engine";
import { cardTemplate } from "./../templates/card";

export class Card {
    constructor(parent, suit, letter) {
        this.parent = parent;
        this.suit = suit;
        this.letter = letter;

        this.element = templateEngine(cardTemplate);
        this.element.interface = this;
        this._applyDataAttributes();
        this.parent.appendChild(this.element);
    }

    _applyDataAttributes() {
        const letterElements = this.element.querySelectorAll(".card__letter");
        const suitElements = this.element.querySelectorAll(".card__suit");

        letterElements.forEach((letter) => {
            letter.dataset.letter = this.letter;
        });

        suitElements.forEach((suit) => {
            suit.dataset.suit = this.suit;
        });
    }

    valueOf() {
        return `${this.letter}${this.suit}`.toUpperCase();
    }

    show() {
        this.element.classList.add("card_show");
    }

    hide() {
        this.element.classList.remove("card_show");
    }
}
