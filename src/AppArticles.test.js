import React from 'react';
import {shallow} from 'enzyme';

import AppArticles from './articles/AppArticles';
import AppArticlesList from "./articles/AppArticlesList";

it('renders without crashing', () => {
    shallow(<AppArticles/>)
})

it('includes input', () => {
    const cmp = shallow(<AppArticles/>);
    expect(cmp.containsMatchingElement(<input/>)).toEqual(true);
})

it('passess articles to AppArticlesList', () => {
    const cmp = shallow(<AppArticles/>);
    const articles = [{"id":"1","title":"title1","subtitle":"subtitle1","content":"content1"}];

    cmp.setState({filteredArticles: articles});

    expect(cmp.find('AppArticlesList').props().articles).toBe(articles);
})