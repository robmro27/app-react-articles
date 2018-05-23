import React from 'react';

import AppArticleItem from './AppArticleItem';

const AppArticlesList = ({articles}) => {
    if (articles.length > 0) {
        return (
            <div>
                {articles.map(article => <AppArticleItem key={article.id} title={article.title} subtitle={article.subtitle} content={article.content}/>)}
                <div className="clearfix"></div>
            </div>
        )
    }

    return (
        <p>No results</p>
    )
}

export default AppArticlesList;