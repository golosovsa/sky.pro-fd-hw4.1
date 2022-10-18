/**
 * class dialog difficulty
 */

// import { BaseDialog } from "./base-dialog";
// import { dialogDifficultyTemplate } from "../templates/dialog-difficulty";

class DialogDifficulty extends BaseDialog {
    constructor() {
        super(dialogDifficultyTemplate);

        this.firstFocusableElements = this.dialogForm.querySelector(
            ".dialog-difficulty__radio-container"
        );
        this.lastFocusableElement = this.dialogForm.querySelector(
            ".dialog-difficulty__button"
        );
    }

    _firstFocusableElement() {
        return this.firstFocusableElements.querySelector("input:checked");
    }

    _lastFocusableElement() {
        return this.lastFocusableElement;
    }

    show(selected = undefined) {
        if (selected) {
            const selectedRadio = this.dialogForm.querySelector(
                `input[type='radio'][value='${selected}'].dialog-difficulty__radio`
            );
            if (selectedRadio) {
                selectedRadio.checked = true;
            }
        }

        return super.show();
    }
}
