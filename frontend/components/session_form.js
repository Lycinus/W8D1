import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    otherFormType() {
        if (this.props.formType === "Sign Up") {
            return "Log In"
        } else {
            return "Sign Up"
        }
    }

    formTypeLink(formType) {
        if (formType === "Sign Up") {
            return "signup"
        } else {
            return "login"
        }
    }

    render() {
        return(
            <div>
                <header>{this.props.formType}</header>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                        <input type="text" onChange={(e) => this.setState({username: e.target.value})}></input>
                    </label>
                    <label>Password
                        <input type="password" onChange={(e) => this.setState({password: e.target.value})}></input>
                    </label>
                    <button>{this.props.formType}</button>
                </form>
                <Link to={`/${this.formTypeLink(this.otherFormType)}`}> Alternatively, {this.otherFormType()}!</Link>
            </div>
        )
    }
}

export default SessionForm