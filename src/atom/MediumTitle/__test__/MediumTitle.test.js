import React from 'react';
import renderer from 'react-test-renderer';

import {MediumTitle} from '../index';

it('renders correctly', () => {
    const tree = renderer.create(<MediumTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });