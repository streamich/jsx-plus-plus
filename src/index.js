const createHyperscript = (h, plugins) => {
    return (...args) => {
        for (let i = 0; i < plugins.length; i++)
            args = plugins[i](args);

        return h(...args);
    };
};

export default createHyperscript;
