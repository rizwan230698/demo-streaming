import React from 'react';
import { render } from 'enzyme';
import Sort from '../components/sort';

test('Should render a Sort Component', () => {
  expect(render(<Sort />)).toMatchSnapshot();
});
