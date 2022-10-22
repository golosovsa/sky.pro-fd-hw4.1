import { it, describe, expect } from "@jest/globals";
import { toBeATTemplateNodeRecursive } from "./expect-extend-templates-tests";
import { timerTemplate } from "../../js/templates/timer";

describe("timerTemplate{...}", () => {
    
    expect.extend({ toBeATTemplateNodeRecursive });

    it("and all content inside it should be a TTemplateNodeType", () => {
        expect(timerTemplate).toBeATTemplateNodeRecursive();
    });

});
