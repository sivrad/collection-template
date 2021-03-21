import { Thing } from './thing';

/**
 * `Thing` class.
 */
export type CollectionThing = typeof Thing;
/**
 * Array of `Thing` classes.
 */
export type CollectionThings = CollectionThing[];

export type Data = Record<string, unknown>;
