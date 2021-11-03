import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitDemo = this.submitDemo.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleChange(element) {
        return (e) => {
            this.setState({ [element]: e.currentTarget.value })
        }
    }

    submitDemo() {
        const demoUser = {
            email: "example@example.com",
            password: "123456"
        }

        if (this.props.formType === "Sign Up") {
            this.props.login(demoUser);
        } else {
            this.props.processForm(demoUser);
        }
    }

    render() {

        let errors;

        if (this.props.errors.length > 1) {
            errors = (<div>{this.props.errors}</div>)
        } else {
            errors = null;
        }

        let linkTo, linkTitle, username, linkLeadin;

        if (this.props.formType === "Sign Up") {
            linkTitle = 'Log in';
            linkTo = '/login';
            username = (
                <label>Username:
                    <input
                        type="text"
                        onChange={this.handleChange('username')}
                        value={this.state.username}
                    />
                </label>
            );
            linkLeadin = 'Already a member?'
        } else {
            linkTitle = 'Sign Up';
            linkTo = '/signup';
            linkLeadin = 'Want to join?'
        }

        return (
            <div className="session-form-container">
                <div className="session-form">
                    <h1>{this.props.formType}</h1>
                    <div>
                        <p>{linkLeadin} <Link to={linkTo}>{linkTitle}</Link>!</p>
                    </div>
                    <form className="session-form-body" onSubmit={this.handleSubmit}>
                        {username}
                        <label>Email:
                            <input
                                type="text"
                                onChange={this.handleChange('email')}
                                value={this.state.email}
                            />
                        </label>
                        <label>Password:
                            <input
                                type="password"
                                onChange={this.handleChange('password')}
                                value={this.state.password}
                            />
                        </label>
                        <button>{this.props.formType}</button>
                    </form>
                    {errors}
                    <div>
                        <p>Still deciding? Preview as a
                        <span><button onClick={this.submitDemo}>Guest</button></span>
                        </p>
                    </div>
                </div>
            </div>
        )



    }
}

export default SessionForm;

