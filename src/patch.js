import React, {createElement} from 'react';
import createHyperscript from './createHyperscript';

const h = createHyperscript(createElement);

React.createElement = h;
