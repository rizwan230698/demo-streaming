import React from 'react';
import { render } from 'enzyme';
import Card from '../components/card';

test('Should render a Card Component', () => {
  expect(render(<Card />)).toMatchSnapshot();
});
