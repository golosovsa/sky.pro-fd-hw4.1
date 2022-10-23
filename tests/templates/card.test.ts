import { it, describe, expect } from "@jest/globals";
import { toBeATTemplateNodeRecursive } from "./expect-extend-templates-tests";
import { cardTemplate } from "../../js/templates/card";

describe("cardTemplate{...}", () => {

    expect.extend({toBeATTemplateNodeRecursive,});

    it("and all content inside it should be a TTemplateNodeType", () => {
        expect(cardTemplate).toBeATTemplateNodeRecursive();
    });

});
