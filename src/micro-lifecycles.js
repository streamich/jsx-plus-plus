const sym = typeof Symbol === 'object' ? Symbol('mcycles') : '@@mcycles';
const noop = () => {};

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

    if (!el) return;

    let ctx;

    if (!el[sym]) {
        el[sym] = props;

        const observer = new MutationObserver(mutations => {
            for (let i = 0; i < mutations.length; i++) {
                const mutation = mutations[i];

                if (mutation.removedNodes.length) {
                    const nodes = mutation.removedNodes;

                    for (let j = 0; j < nodes.length; j++) {
                        if (nodes[j] === el) {
                            observer.disconnect();

                            const oldProps = el[sym];

                            (oldProps.$detach || noop)(el, oldProps);

                            return;
                        }
                    }
                }
            }
        });

        observer.observe(el.parentNode, {childList: true});

        ($attach || noop)(el, props);

        return;
    }

    const oldProps = el[sym];

    el[sym] = props;
    ($update || noop)(el, props, oldProps);
};
