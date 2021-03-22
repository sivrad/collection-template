import 'reflect-metadata';
import { ThingField } from '../thingField';
import { toLabel } from '../util';

export const Field = (label: string | null = null) => (
    target: Object,
    key: string,
): void => {
    // Get the type
    const type = Reflect.getMetadata('design:type', target, key);
    // Get the current fields
    const fields = Reflect.getMetadata('skb:fields', target) || {};
    // Add the new field
    fields[key] = new ThingField(key, label || toLabel(key), type);
    // Set the fields
    Reflect.defineMetadata('skb:fields', fields, target);
};
