import { timeout } from "../common/timeout";
import { BasePage } from "./base-page";

const MESSAGES = {
    defeat: "Вы проиграли :(",
    win: "Вы выйграли :)",
};

export class PageResults extends BasePage {
    constructor(container) {
        super(container, {});
    }

    async run(settings) {
        alert(`${MESSAGES[settings.lastGameStatus]}\n${settings.lastGameTime}`);

        // eslint-disable-next-line no-constant-condition
        while (true) {
            await timeout(1000);
        }
    }
}
