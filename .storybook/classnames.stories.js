import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {create} from 'nano-css';
import {addon as addonRule} from 'nano-css/addon/rule';

const nano = create();

addonRule(nano);

const {rule} = nano;

const classNameRed = rule({
  color: 'red'
});

storiesOf('classnames', module)
  .add('className', () => <div className={classNameRed}>test</div>)