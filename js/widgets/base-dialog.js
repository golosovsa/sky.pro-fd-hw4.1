/**
 * class base dialog
 */

const KEYCODE_TAB = 9;

class BaseDialog{

    constructor(template) {
        this.dialog = templateEngine(template);
        this.dialogForm = this.dialog.querySelector(".dialog__form");

        this.onChangeFocusableElement = this.onChangeFocusableElement.bind(this);

        this.dialog.addEventListener('keydown', this.onChangeFocusableElement);

        document.body.appendChild(this.dialog);
    }

    onChangeFocusableElement(event) {

        if (event.key !== "Tab" && event.keyCode !== KEYCODE_TAB) {
            return;
        }

        const firstFocusableElement = this._firstFocusableElement();
        const lastFocusableElement = this._lastFocusableElement();

        if (event.shiftKey)  {

            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                event.preventDefault();
            }

        } else { 

            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                event.preventDefault();
            }

        }
    }

    _collectFormData() {
        return Object.fromEntries(new FormData(this.dialogForm).entries());
    }

    _firstFocusableElement() {
        return null;
    }

    _lastFocusableElement() {
        return null;
    }

    show() {
        this.dialog.showModal();
        return new Promise(resolve => {
            this.dialog.addEventListener('cancel', () => {
                resolve(false);
            }, { once: true });
            this.dialogForm.addEventListener("submit", () => {
                const data = this._collectFormData();
                resolve(data);
            }, { once: true });
        })
    }

    close() {
        this.dialog.close();
    }
}