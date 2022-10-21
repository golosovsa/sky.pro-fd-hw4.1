/**
 * class card
 */

import { templateEngine } from "../common/template-engine";
import { cardTemplate } from "../templates/card";

export class Card {
    parent: HTMLElement;
    suit: string;
    letter: string;
    element: HTMLElement;
    constructor(parent: HTMLElement, suit: string, letter: string) {
        this.parent = parent;
        this.suit = suit;
        this.letter = letter;

        this.element = templateEngine(cardTemplate) as HTMLElement;
        (this.element as any).interface = this;
        this._applyDataAttributes();
        this.parent.appendChild(this.element);
    }

    _applyDataAttributes() {
        const letterElements = this.element.querySelectorAll(".card__letter");
        const suitElements = this.element.querySelectorAll(".card__suit");

        letterElements.forEach((letter) => {
            (letter as HTMLElement).dataset.letter = this.letter;
        });    
        
        suitElements.forEach((suit) => {
            (suit as HTMLElement).dataset.suit = this.suit;
        });
    }

    valueOf(): string {
        return `${this.letter}${this.suit}`.toUpperCase();
    }

    show() {
        this.element.classList.add("card_show");
    }

    hide() {
        this.element.classList.remove("card_show");
    }
}
