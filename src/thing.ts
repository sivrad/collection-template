// Thing Class

import { Collection } from './collection';
import { UninstantiatedThingError } from './errors';
import { Data } from './types';

/**
 * The base `Thing` class.
 * @abstract
 */
export abstract class Thing {
    abstract IDENTIFIER = 'thing';
    abstract COLLECTION: Collection;

    /**
     * Constructor for a `Thing`.
     * @param {Collection}    collection Collection instance.
     * @param {Data}          data       Data to create the `Thing`.
     * @param {string | null} identifier Identifier of the instance if needed.
     */
    constructor(
        private collection: Collection,
        private data: Data = {},
        private identifier: string | null = null,
    ) {
        // const isInstance = identifier != null;
    }

    //////////////////////////////////////
    //                                  //
    //          STATIC METHODS          //
    //                                  //
    //////////////////////////////////////

    /**
     * Get the thing properties.
     */
    static getThingProperties(): void {
        // TODO: implement
    }

    //////////////////////////////////////
    //                                  //
    //       STATIC ASYNC METHODS       //
    //                                  //
    //////////////////////////////////////

    /**
     * Return an instance of a thing from an identifier.
     * @function get
     * @memberof Thing
     * @async
     * @param {string} identifier Identifier of the instance.
     * @returns {Promise<Thing | null>} `Thing` if exists, `null` if not.
     */
    static async get(identifier: string): Promise<Thing | null> {
        // Implement this
    }

    /**
     * Remove an instance of a thing from an identifier.
     * @function remove
     * @memberof Thing
     * @static
     * @async
     * @param {string} identifier Identifier of the instance.
     * @returns {Promise<boolean>} `true` if removed successfully, `false` if not.
     */
    static async remove(identifier: string): Promise<boolean> {
        // Implement this
        return false;
    }

    //////////////////////////////////////
    //                                  //
    //             METHODS              //
    //                                  //
    //////////////////////////////////////

    /**
     * If the `Thing` is an instance.
     * @function isInstantiated
     * @memberof Thing
     * @returns {boolean} `true` if instance, `false` if not.
     */
    isInstantiated(): boolean {
        return this.identifier != null;
    }

    //////////////////////////////////////
    //                                  //
    //          ASYNC METHODS           //
    //                                  //
    //////////////////////////////////////

    /**
     * Remove the `Thing`.
     * @function remove
     * @memberof Thing
     * @async
     * @returns {Promise<boolean>} `true` if removed successfully, `false` if not.
     */
    async remove(): Promise<boolean> {
        // Test if thing is uninstantiated.
        if (!this.isInstantiated())
            throw new UninstantiatedThingError(
                'An UninstantiatedThing can not be deleted.',
            );
        return await Thing.remove(this.identifier as string);
    }

    /**
     * Verify the given data for a `Thing`.
     * Async for verification that requires web access.
     * @function verifyData
     * @memberof Thing
     * @async
     * @param {Data} data The given data.
     * @returns {Promise<boolean>} `true` if valid data, `false` if not.
     */
    async verifyData(data: Data): Promise<boolean> {
        return true;
    }
}
