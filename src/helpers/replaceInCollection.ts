import { Entity } from "../models";

export const replaceInCollection = <T extends Entity>(
    collection: T[],
    orignal: T,
    replacement: T,
    sorter?: (a: T, b: T) => number,
): T[] => {
    const newCollection = collection.filter(({ id }) => id !== orignal.id);

    newCollection.push(replacement);

    return !!sorter ? newCollection.sort(sorter) : newCollection;
};