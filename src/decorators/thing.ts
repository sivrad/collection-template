// Thing Decorator
import 'reflect-metadata';
import { Collection } from '../collection';
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

    // Edit metadata values here:
    const metadata = {
        collection,
        name,
        label,
        isDecorated: true,
    };

    // Adds the metadata using reflect-metadata.
    defineMetadata(thing, metadata);

    // Add the thing to the collection.
    collection.addThingClass(thing as any);
    // Return the Thing.
    return thing;
};
