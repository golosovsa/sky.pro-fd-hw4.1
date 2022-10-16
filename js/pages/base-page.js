/**
 * class base page
 */


class BasePage {
    
    constructor(container, blocks) {
        this.container = container; 
        for (const [blockName, blockInstance] of Object.entries(blocks)) {
            this[blockName] = blockInstance;
        }
    }

    async run(settings) {
        
    }

}
