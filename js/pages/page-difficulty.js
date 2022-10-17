/**
 * class pageDifficulty
 */

class PageDifficulty extends BasePage {
    constructor(container, dialogDifficulty) {
        super(container, { dialogDifficulty: dialogDifficulty });
    }

    async run(settings) {
        this.container.replaceChildren();
        const response = await this.dialogDifficulty.show(settings.difficulty);
        if (response) {
            settings.difficulty = response.difficulty;
        }
        this.dialogDifficulty.close();
        return "next";
    }
}
