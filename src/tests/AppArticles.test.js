import React from 'react';
import {shallow} from 'enzyme';

import AppArticles from '../articles/AppArticles';
import AppArticlesList from "../articles/AppArticlesList";

it('renders without crashing', () => {
    shallow(<AppArticles/>)
})

it('includes input', () => {
    const appArticles = shallow(<AppArticles/>);
    expect(appArticles.containsMatchingElement(<input/>)).toEqual(true);
})

it('passess articles to AppArticlesList', () => {
    const appArticles = shallow(<AppArticles/>);
    const articles = [{"id":"1","title":"title1","subtitle":"subtitle1","content":"content1"}];

    appArticles.setState({filteredArticles: articles});

    expect(appArticles.find('AppArticlesList').prop('articles')).toBe(articles);
})

it('filters articles on input', () => {
    const appArticles = shallow(<AppArticles/>);
    const articles = [{"id":"1","title":"title1","subtitle":"subtitle1","content":"content1"},{"id":"2","title":"title2","subtitle":"subtitle2","content":"content2"}];
    const articlesFiltered = [{"id":"1","title":"title1","subtitle":"subtitle1","content":"content1"}];

    appArticles.setState({filteredArticles: articles});

    expect(appArticles.find(AppArticlesList).props().articles).toBe(articles);

    appArticles.find('input').simulate('input', {currentTarget: {value: "title1"}});

    setTimeout(() => {
        expect(appArticles.find(AppArticlesList).props().articles).toBe(articlesFiltered);
    })

})