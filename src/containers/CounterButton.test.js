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
    expect(wrapper.state()).toEqual({ count:2 });

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count:3 });
    //console.log(wrapper.props());
    expect(wrapper.props().color).toEqual('yellow');

});