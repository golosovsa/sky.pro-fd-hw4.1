/**
 * class card
 */

// import { templateEngine } from "./../common/template-engine";
// import { cardTemplate } from "./../templates/card";

class Card {
    constructor(parent, suit, letter) {
        this.parent = parent;
        this.suit = suit;
        this.letter = letter;

        this.element = templateEngine(cardTemplate);
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
}
