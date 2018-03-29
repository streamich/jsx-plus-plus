import {createHyperscript} from 'react-micro-lifecycles/lib';
import React, {createElement} from 'react';
import applyPlugins from './index';
import classnames from './plugins/classnames';
import dom from './plugins/dom';
import attr from './plugins/attr';

const plugins = [
    classnames,
    dom,
    attr,
];

var h = createElement;

h = createHyperscript(createElement);
h = applyPlugins(h, plugins);

React.createElement = h;
