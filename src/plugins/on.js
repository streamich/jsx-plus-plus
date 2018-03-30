const noop = () => {};
const mapListeners = new WeakMap;
const mapOn = new WeakMap;

const plugin = (args) => {
    const props = args[1];

    if (!props) return args;

    const {$on} = props;

    if (!$on) return args;

    if (process.env.NODE_ENV !== 'production') {
        if (typeof $on !== 'object') {
            console.error(
                `JSX++ $on plugin expected $on prop to be an object, received "${typeof $on}".`
            );
        }
    }

    const {$attach, $update, $detach} = props;

    props.$attach = (el, props) => {
        if ($attach) $attach(el, props);

        mapOn.set(el, $on);

        let listeners = mapListeners.get(el);

        if (!listeners) {
            listeners = {};
            mapListeners.set(el, listeners);
        }

        for (const prop in $on) {
            const listener = function () {
                const on = mapOn.get(el);

                (on[prop] || noop).apply(this, arguments);
            };

            listeners[prop] = listener;
            el.addEventListener(prop, listener);
        }
    };

    props.$update = (el, props, oldProps) => {
        if ($update) $update(el, props, oldProps);

        mapOn.set(el, $on);

        let listeners = mapListeners.get(el);

        if (!listeners) {
            listeners = {};
            mapListeners.set(el, listeners);
        }

        for (const prop in $on) {
            if (!(prop in listeners)) {
                const listener = function () {
                    const on = mapOn.get(el);
                    
                    (on[prop] || noop).apply(this, arguments);
                };
                
                listeners[prop] = listener;
                el.addEventListener(prop, listener);
            }
        }

        for (const prop in listeners) {
            if (!(prop in $on)) {
                el.removeEventListener(prop, listeners[prop]);
            }
        }
    };

    props.$detach = (el, oldProps) => {
        if ($detach) $detach(el, props);

        const listeners = mapListeners.get(el) || {};

        mapListeners.delete(el);

        for (const prop in listeners) {
            el.removeEventListener(prop, listeners[prop]);
        }
    };

    return args;
};

export default plugin;
