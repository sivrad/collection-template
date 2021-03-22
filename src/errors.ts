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
 * Sivrad Knowledgebase Uninstantiated Thing Error.
 *
 * This happens when an uninstantiated Thing is used as if it were to be instantiated.
 */
export class UninstantiatedThing extends ThingError {
    /**
     * Constructor for a Sivrad Knowledgebase Uninstantiated Thing Error.
     * @param {string} message Message of the error.
     */
    constructor(message: string) {
        super('UninstantiatedThingError', message);
    }
}

/**
 * Undecorated Thing Error.
 *
 * This happends when a Thing is created that has not been decorated with the `@Thing` decorator.
 */
export class UndecoratedThing extends ThingError {
    /**
     * Constructor for a Sivrad Knowledgebase Undecorated Thing Error.
     */
    constructor() {
        super(
            'UndecoratedThingError',
            'You must decorate the Thing before creating an instance of it',
        );
    }
}
