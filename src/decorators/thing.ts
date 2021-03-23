// Thing Decorator
import 'reflect-metadata';
import { Collection } from '../collection';
import { METADATA_PREFIX } from '../constants';
import { defineMetadata, toLabel } from '../util';

export const Thing = (collection: Collection, label: string | null = null) => <
    T extends { new (...args: any[]): Object }
>(
    constructor: T,
): typeof constructor => {
    // Get the name of the class.
    const name = constructor.name;
    // Get the label.
    label = label || toLabel(name);

    // In order to retain the Class's name,
    // you have to do this work around.
    // All this is doing is creating a new class.
    const thing = [
        class extends constructor {
            // You can add attributes here
        },
    ][0];

    // Get the parents list.
    const parents = [
        // Copy the list to not interfere with parents
        ...((Reflect.getMetadata(`${METADATA_PREFIX}:parents`, thing) as [
            // This metadata property contains an array
            // 0th element is the collection instance
            Collection,
            // 1st element is the name of the Thing
            string,
        ][]) || []),
    ];
    parents.push([collection, name]);

    // Edit metadata values here:
    const metadata = {
        collection,
        name,
        label,
        isDecorated: true,
        parents,
    };

    // Adds the metadata using reflect-metadata.
    defineMetadata(thing, metadata);

    // Add the thing to the collection.
    collection.addThingClass(thing as any);
    // Return the Thing.
    return thing;
};
