import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach( () => {
    const mockProps = {
        getRobots: jest.fn(),
        robots: {
            isPending: false,
            isError: false,
            data: [] },
        searchKey: ''
    };
    wrapper = shallow(<MainPage { ...mockProps } />);
});

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('can be pending', () => {
    const mockProps = {
        getRobots: jest.fn(),
        robots: {
            isPending: true,
            isError: false,
            data: [] },
        searchKey: 'eee'
    };

    wrapper = shallow(<MainPage { ...mockProps } />);
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly', () => {
    const mockProps = {
        getRobots: jest.fn(),
        robots: {
            isPending: false,
            isError: false,
            data: [] },
        searchKey: 'eee'
    };

    wrapper = shallow(<MainPage { ...mockProps } />);
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly', () => {
    const mockProps = {
        getRobots: jest.fn(),
        robots: {
            isPending: false,
            isError: false,
            data: [{
                id: 1,
                name: 'Ervin Howell',
                username: 'Shanna',
                email: 'Shanna@melissa.tv'
            }] 
        },
        searchKey: 'ervin'
    };

    const filteredRobot = [{
        id: 1,
        name: 'Ervin Howell',
        username: 'Shanna',
        email: 'Shanna@melissa.tv'
    }];

    wrapper = shallow(<MainPage { ...mockProps } />);
    expect(wrapper.instance().filterRobots()).toEqual(filteredRobot);

});

it('filters robots correctly2', () => {
    const mockProps = {
        getRobots: jest.fn(),
        robots: {
            isPending: false,
            isError: false,
            data: [{
                id: 1,
                name: 'Ervin Howell',
                username: 'Shanna',
                email: 'Shanna@melissa.tv'
            }] 
        },
        searchKey: 'good'
    };

    const filteredRobot = [{
        id: 1,
        name: 'Ervin Howell',
        username: 'Shanna',
        email: 'Shanna@melissa.tv'
    }];

    wrapper = shallow(<MainPage { ...mockProps } />);
    expect(wrapper.instance().filterRobots()).toEqual([]);

});

