import React from 'react';
import renderer from 'react-test-renderer';

import {BigTitle} from '../index';

it('renders correctly', () => {
    const tree = renderer.create(<BigTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });