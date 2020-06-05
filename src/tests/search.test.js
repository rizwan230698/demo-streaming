import React from 'react';
import { render } from 'enzyme';
import Search from '../components/search';

test('Should render a Search Component', () => {
  expect(render(<Search />)).toMatchSnapshot();
});
