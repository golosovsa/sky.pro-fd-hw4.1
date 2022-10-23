import { it, describe, expect } from "@jest/globals";
import { toBeATTemplateNodeRecursive } from "./expect-extend-templates-tests";
import { cardTableTemplate } from "../../js/templates/card-table";

describe("cardTableTemplate{...}", () => {

    expect.extend({toBeATTemplateNodeRecursive,});

    it("and all content inside it should be a TTemplateNodeType", () => {
        expect(cardTableTemplate).toBeATTemplateNodeRecursive();
    });

});
