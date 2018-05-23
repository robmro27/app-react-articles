import React from 'react';

export default class AppMenu extends React.Component
{
    constructor() {
        super()
    }

    render() {
        return (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Articles List</a>
                </li>
            </ul>
        )
    }
}