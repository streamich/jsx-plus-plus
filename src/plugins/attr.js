const plugin = (args) => {
    const props = args[1];

    if (!props) return args;

    const {$attr} = props;

    if (!$attr) return args;

    if (process.env.NODE_ENV !== 'production') {
        if (typeof $attr !== 'object') {
            console.error(
                `JSX++ $attr plugin expected $attr prop to be an object, received "${typeof $attr}".`
            );
        }
    }

    const {$attach, $update} = props;

    props.$attach = (el, props) => {
        if ($attach) $attach(el, props);

        for (const prop in $attr)
            el.setAttribute(prop, $attr[prop]);
    };

    props.$update = (el, props) => {
        if ($update) $update(el, props);

        for (const prop in $attr)
            el.setAttribute(prop, $attr[prop]);
    };

    return args;
};

export default plugin;
