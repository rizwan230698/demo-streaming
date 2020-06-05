import React from 'react';
import { render } from 'enzyme';
import Button from '../components/button';

test('Should render a Button Component', () => {
  expect(render(<Button />)).toMatchSnapshot();
});
