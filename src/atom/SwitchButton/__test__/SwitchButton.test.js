import React from 'react';
import renderer from 'react-test-renderer';

import {SwitchButton} from '../SwitchButton';

it('renders correctly', () => {
    const tree = renderer.create(<SwitchButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });