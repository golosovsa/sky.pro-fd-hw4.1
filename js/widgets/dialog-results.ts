/**
* class dialog difficulty
*/

import { BaseDialog } from "./base-dialog";
import { dialogResultsTemplate } from "../templates/dialog-results";

export class DialogResults extends BaseDialog {
    focusableElement: HTMLElement;
    image: HTMLElement;
    title: HTMLElement;
    time: HTMLElement;

    constructor() {
        super(dialogResultsTemplate);
        this.focusableElement = this.dialogForm.querySelector(".dialog-results__button") as HTMLElement;

        this.image = this.dialogForm.querySelector(".dialog-results__image") as HTMLElement;
        this.title = this.dialogForm.querySelector(".dialog-results__title") as HTMLElement;
        this.time = this.dialogForm.querySelector(".dialog-results__time") as HTMLElement;
    }

    _firstFocusableElement(): HTMLElement {
        return this.focusableElement;
    }

    _lastFocusableElement(): HTMLElement {
        return this.focusableElement;
    }

    show(status?: string, time?: string): Promise<Boolean | Dictionary<string>> {
        const gameStatus: string = status ? status : "defeat";
        const gameTime: string = time ? time : "NA:NA";

        this.image.dataset.status = gameStatus;
        this.title.dataset.status = gameStatus;
        this.time.dataset.time = gameTime;

        return super.show();
    }

}