import React, {createElement} from 'react';
import applyPlugins from './index';
import classnames from './plugins/classnames';
import dom from './plugins/dom';
import {createHyperscript} from 'react-micro-lifecycles/lib';

const plugins = [
    classnames,
    dom,
];

var h = createElement;

h = createHyperscript(createElement);
h = applyPlugins(h, plugins);

React.createElement = h;
