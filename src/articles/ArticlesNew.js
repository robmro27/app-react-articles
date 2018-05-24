import React from 'react';

import AppArticlesAutosave from './AppArticlesAutosave';

export default class AppArticlesNew extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            subtitle: '',
            content: '',
            autoSaveInForward: 120,
        }
    }

    render() {

        return (

            <div>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <input value={this.state.title} onInput={this.onTitleChange} type="text" className="form-control" id="title" placeholder="title"/>
                            </div>
                            <div className="form-group">
                                <input value={this.state.subtitle} onInput={this.onSubtitleChange} type="text" className="form-control" id="subtitle" placeholder="subtitle"/>
                            </div>
                            <div className="form-group">
                                <textarea value={this.state.content} onInput={this.onContentChange} className="form-control" id="content" placeholder="content"/>
                            </div>
                            <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        {this.state.title && this.state.subtitle && this.state.content &&
                        <div>
                            <div className="card mr-5 mb-5" style={{width: '30rem', float: 'left'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{this.state.subtitle}</h6>
                                    <p className="card-text">{this.state.content}</p>
                                    <AppArticlesAutosave autoSaveIn={this.state.autoSaveInForward}/>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>

        )

    }

    onTitleChange = (event) => {
        this.setState({title: event.target.value})
    }

    onSubtitleChange = (event) => {
        this.setState({subtitle: event.target.value})
    }

    onContentChange = (event) => {
        this.setState({content: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({autoSaveInForward:120});
    }

}