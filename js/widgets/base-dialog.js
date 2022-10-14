/**
 * class base dialog
 */

class BaseDialog{

    constructor(template) {
        this.dialog = templateEngine(template);
        this.dialogForm = this.dialog.querySelector(".dialog__form");
        document.body.appendChild(this.dialog);
    }

    _collectFormData() {
        return null;
    }

    show() {
        this.dialog.showModal()
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
}