import 'reflect-metadata';
// import { UndecoratedThing } from './errors';
import { ThingFieldObject } from './types';

/**
 * The base `Thing` class.
 * @abstract
 */
export abstract class BaseThing {
    /**
     * Constructor for a BaseThing.
     */
    constructor() {
        // TODO: Verify the existance of the SKB metadata.
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
        return Reflect.getMetadata(metadataKey, this);
    }

    /**
     * Return SKB specific metadata.
     * @function getMetadata
     * @memberof BaseThing
     * @private
     * @static
     * @param {string} metadataKey The metadata key.
     * @returns {T} Metadata value.
     */
    private static getSKBMetadata<T = unknown>(metadataKey: string): T {
        return this.getMetadata<T>(`skb:${metadataKey}`);
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
        return Reflect.getMetadata(metadataKey, this.constructor);
    }

    /**
     * Return SKB specific metadata.
     * @function getSKBMetadata
     * @private
     * @param {string} metadataKey The metadata key.
     * @returns {T} Metadata value.
     */
    private getSKBMetadata<T = unknown>(metadataKey: string): T {
        return this.getMetadata<T>(`skb:${metadataKey}`);
    }

    /**
     * Return the `Thing`'s name.
     * @returns {string} Name.
     */
    static getName(): string {
        return this.getSKBMetadata('name') as string;
    }

    /**
     * Return the `Thing`'s label.
     * @returns {string} Label.
     */
    static getLabel(): string {
        return this.getSKBMetadata('label') as string;
    }

    /**
     * Return the fields for a `Thing`.
     * @function getFields
     * @memberof Thing
     * @returns {ThingFieldObject} Object of the Thing's fields.
     */
    static getFields(): ThingFieldObject {
        return this.getSKBMetadata('fields') as ThingFieldObject;
    }

    /**
     * Return the Name of Thing type.
     * @returns {string} Name.
     */
    getTypeName(): string {
        return this.getSKBMetadata('name') as string;
    }

    /**
     * Label.
     * @returns {string} Label.
     */
    getTypeLabel(): string {
        return this.getSKBMetadata('label') as string;
    }

    /**
     * Represents the `Thing` as a string.
     * @returns {string} String representation.
     */
    toString(): string {
        return `instance of ${this.getTypeName()}`;
    }
}
