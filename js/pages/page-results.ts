import { timeout } from "../common/timeout";
import { BasePage } from "./base-page";

const MESSAGES: Dictionary<string> = {
    defeat: "Вы проиграли :(",
    win: "Вы выйграли :)",
};

export class PageResults extends BasePage {
    constructor(container: HTMLElement) {
        super(container);
    }

    async run(settings: TSettings): Promise<string> {

        let message = "";

        if (settings.lastGameStatus) {
            message = MESSAGES[settings.lastGameStatus];
        }

        alert(`${message}\n${settings.lastGameTime}`);

        // eslint-disable-next-line no-constant-condition
        while (true) {
            await timeout(1000);
        }
    }
}
