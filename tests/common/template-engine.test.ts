import { it, describe, expect } from "@jest/globals";
import { templateEngine } from "./../../js/common/template-engine";

describe("randomShuffle()", () => {
    
    it("should return Text object if template type is string", () => {
        const template = "test_string";

        const result = templateEngine(template);

        expect(result).toBeInstanceOf(Text);
    });

    it("should return Text object if template type is number", () => {
        const template = 123_456_789_000;

        const result = templateEngine(template);

        expect(result).toBeInstanceOf(Text);
    });

    it("should return Text object if template type is boolean", () => {
        const template = true;

        const result = templateEngine(template);

        expect(result).toBeInstanceOf(Text);
    });

    it("should return HTMLElement object if template type is TTemplateNode", () => {
        const template: TTemplateNode = {
            tag: "div",
        };

        const result = templateEngine(template);

        expect(result).toBeInstanceOf(HTMLElement);
    });

    it("should return DocumentFragment object if template type is Array<TTemplateNode>", () => {
        const template: Array<TTemplateNode> = [{
            tag: "div",
        }];

        const result = templateEngine(template);

        expect(result).toBeInstanceOf(DocumentFragment);
    });

});
