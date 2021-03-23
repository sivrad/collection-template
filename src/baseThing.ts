import 'reflect-metadata';
import { Collection } from './collection';
import { UndecoratedThing } from './errors';
import { ThingField } from './thingField';
import { ThingFieldObject } from './types';

/**
 * The base `Thing` class.
 * @abstract
 */
export abstract class BaseThing {
    private static fields: ThingFieldObject = {};

    /**
     * Constructor for a BaseThing.
     */
    constructor() {
        // Verify the existance of the SKB metadata.
        this.verifyMetadata();
    }

    /**
     * Return metadata with reflect metadata.
     * @function getMetadata
     * @memberof BaseThing
     * @private
     * @static
     * @param {string} metadataKey The metadata key.
     * @returns {unknown} Metadata value.
     */
    private static getMetadata<T = unknown>(metadataKey: string): T {
        if (!metadataKey.includes(':')) metadataKey = `skb:${metadataKey}`;
        return Reflect.getMetadata(metadataKey, this);
    }

    /**
     * Return the collection Id and Thing type.
     * @function getType
     * @memberof BaseThing
     * @static
     * @returns {string} The Thing type id.
     */
    static getType(): string {
        return `${this.getCollection().getIdentifier()}.${this.getName()}`;
    }

    /**
     * Return the `Thing`'s name.
     * @function getName
     * @memberof BaseThing
     * @static
     * @returns {string} Name.
     */
    static getName(): string {
        return this.getMetadata('name') as string;
    }

    /**
     * Return the `Thing`'s label.
     * @function getLabel
     * @memberof BaseThing
     * @static
     * @returns {string} Label.
     */
    static getLabel(): string {
        return this.getMetadata('label') as string;
    }

    /**
     * Return the fields for a `Thing`.
     * @function getFields
     * @memberof Thing
     * @static
     * @returns {ThingFieldObject} Object of the Thing's fields.
     */
    static getFields(): ThingFieldObject {
        return this.fields;
    }

    /**
     * Add a `ThingField` to the `Thing`'s fields.
     * @function addField
     * @memberof Thing
     * @static
     * @param {ThingField} field The `ThingField` to add.
     * @returns {void}
     */
    static addField(field: ThingField): void {
        this.fields[field.identifier] = field;
    }

    /**
     * Return the `Collection` for the `Thing`.
     * @function getCollection
     * @memberof BaseThing
     * @static
     * @returns {Collection} The assosiated collection.
     */
    static getCollection(): Collection {
        return this.getMetadata('collection') as Collection;
    }

    /**
     * Return metadata with reflect metadata.
     * @function getMetadata
     * @memberof BaseThing
     * @private
     * @param {string} metadataKey The metadata key.
     * @returns {unknown} Metadata value.
     */
    private getMetadata<T = unknown>(metadataKey: string): T {
        if (!metadataKey.includes(':')) metadataKey = `skb:${metadataKey}`;
        return Reflect.getMetadata(metadataKey, this.constructor);
    }

    /**
     * Verify the existance of metadata.
     * @function verifyMetadata
     * @memberof BaseThing
     * @private
     * @returns {void}
     */
    private verifyMetadata(): void {
        if (!(this.getMetadata('isDecorated') || false))
            throw new UndecoratedThing();
    }

    /**
     * Return the type of the `Thing`.
     * @function getType
     * @memberof BaseThing
     * @returns {string} The type of the `Thing`.
     */
    getType(): string {
        return `${this.getCollection().getIdentifier()}.${this.getTypeName()}`;
    }

    /**
     * Return the `Collection` for the `Thing`.
     * @function getCollection
     * @memberof BaseThing
     * @returns {Collection} The `Collection` for the `Thing`.
     */
    getCollection(): Collection {
        return this.getMetadata('collection') as Collection;
    }

    /**
     * Return the Name of Thing type.
     * @returns {string} Name.
     */
    getTypeName(): string {
        return this.getMetadata('name') as string;
    }

    /**
     * Label.
     * @returns {string} Label.
     */
    getTypeLabel(): string {
        return this.getMetadata('label') as string;
    }

    /**
     * Represents the `Thing` as a string.
     * @returns {string} String representation.
     */
    toString(): string {
        return `<${this.getType()}#0000>`;
    }
}
