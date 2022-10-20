export function randomSample(collection: Array<any>, howMany: number): Array<any> {
    const resultLength = Math.min(collection.length, howMany);
    let collectionCopy = Array.from(collection);
    let result: Array<any> = [];

    for (let counter = 0; counter < resultLength; counter++) {
        const randomIndex = Math.floor(Math.random() * collectionCopy.length);

        result.push(collectionCopy[randomIndex]);
        collectionCopy.splice(randomIndex, 1);
    }

    return result;
}
