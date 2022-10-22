import { it, describe, expect } from "@jest/globals";
import { toBeATTemplateNodeRecursive } from "./expect-extend-templates-tests";
import { pageGameTemplate } from "../../js/templates/page-game";

describe("pageGameTemplate{...}", () => {
    
    expect.extend({ toBeATTemplateNodeRecursive });

    it("and all content inside it should be a TTemplateNodeType", () => {
        expect(pageGameTemplate).toBeATTemplateNodeRecursive();
    });

});
