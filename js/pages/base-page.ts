/**
 * class base page
 */

export class BasePage implements IPage{
    container: HTMLElement;
    constructor(container: HTMLElement) {
        this.container = container;
    }

    async run(settings: TSettings): Promise<string> {
        throw Error(`This is abstract method. settings = ${settings}`);
    }
}
