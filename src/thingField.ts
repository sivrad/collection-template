import { Data } from './types';

/**
 * Class for a field.
 */
export class ThingField {
    /**
     * Constructor for a `Thing`'s `Field`.
     * @param {string} identifier Identifier of the field.
     * @param {string} label      Label of the field.
     * @param {Object} type       Type of the field.
     */
    constructor(
        public identifier: string,
        public label: string,
        public type: Data,
    ) {}
}
