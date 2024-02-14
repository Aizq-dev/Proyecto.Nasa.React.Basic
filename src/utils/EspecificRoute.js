

export const especific_data = (options, location) => {
    const filteredOptions = options.filter(item => item.name === location);
    if (filteredOptions.length > 0) {
        return filteredOptions[0];
    } else {
        return null; 
    }
}