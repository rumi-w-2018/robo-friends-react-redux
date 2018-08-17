import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('exptects to render CounterButton component', () => {
  const mockColor = 'yellow';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly increments the cunter', () => {
  const mockColor = 'yellow';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 3 });
  //console.log(wrapper.props());
  expect(wrapper.props().color).toEqual('yellow');
});

it('updates when state changes', () => {
  const wrapper = shallow(<CounterButton color="yellow" />);
  const nextState = { count: 2 };
  const shouldUpdate = wrapper.instance().shouldComponentUpdate({}, nextState);
  expect(shouldUpdate).toBe(true); // false if nextState={count:1}
});
