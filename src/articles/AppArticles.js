import React from 'react';

import AppArticlesList from './AppArticlesList';
import AppArticlesNew from './ArticlesNew';

const articlesData =
    '[' +
    '{"id": "1", "title": "title1", "subtitle": "subtitle1", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}, ' +
    '{"id": "2", "title": "title2", "subtitle": "subtitle2", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}' +
    ']';

export default class AppArticles extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            showAdd: false,
            filteredArticles: JSON.parse(articlesData),
        }
    }

    render() {
        return (
            <div>

                <h1 className="mt-5">Articles</h1>

                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <input onInput={this.onFilterArticles} type="search" className="form-control" placeholder="Search articles..."/>
                        </div>
                    </div>
                </div>

                <AppArticlesList on articles={this.state.filteredArticles}/>

                <a href="#" onClick={this.onToggleShowAdd}>{(this.state.showAdd) ? 'Hide' : 'Show'} form</a>
                {this.state.showAdd && <AppArticlesNew />}

            </div>
        )
    }

    onFilterArticles = (event) => {
        const text = event.currentTarget.value;
        this.getFilteredArticlesForText(text).then(filteredArticles => {
            this.setState({
                filteredArticles: filteredArticles
            })
        });


    }

    onToggleShowAdd = (event) => {
        event.preventDefault();
        this.setState(prevState => {
            return {
                showAdd: !prevState.showAdd
            }
        })
    }

    getFilteredArticlesForText(text) {
        return new Promise(resolve => {
            const time = (Math.random() + 1) * 250;
            setTimeout(() => {
                const filteredAtricles = JSON.parse(articlesData).filter(article => article.title.toLowerCase().includes(text.toLowerCase()));
                resolve(filteredAtricles);
            }, time)
        });
    }
}