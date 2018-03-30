import '../src/patch';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {create} from 'nano-css';
import {addon as addonRule} from 'nano-css/addon/rule';

storiesOf('on', module)
  .add('click', () => <div $on={{click: () => console.log('LOLO')}}>Click me!</div>)
