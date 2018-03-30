import {create} from 'nano-css';
import {addon as addonRule} from 'nano-css/addon/rule';
import {addon as addonPipe} from 'nano-css/addon/pipe';

const nano = create({
    pfx: 'jsxpp-'
});

addonRule(nano);
addonPipe(nano);

const pipes = new WeakMap;


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

    props.$attach = (el, props) => {
        if ($attach) $attach(el, props);

        const pipe = nano.pipe();

        pipes.set(el, pipe);
        pipe.css($css);
        props[pope.attr] = '';
    };

    return args;
};

export default plugin;
