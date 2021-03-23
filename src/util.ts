import 'reflect-metadata';
import { METADATA_PREFIX } from './constants';
import { Data } from './types';

export const capitalize = (str: string): string =>
    str[0].toUpperCase() + str.substr(1, str.length).toLowerCase();

export const toLabel = (str: string): string =>
    str.split('_').map(capitalize).join(' ');

export const defineMetadata = (thing: Object, metadata: Data): void => {
    for (const key of Object.keys(metadata)) {
        const value = metadata[key];
        Reflect.defineMetadata(`${METADATA_PREFIX}:${key}`, value, thing);
    }
};
