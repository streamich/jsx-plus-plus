const createHyperscript = (h, plugins) => {
    return (...args) => {
        const type = args[0];
        const props = args[1];

        if (props && (typeof type === 'string')) {
            for (let i = 0; i < plugins.length; i++)
                args = plugins[i](args);
        }

        return h(...args);
    };
};

export default createHyperscript;
