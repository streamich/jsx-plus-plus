const plugin = (args) => {
    const props = args[1];

    if (!props) return args;

    const {$dom} = props;

    if (!$dom) return args;

    if (process.env.NODE_ENV !== 'production') {
        if (typeof $dom !== 'object') {
            console.error(
                `JSX++ $dom plugin expected $dom prop to be an object, received "${typeof $dom}".`
            );
        }
    }

    const {$attach, $update} = props;

    props.$attach = (el, props) => {
        if ($attach) $attach(el, props);

        for (const prop in $dom)
            el[prop] = $dom[prop];
    };

    props.$update = (el, props, oldProps) => {
        if ($update) $update(el, props, oldProps);

        for (const prop in $dom)
            el[prop] = $dom[prop];
    };

    return args;
};

export default plugin;
