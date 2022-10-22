import { it, describe, expect } from "@jest/globals";
import { toBeATTemplateNodeRecursive } from "./expect-extend-templates-tests";
import { baseDialogTemplate } from "../../js/templates/base-dialog";

describe("baseDialogTemplate{...}", () => {

    expect.extend({toBeATTemplateNodeRecursive,});

    it("and all content inside it should be a TTemplateNodeType", () => {
        expect(baseDialogTemplate).toBeATTemplateNodeRecursive();
    });

});