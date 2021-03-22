import { BaseThing, Collection, Field, Thing } from '../src';

const testCollection = new Collection('test', 'Test Collection', 'For testing');

/**
 * Hi.
 */
@Thing(testCollection, 'Greeter')
class Hi extends BaseThing {
    collection = 'std';

    @Field()
    name: string;
}

const hol = new Hi();

console.log(hol.toString());
console.log(Hi.getName());

console.log(testCollection);

// console.log(Hi.getLabel());
