import React, {createElement} from 'react';
import createHyperscript from './createHyperscript';
import classnames from './plugins/classnames';

const plugins = [
    classnames
];

const h = createHyperscript(createElement, plugins);

React.createElement = h;
