import React, {Component} from "react";

import "./TodoForm.css";

export class TodoForm extends Component {

    constructor() {
        super(...arguments);
        this.state = {Description: ""};
        this.toSubmit = this.toSubmit();
    }

    toSubmit(event) {
        event.preventDefault();
        const description = this.state.Description.trim();
        if(description) {
            this.props.toSubmit(description);
            this.clearInput();
        }
    }

    clearInput() {
        this.setState({Description: ""});
    }

    render() {
        return (
            <form className="todoform" onSubmit={this.toSubmit}>
                <input
                    className="todoFormInput"
                    placeholder="What do you need to do?"
                    type="text"
                    value={this.state.Description}
                />
            </form>
        );
    }
}

