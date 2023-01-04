import React from 'react';
import renderer from 'react-test-renderer';

import {DiceButton} from '../index';

it('renders correctly', () => {
    const tree = renderer.create(<DiceButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });