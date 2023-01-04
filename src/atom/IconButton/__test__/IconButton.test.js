import React from 'react';
import renderer from 'react-test-renderer';

import {IconButton} from '../index';

it('renders correctly', () => {
    const tree = renderer.create(<IconButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });