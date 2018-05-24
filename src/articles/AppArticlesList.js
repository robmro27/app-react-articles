import React from 'react';

import AppArticleItem from './AppArticleItem';

class AppArticlesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedArticle: null
        }
    }

    render(){

        const {onArticleSelected, articles} = this.props

        if (articles.length > 0) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            {this.state.selectedArticle !== null && <h3>{this.state.selectedArticle}</h3>}
                        </div>
                    </div>
                    {articles.map(article => <AppArticleItem onArticleSelected={this.onArticleSelected} key={article.id} title={article.title} subtitle={article.subtitle} content={article.content}/>)}
                    <div className="clearfix"></div>
                </div>
            )
        }

        return (
            <p>No results!</p>
        )
    }

    onArticleSelected = (article) => {
        console.log('Test');
        this.setState({
            selectedArticle: article
        })
    }

}

export default AppArticlesList;