/**
 * class card table
 */

const CARDS = [
    { suit: "clubs", letter: "6" },
    { suit: "clubs", letter: "7" },
    { suit: "clubs", letter: "8" },
    { suit: "clubs", letter: "9" },
    { suit: "clubs", letter: "10" },
    { suit: "clubs", letter: "J" },
    { suit: "clubs", letter: "D" },
    { suit: "clubs", letter: "K" },
    { suit: "clubs", letter: "T" },

    { suit: "diamonds", letter: "6" },
    { suit: "diamonds", letter: "7" },
    { suit: "diamonds", letter: "8" },
    { suit: "diamonds", letter: "9" },
    { suit: "diamonds", letter: "10" },
    { suit: "diamonds", letter: "J" },
    { suit: "diamonds", letter: "D" },
    { suit: "diamonds", letter: "K" },
    { suit: "diamonds", letter: "T" },

    { suit: "hearts", letter: "6" },
    { suit: "hearts", letter: "7" },
    { suit: "hearts", letter: "8" },
    { suit: "hearts", letter: "9" },
    { suit: "hearts", letter: "10" },
    { suit: "hearts", letter: "J" },
    { suit: "hearts", letter: "D" },
    { suit: "hearts", letter: "K" },
    { suit: "hearts", letter: "T" },

    { suit: "spades", letter: "6" },
    { suit: "spades", letter: "7" },
    { suit: "spades", letter: "8" },
    { suit: "spades", letter: "9" },
    { suit: "spades", letter: "10" },
    { suit: "spades", letter: "J" },
    { suit: "spades", letter: "D" },
    { suit: "spades", letter: "K" },
    { suit: "spades", letter: "T" },
];

class CardTable {
    constructor() {
        this.element = templateEngine(cardTableTemplate);
        this.cards = [];
        this.container = undefined;
    }

    spreadOut(container, pairsNumber) {
        const cardSet = randomSample(CARDS, pairsNumber);
        const pairsCardSet = [...cardSet, ...cardSet];
        const mixedPairsCardSet = randomShuffle(pairsCardSet);

        this.cards = [];

        if (this.container) {
            this.container.replaceChildren();
        }

        this.container = container;

        mixedPairsCardSet.forEach((card) => {
            this.cards.push(new Card(this.element, card.suit, card.letter));
        });
        this.element.dataset.pairs = pairsNumber;

        this.container.appendChild(this.element);
    }
}
