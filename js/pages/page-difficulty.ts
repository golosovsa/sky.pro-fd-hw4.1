/**
 * class pageDifficulty
 */

import { DialogDifficulty } from "../widgets/dialog-difficulty";
import { BasePage } from "./base-page";

export class PageDifficulty extends BasePage {
    dialogDifficulty: DialogDifficulty;
    constructor(container: HTMLElement, dialogDifficulty: DialogDifficulty) {
        super(container);
        this.dialogDifficulty = dialogDifficulty;
    }

    async run(settings: TSettings): Promise<string> {
        this.container.replaceChildren();
        const response = await this.dialogDifficulty.show(settings.difficulty);
        if (response) {
            if ("difficulty" in response) {
                settings.difficulty = response.difficulty;
            }
        }
        this.dialogDifficulty.close();
        return "next";
    }
}
