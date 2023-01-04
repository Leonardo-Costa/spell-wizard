import React from 'react';
import renderer from 'react-test-renderer';

import {Separator} from '../index';

it('renders correctly', () => {
    const tree = renderer.create(<Separator />).toJSON();
    expect(tree).toMatchSnapshot();
  });