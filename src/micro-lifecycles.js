const sym = typeof Symbol === 'object' ? Symbol('mcycles') : '@@mcycles';

const microLifecycles = props => {
    const {$attach, $update, $detach, ref} = props;

    if (process.env.NODE_ENV !== 'production') {
        if (ref && typeof ref !== 'function') {
            console.error(
                'micro-lifecycles received props with ref, expected ref to be a function, "' +
                    typeof ref +
                    '" provided.'
            );
        }
    }

    if (ref) ref(el);
};
