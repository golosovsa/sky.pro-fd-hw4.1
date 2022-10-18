/**
 * class page game
 */

const DIFFICULTY_VALUES = {
    1: 3,
    2: 6,
    3: 9,
};

class PageGame extends BasePage {
    constructor(container, cardTable, timer) {
        super(container, { cardTable: cardTable, timer: timer });
        this.element = templateEngine(pageGameTemplate);

        this.cardTableContainer = this.element.querySelector(".game__main");
        this.timerContainer = this.element.querySelector(".game__timer");
        this.buttonStart = this.element.querySelector(".game__button_start");

        this.timer.setContainer(this.timerContainer);

        this.onStartPressed = this.onStartPressed.bind(this);
        this.buttonStart.addEventListener("click", this.onStartPressed);
    }

    onStartPressed(event) {
        this.timer.toggle();
    }

    async run(settings) {
        const numberOfPairs = DIFFICULTY_VALUES[settings.difficulty] || 3;

        this.cardTable.spreadOut(this.cardTableContainer, numberOfPairs);
        this.container.replaceChildren(this.element);

        // eslint-disable-next-line no-constant-condition
        while (true) {
            await timeout(500);
        }
    }
}
