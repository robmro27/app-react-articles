import React from 'react';

export default class AppArticleItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            priority: 0,
        };
    }

    render() {

        const {title, subtitle, content} = this.props

        return (
            <div className="card mr-5 mb-5" style={{width: '30rem', float: 'left'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                    <p className="card-text">{content}</p>

                    <div>
                        Priority <br />
                        <a href="#" onClick={this.onPriorityAdd}>+</a>&nbsp;
                        <output>{this.state.priority}</output>
                        &nbsp;<a href="#" onClick={this.onPriorityRemove}>-</a>
                    </div>

                </div>
            </div>
        )
    }

    onPriorityAdd = (event) => {
        event.preventDefault();
        this.setState( prevState => {
                return {
                    priority: prevState.priority + 1
                }
            }
        )}

    onPriorityRemove = (event) => {
        event.preventDefault();
        this.setState( prevState => {
                return {
                    priority: prevState.priority - 1,
                }
            }
        )}

}