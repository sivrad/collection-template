import { CollectionThing, CollectionThings } from './types';

/**
 * Base Collection Class.
 */
export class Collection {
    /**
     * Constructor for a collection.
     * @param {string} identifier  Identifier of the collection.
     * @param {string} label       Label of the collection.
     * @param {string} description Description of the collection.
     */
    constructor(
        public identifier: string,
        public label: string,
        public description: string,
    ) {}

    /**
     * Returns all the thing classes from a collection.
     * @function getThingClasses
     * @memberof Collection
     * @abstract
     * @returns {CollectionThings} Array of thing classes.
     */
    getThingClasses(): CollectionThings {
        throw Error('IMPLEMENT');
    }

    /**
     * Returns a Thing class from a collection.
     * @function getThingClass
     * @memberof Collection
     * @param {string} identifier Identifier of the thing.
     * @returns {CollectionThing | null} `Thing` class if exists, `null` if not.
     */
    getThingClass(identifier: string): CollectionThing | null {
        return (
            this.getThingClasses().find(
                (thing) => thing.IDENTIFIER == identifier,
            ) || null
        );
    }

    /**
     * Check if a thing class exists.
     * @function thingExists
     * @memberof Collection
     * @param {string} identifier Identifier of the thing.
     * @returns {boolean} `ture` if `Thing` class exists, `false` if not.
     */
    thingExists(identifier: string): boolean {
        return this.getThingClass(identifier) != null;
    }
}
