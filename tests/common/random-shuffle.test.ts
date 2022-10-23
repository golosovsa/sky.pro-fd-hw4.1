import { it, describe, expect } from "@jest/globals";
import { randomShuffle } from "./../../js/common/random-shuffle";

describe("randomShuffle()", () => {

    it("shouldn't change the sourceArray", () => {
        const sourceArray = [1, 2, 3, 4, 5];

        const result = randomShuffle(sourceArray);

        expect(sourceArray).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it("should return a new array instance", () => {
        const sourceArray = [1, 2, 3, 4, 5];

        const result = randomShuffle(sourceArray);

        expect(Object.is(sourceArray, result)).toBe(false);
    });

    it("should return an array where the elements are of the same type as sourceArray elements", () => {
        class testDictionary implements Dictionary<number> {
            [Key: string]: number;

            constructor(key: string, value: number) {
                this[key] = value; 
            }

        };

        const sourceArray: Array<testDictionary> = [
            new testDictionary("one", 1), 
            new testDictionary("two", 2), 
            new testDictionary("three", 3), 
            new testDictionary("four", 4), 
            new testDictionary("five", 5),
        ];

        const result: Array<any> = randomShuffle(sourceArray);

        result.every((value) => {
            expect(value).toBeInstanceOf(testDictionary);
        });
    });

    it("should return a new array with elements from sourceArray", () => {
        const sourceArray = [1, 2, 3, 4, 5];

        const result = randomShuffle(sourceArray);

        expect(sourceArray).toEqual(expect.arrayContaining(result));
    });
    
});

