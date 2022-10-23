import { it, describe, expect } from "@jest/globals";
import { timeout } from "./../../js/common/timeout";

describe("timeout()", () => {
    it("should return a promise", () => {
        const result = timeout(100);

        expect(result).toBeInstanceOf(Promise);
    });
});