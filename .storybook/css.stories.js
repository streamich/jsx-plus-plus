import '../src/patch';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {create} from 'nano-css';
import {addon as addonRule} from 'nano-css/addon/rule';

storiesOf('css', module)
  .add('basic', () => <div $css={{color: 'red', '&:hover': {color: 'blue'}}}>Hover me!</div>)
