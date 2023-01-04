import React from 'react';
import renderer from 'react-test-renderer';

import {SmallTitle} from '../SmallTitle';

it('renders correctly', () => {
    const tree = renderer.create(<SmallTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });