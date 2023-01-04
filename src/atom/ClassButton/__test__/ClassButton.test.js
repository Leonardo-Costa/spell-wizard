import React from 'react';
import renderer from 'react-test-renderer';

import {ClassButton} from '../index';

it('renders correctly', () => {
    const tree = renderer.create(<ClassButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });