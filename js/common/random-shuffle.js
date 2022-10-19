import { randomSample } from "./random-sample";

export function randomShuffle(collection) {
    return randomSample(collection, collection.length);
}
