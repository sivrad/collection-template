import 'reflect-metadata';
import { Collection } from '../collection';
import { ObjectOf } from '../types';

export const Thing = (collection: Collection, label: string) => <
    T extends { new (...args: any[]): Object }
>(
    constructor: T,
): typeof constructor => {
    const name = constructor.name;
    const newClass: ObjectOf<any> = {};
    newClass['cls'] = class extends constructor {};
    Reflect.defineMetadata('skb:collection', collection, newClass['cls']);
    Reflect.defineMetadata('skb:name', name, newClass['cls']);
    Reflect.defineMetadata('skb:label', label, newClass['cls']);
    Reflect.defineMetadata('skb:fields', {}, newClass['cls']);

    collection.addThingClass(newClass['cls'] as any);

    return newClass['cls'];
};
