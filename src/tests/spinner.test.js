import React from 'react';
import { render } from 'enzyme';
import Spinner from '../components/spinner';

test('Should render a Spinner Component', () => {
  expect(render(<Spinner />)).toMatchSnapshot();
});
