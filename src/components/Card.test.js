import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

// shallow renderer renders only Card component
it('expects to render Card component', () => {
    expect(shallow(<Card />).length).toEqual(1);

});

// this create snapshot folder
it('expects to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});