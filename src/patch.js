import createHyperscriptStable from 'react-micro-lifecycles/lib/createHyperscriptStable';
import React from 'react';
import applyPlugins from './index';
import classnames from './plugins/classnames';
import dom from './plugins/dom';
import attr from './plugins/attr';

const plugins = [
    classnames,
    dom,
    attr,
];

var h = React.createElement;

h = createHyperscriptStable(h, React.Component);
h = applyPlugins(h, plugins);

React.createElement = h;
