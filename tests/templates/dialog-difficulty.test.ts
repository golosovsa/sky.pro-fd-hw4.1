import { it, describe, expect } from "@jest/globals";
import { toBeATTemplateNodeRecursive } from "./expect-extend-templates-tests";
import { dialogDifficultyTemplate } from "../../js/templates/dialog-difficulty";

describe("dialogDifficultyTemplate{...}", () => {
    
    expect.extend({ toBeATTemplateNodeRecursive });

    it("and all content inside it should be a TTemplateNodeType", () => {
        expect(dialogDifficultyTemplate).toBeATTemplateNodeRecursive();
    });

});
