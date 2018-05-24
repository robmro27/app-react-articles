import React from 'react';
import {shallow} from 'enzyme';

import App from './App';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

it('renders without crashing', () => {
  shallow(<App/>)
})

it('contains AppHeader', () => {
    const app = shallow(<App/>);
    expect(app.containsMatchingElement(<AppHeader/>)).toEqual(true);
})

it('contains AppBody', () => {
    const app = shallow(<App/>);
    expect(app.containsMatchingElement(<AppBody/>)).toEqual(true);
})

it('contains AppFooter', () => {
    const app = shallow(<App/>);
    expect(app.containsMatchingElement(<AppFooter/>)).toEqual(true);
})