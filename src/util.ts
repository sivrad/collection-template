export const capitalize = (str: string): string =>
    str[0].toUpperCase() + str.substr(1, str.length).toLowerCase();

export const toLabel = (str: string): string =>
    str.split('_').map(capitalize).join(' ');
