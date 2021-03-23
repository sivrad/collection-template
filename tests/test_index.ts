import { BaseThing, Collection, Field, Thing } from '../src';

const testCollection = new Collection('test', 'Test Collection', 'For testing');

/**
 * Hi.
 */
@Thing(testCollection)
class Entity extends BaseThing {
    @Field()
    name: string;
}

/**
 * Yo.
 */
@Thing(testCollection)
class Person extends Entity {
    @Field()
    age: number;
}

// const hol = new Hi();

console.log(Person.getParentsPath());

// console.log(Hi.getLabel());
