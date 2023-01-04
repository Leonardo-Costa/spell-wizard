import React from 'react';
import renderer from 'react-test-renderer';

import {Icon} from '../index';

it('renders correctly', () => {
    const tree = renderer.create(<Icon />).toJSON();
    expect(tree).toMatchSnapshot();
  });