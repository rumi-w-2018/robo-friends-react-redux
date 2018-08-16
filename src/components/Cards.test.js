import { shallow } from 'enzyme';
import React from 'react';
import Cards from './Cards';

it('exptects to render Cards component', () => {
    const mockRobots = [{
        id: 1,
        name: 'John',
        email: 'john@gmail.com'
    }];
    expect(shallow(<Cards robots={mockRobots} />)).toMatchSnapshot();
});