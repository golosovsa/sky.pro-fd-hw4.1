/**
 * class base dialog
 */

import { templateEngine } from "../common/template-engine";

const KEYCODE_TAB = 9;

export class BaseDialog {
    dialog: HTMLDialogElement;
    dialogForm: HTMLFormElement;

    constructor(template: TTemplateNode) {
        this.dialog = templateEngine(template) as HTMLDialogElement;

        this.dialogForm = this.dialog.querySelector(".dialog__form") as HTMLFormElement;

        this.onChangeFocusableElement =
            this.onChangeFocusableElement.bind(this);

        this.dialog.addEventListener("keydown", this.onChangeFocusableElement);

        document.body.appendChild(this.dialog);
    }

    onChangeFocusableElement(event: KeyboardEvent) {
        if (event.key !== "Tab") {
            return;
        }

        const firstFocusableElement = this._firstFocusableElement();
        const lastFocusableElement = this._lastFocusableElement();

        if (!firstFocusableElement || !lastFocusableElement) {
            return
        }

        if (event.shiftKey) {
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

    _collectFormData(): Dictionary<string> {
        return Object.fromEntries(new FormData(this.dialogForm).entries()) as Dictionary<string>;
    }

    _firstFocusableElement(): HTMLElement | undefined {
        return undefined;
    }

    _lastFocusableElement(): HTMLElement | undefined {
        return undefined;
    }

    show(): Promise<Boolean | Dictionary<string>> {
        this.dialog.showModal();
        return new Promise((resolve) => {
            this.dialog.addEventListener(
                "cancel",
                () => {
                    resolve(false);
                },
                { once: true }
            );
            this.dialogForm.addEventListener(
                "submit",
                () => {
                    const data = this._collectFormData();
                    resolve(data);
                },
                { once: true }
            );
        });
    }

    close() {
        this.dialog.close();
    }
}
