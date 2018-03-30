const plugin = (args) => {
    const props = args[1];

    if (!props) return args;

    const {$dom} = props;

    if (!$dom) return args;

    delete props.$dom;

    if (process.env.NODE_ENV !== 'production') {
        if (typeof $dom !== 'object') {
            console.error(
                `JSX++ $dom plugin expected $dom prop to be an object, received "${typeof $dom}".`
            );
        }
    }

    const {$attach, $update, $detach} = props;

    props.$attach = (el, props) => {
        if ($attach) $attach(el, props);

        for (const prop in $dom)
            el[prop] = $dom[prop];
    };

    props.$update = (el, props, oldProps) => {
        if ($update) $update(el, props, oldProps);

        for (const prop in $dom)
            el[prop] = $dom[prop];

        const oldDom = (oldProps || {}).$dom || {};

        for (const prop in oldProps) {
            if (!(prop in $dom)) {
                delete el[prop];
            }
        }
    };

    props.$detach = (el, oldProps) => {
        if ($detach) $detach(el, oldProps);

        const oldDom = (oldProps || {}).$dom || {};

        for (const prop in oldProps) {
            delete el[prop];
        }
    };

    return args;
};

export default plugin;
