import { randomSample } from "./random-sample";

export function randomShuffle(collection: Array<any>): Array<any> {
    return randomSample(collection, collection.length);
}
