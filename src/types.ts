import { BaseThing } from './baseThing';
import { ThingField } from './thingField';

/**
 * `Thing` class.
 */
export type CollectionThing = typeof BaseThing;
/**
 * Array of `Thing` classes.
 */
export type CollectionThings = CollectionThing[];

export type ObjectOf<T> = Record<string, T>;

export type Data = ObjectOf<unknown>;

export type ThingFieldObject = ObjectOf<ThingField>;
