import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

it('exptects to render App component', () => {
    const mockStore = {
        isPending: true,
        isError: false,
        data: []
    };

    expect(shallow(<App  />)).toMatchSnapshot();
});

