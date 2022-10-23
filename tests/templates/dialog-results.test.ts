import { it, describe, expect } from "@jest/globals";
import { toBeATTemplateNodeRecursive } from "./expect-extend-templates-tests";
import { dialogResultsTemplate } from "../../js/templates/dialog-results";

describe("dialogResultsTemplate{...}", () => {
    
    expect.extend({ toBeATTemplateNodeRecursive });

    it("and all content inside it should be a TTemplateNodeType", () => {
        expect(dialogResultsTemplate).toBeATTemplateNodeRecursive();
    });

});
