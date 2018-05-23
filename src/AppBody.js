import React from 'react';

import AppArticles from './articles/AppArticles';

export default class AppBody extends React.Component
{
    constructor() {
        super()
    }

    render() {
        return (
            <main role="main" className="mainContainer container">
                <AppArticles />
            </main>
        )
    }

}