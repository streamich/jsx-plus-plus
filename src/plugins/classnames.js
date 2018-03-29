import cx from 'classnames';

const plugin = (args) => {
    const props = args[1];

    if (!props) return args;

    let className = props.className || props.class;

    if (className) {
        className = cx(className);
        props.className = className;
        props.class = className;
    }

    return args;
};

export default plugin;
