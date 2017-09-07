module.exports = (config = {}) => { // Default de config es '{}'

    config.masks = config.masks || [];
    config.radix = config.radix || 32;


    function mask(number, options) {
        options = options || config;
        return options.masks
            .reduce((acc, current) => (acc ^ current), number)
            .toString(options.radix);
    }

    function unmask(mask, options) {
        options = options || config;
        const number = parseInt(mask, options.radix);

        return options.masks
            .reverse()
            .reduce((acc, current) => (acc ^ current), number)
            .toString();

    }

    return {
        mask,
        unmask
    };

};
