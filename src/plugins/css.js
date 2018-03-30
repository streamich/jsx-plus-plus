const plugin = (args) => {
    const props = args[1];

    if (!props) return args;

    const {$css} = props;

    if (!$css) return args;

    delete props.$css;

    if (process.env.NODE_ENV !== 'production') {
        if (typeof $attr !== 'object') {
            console.error(
                `JSX++ $css plugin expected $css prop to be an object, received "${typeof $css}".`
            );
        }
    }

    const {$attach, $update, $detach} = props;


    return args;
};

export default plugin;
