import { BaseThing, Collection, Field, Thing } from '../src';

const testCollection = new Collection('test', 'Test Collection', 'For testing');

/**
 * Hi.
 */
@Thing(testCollection)
class Hi extends BaseThing {
    @Field()
    name: string;
}

/**
 * Yo.
 */
@Thing(testCollection)
class Yo extends Hi {
    @Field()
    age: number;
}

// const hol = new Hi();

console.log(Yo.getFields());

// console.log(Hi.getLabel());
