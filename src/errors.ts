/**
 * Base Sivrad Knowledgebase Collection Error.
 * @abstract
 */
export abstract class CollectionError extends Error {
    /**
     * Constructor for a Sivrad Knowledgebase Collection Error.
     * @param {string} name    Name of the error.
     * @param {string} message Message of the error.
     */
    constructor(name: string, message: string) {
        super(`${name}: ${message}`);
    }
}

/**
 * Base Sivrad Knowledgebase Thing Error.
 * @abstract
 */
export abstract class ThingError extends CollectionError {
    /**
     * Constructor for a Sivrad Knowledgebase Thing Error.
     * @param {string} name    Name of the error.
     * @param {string} message Message of the error.
     */
    constructor(name: string, message: string) {
        super(name, message);
    }
}

/**
 *
 */
export class UninstantiatedThingError extends ThingError {
    /**
     * Constructor for a Sivrad Knowledgebase Uninstantiated Thing Error.
     * @param {string} message Message of the error.
     */
    constructor(message: string) {
        super('UninstantiatedThingError', message);
    }
}
