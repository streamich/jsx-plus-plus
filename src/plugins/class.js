import cx from 'classnames';

const h = (args) => {
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
