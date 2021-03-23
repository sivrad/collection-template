import { BaseThing } from './baseThing';
import { CollectionThing, CollectionThings } from './types';

/**
 * Base Collection Class.
 */
export class Collection {
    public thingClasses: CollectionThings = [];

    /**
     * Constructor for a collection.
     * @param {string}           identifier   Identifier of the collection.
     * @param {string}           label        Label of the collection.
     * @param {string}           description  Description of the collection.
     */
    constructor(
        private identifier: string,
        private label: string,
        private description: string,
    ) {}

    /**
     * Returns the `Collection`'s identifier.
     * @function getIdentifier
     * @memberof BaseThing
     * @returns {string} `Collection`'s identifier.
     */
    getIdentifier(): string {
        return this.identifier;
    }

    /**
     * Returns the `Collection`'s label.
     * @function getLabel
     * @memberof BaseThing
     * @returns {string} `Collection`'s label.
     */
    getLabel(): string {
        return this.label;
    }

    /**
     * Returns the `Collection`'s description.
     * @function getDescription
     * @memberof BaseThing
     * @returns {string} `Collection`'s description.
     */
    getDescription(): string {
        return this.description;
    }

    /**
     * Returns a Thing class from a collection.
     * @function getThingClass
     * @memberof Collection
     * @param   {string}             name Name of the thing.
     * @returns {CollectionThing | null} `Thing` class if exists, `null` if not.
     */
    getThingClass(name: string): CollectionThing | null {
        return (
            this.thingClasses.find((thing) => thing.getName() == name) || null
        );
    }

    /**
     * Check if a thing class exists.
     * @function thingExists
     * @memberof Collection
     * @param   {string} name Name of the thing.
     * @returns {boolean}     `ture` if `Thing` class exists, `false` if not.
     */
    thingExists(name: string): boolean {
        return this.getThingClass(name) != null;
    }

    /**
     * Add a Thing class to the collection.
     * @param {typeof BaseThing} thingClass The class of the thing to add.
     */
    addThingClass(thingClass: typeof BaseThing): void {
        this.thingClasses.push(thingClass);
    }
}
