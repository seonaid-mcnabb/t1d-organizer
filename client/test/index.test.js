import React from 'react';
import { mount } from 'enzyme';
import Client from '../src';

describe('<Client />', () => {
  test('renders correctly', () => {
    const wrapper = mount(<Client />);
    expect(wrapper).toMatchSnapshot();
  });
});
