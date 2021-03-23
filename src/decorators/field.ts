import 'reflect-metadata';
import { BaseThing } from '../baseThing';
// import { METADATA_PREFIX } from '../constants';
import { ThingField } from '../thingField';
import { toLabel } from '../util';

// const fieldsKey = `${METADATA_PREFIX}:fields`;

export const Field = (label: string | null = null) => (
    target: BaseThing,
    key: string,
): void => {
    // Class
    const thing = target.constructor as typeof BaseThing;
    // Get the label
    label = label || toLabel(key);
    // Get the type
    const type = Reflect.getMetadata('design:type', target, key);
    // Add the field to the thing
    thing.addField(new ThingField(key, label, type));
};
