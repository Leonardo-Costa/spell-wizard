import React from 'react';
import renderer from 'react-test-renderer';

import {SchoolButton} from '../index';

it('renders correctly', () => {
    const tree = renderer.create(<SchoolButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });