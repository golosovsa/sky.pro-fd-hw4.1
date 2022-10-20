/**
 * class dialog difficulty
 */

import { BaseDialog } from "./base-dialog";
import { dialogDifficultyTemplate } from "../templates/dialog-difficulty";

export class DialogDifficulty extends BaseDialog {
    firstFocusableElements: HTMLElement;
    lastFocusableElement: HTMLElement;
    constructor() {
        super(dialogDifficultyTemplate);

        this.firstFocusableElements = this.dialogForm.querySelector(
            ".dialog-difficulty__radio-container"
        ) as HTMLElement;
        this.lastFocusableElement = this.dialogForm.querySelector(
            ".dialog-difficulty__button"
        ) as HTMLElement;
    }

    _firstFocusableElement(): HTMLElement {
        return this.firstFocusableElements.querySelector("input:checked") as HTMLElement;
    }

    _lastFocusableElement(): HTMLElement {
        return this.lastFocusableElement as HTMLElement;
    }

    show(selected?: string): Promise<Boolean | Dictionary<string>> {
        if (selected) {
            const selectedRadio = this.dialogForm.querySelector(
                `input[type='radio'][value='${selected}'].dialog-difficulty__radio`
            ) as HTMLInputElement;
            if (selectedRadio) {
                selectedRadio.checked = true;
            }
        }

        return super.show();
    }
}
