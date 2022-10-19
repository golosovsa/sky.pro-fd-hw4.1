/**
 * class base page
 */

export class BasePage {
    constructor(container, blocks) {
        this.container = container;
        for (const [blockName, blockInstance] of Object.entries(blocks)) {
            this[blockName] = blockInstance;
        }
    }

    // eslint-disable-next-line no-unused-vars
    async run(settings) {
        throw Error("This is abstract method");
    }
}
