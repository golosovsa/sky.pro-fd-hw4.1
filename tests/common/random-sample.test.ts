import { it, describe, expect } from "@jest/globals";
import { randomSample } from "./../../js/common/random-sample";

describe("randomSample()", () => {
    
    it("shouldn't change the sourceArray", () => {
        const sourceArray = [1, 2, 3, 4, 5];
        const howMany = 3;

        const result = randomSample(sourceArray, howMany);

        expect(sourceArray).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it("should return a new array instance if howMany is equal to sourceArray.length", () => {
        const sourceArray = [1, 2, 3, 4, 5];
        const howMany = 5;

        const result = randomSample(sourceArray, howMany);

        expect(Object.is(sourceArray, result)).toBe(false);
    });

    it("should return a new array with length equal to the howMany", () => {
        const sourceArray = [1, 2, 3, 4, 5];
        const howMany = 3;

        const result = randomSample(sourceArray, howMany);

        expect(result).toHaveLength(howMany);
    });

    it("should return a new array with length equal to sourceArray.length if howMany is greater than sourceArray.length", () => {
        const sourceArray = [1, 2, 3, 4, 5];
        const howMany = 15;

        const result = randomSample(sourceArray, howMany);

        expect(result).toHaveLength(sourceArray.length);
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
        const howMany = 5;

        const result: Array<any> = randomSample(sourceArray, howMany);

        result.every((value) => {
            expect(value).toBeInstanceOf(testDictionary);
        });
    });

    it("should return a new array with elements from sourceArray", () => {
        const sourceArray = [1, 2, 3, 4, 5];
        const howMany = 3;

        const result = randomSample(sourceArray, howMany);

        expect(sourceArray).toEqual(expect.arrayContaining(result));
    });

});