const plugin = (args) => {
    const props = args[1];

    if (!props) return args;

    const {$attr} = props;

    if (!$attr) return args;

    delete props.$attr;

    if (process.env.NODE_ENV !== 'production') {
        if (typeof $attr !== 'object') {
            console.error(
                `JSX++ $attr plugin expected $attr prop to be an object, received "${typeof $attr}".`
            );
        }
    }

    const {$attach, $update, $detach} = props;

    props.$attach = (el, props) => {
        if ($attach) $attach(el, props);

        for (const prop in $attr)
            el.setAttribute(prop, $attr[prop]);
    };

    props.$update = (el, props, oldProps) => {
        if ($update) $update(el, props, oldProps);

        for (const prop in $attr)
            el.setAttribute(prop, $attr[prop]);

        const oldAtts = oldProps.$attr || {};

        for (const prop in oldAttrs) {
            if (!(prop in $attr)) {
                el.removeAttribute(prop);
            }
        }
    };

    props.$detach = (el, oldProps) => {
        if ($detach) $detach(el, oldProps);

        const oldAttrs = oldProps.$attr || {};

        for (const prop in oldAttrs) {
            el.removeAttribute(prop);
        }
    };

    return args;
};

export default plugin;
