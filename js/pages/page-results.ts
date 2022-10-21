import { timeout } from "../common/timeout";
import { DialogResults } from "../widgets/dialog-results";
import { BasePage } from "./base-page";

export class PageResults extends BasePage {
    dialogResults: DialogResults;
    constructor(container: HTMLElement, dialogResults: DialogResults) {
        super(container);

        this.dialogResults = dialogResults;
    }

    async run(settings: TSettings): Promise<string> {

        const response = await this.dialogResults.show(
            settings.lastGameStatus,
            settings.lastGameTime,
        );

        this.dialogResults.close();
        return "next";

    }
}
