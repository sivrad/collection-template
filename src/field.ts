import 'reflect-metadata';

// eslint-disable-next-line @typescript-eslint/ban-types
export const Field = (target: Object, key: string): void => {
    const type = Reflect.getMetadata('design:type', target, key);
    console.log(`${key}: ${type}`);
};
