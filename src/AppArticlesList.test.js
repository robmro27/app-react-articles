import React from 'react';
import {shallow} from 'enzyme'

import AppArticlesList from './articles/AppArticlesList';
import AppArticleItem from './articles/AppArticleItem';

it('show message when there are no articles', () => {
    const articlesList = shallow(<AppArticlesList articles={[]} />)
    expect(articlesList.text()).toContain('No results!');
})

it('do not show message whe there are article', () => {
    const articlesList = shallow(<AppArticlesList articles={[{"id":"1","title":"title","subtitle":"subtitle","content":"content"}]}/>)
    expect(articlesList.text()).not.toContain('No resultes!');
})

it('shows a list of articles', () => {
    const articles = [{"id":"1","title":"title","subtitle":"subtitle","content":"content"},{"id":"2","title":"title","subtitle":"subtitle","content":"content"}];
    const articlesList = shallow(<AppArticlesList articles={articles}/>)

    expect(articlesList.find('AppArticleItem').length).toEqual(articles.length);
})

describe('list of articles', () => {
    const articles = [{"id":"1","title":"title1","subtitle":"subtitle1","content":"content1"},{"id":"2","title":"title2","subtitle":"subtitle2","content":"content2"}];
    const articlesList = shallow(<AppArticlesList articles={articles}/>)

    articles.forEach(article => {
        it(`includes title ${article.title} on list`, () => {
            expect(articlesList.containsMatchingElement(<AppArticleItem key={article.id} title={article.title} subtitle={article.subtitle} content={article.content}/>));
        })
    })
})