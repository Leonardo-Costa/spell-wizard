import React from 'react';
import renderer from 'react-test-renderer';

import {FilterButton} from '../index';

it('renders correctly', () => {
    const tree = renderer.create(<FilterButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });