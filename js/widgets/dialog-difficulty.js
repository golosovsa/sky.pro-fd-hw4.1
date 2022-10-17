/**
 * class dialog difficulty
 */

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
                `.dialog-difficulty__radio[value='${selected}']`
            );
            if (selectedRadio) {
                selectedRadio.checked = true;
            }
        }

        return super.show();
    }
}
