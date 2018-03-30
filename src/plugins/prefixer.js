import Prefixer from 'inline-style-prefixer'

const prefixer = new Prefixer();

const plugin = (args) => {
    const props = args[1];

    if (props && props.style) {
        props.style = prefixer.prefix(props.style);
        console.log('2', props.style);
    }

    return args;
};

export default plugin;
