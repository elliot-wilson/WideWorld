import React from "react";
import { Link, Redirect } from "react-router-dom";

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitDemo = this.submitDemo.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        if (this.state.username) formData.append('user[username]', this.state.username);
        if (this.state.photo) formData.append('user[photo]', this.state.photo);

        formData.append('user[email]', this.state.email);
        formData.append('user[password', this.state.password);

        this.props.processForm(formData)
    }

    handleChange(element) {
        return (e) => {
            this.setState({ [element]: e.currentTarget.value })
        }
    }

    submitDemo() {
        const formData = new FormData();

        formData.append('user[email]', 'example@example.com');
        formData.append('user[password]', '123456');

        if (this.props.formType === "Sign Up") {
            this.props.login(formData)
                .then(() => this.props.history.push("/users/1"));
        } else {
            this.props.processForm(formData)
                .then(() => this.props.history.push("/users/1"));
        }
    }

    render() {

        let errors;

        if (this.props.errors.length > 0) {
            errors = (<div className="error-msg">{this.props.errors[0]}</div>)
        } else {
            errors = null;
        }

        let linkTo, linkTitle, username, addPhoto, linkLeadin;

        if (this.props.formType === "Sign Up") {
            linkTitle = 'Log in';
            linkTo = '/login';
            username = (
                <input
                    placeholder="Username"
                    type="text"
                    onChange={this.handleChange('username')}
                    value={this.state.username}
                />
            );
            addPhoto = (
                <div className="photo-input">
                    <p>Optional: Add a photo</p>
                    <input
                        id="profile-photo-chooser"
                        type="file"
                        onChange={e => this.setState({photo: e.target.files[0]})}
                    />                
                </div>
            )
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
                        <input
                            placeholder="Email"
                            type="text"
                            onChange={this.handleChange('email')}
                            value={this.state.email}
                            />
                        <input
                            placeholder="Password"
                            type="password"
                            onChange={this.handleChange('password')}
                            value={this.state.password}
                            />
                        {addPhoto}
                        {errors}
                        <button className="green-button">{this.props.formType}</button>
                    </form>
                    <div>
                        <p>Still deciding? Preview as a &nbsp;
                        <span><button onClick={this.submitDemo}>Guest</button></span>
                        </p>
                    </div>
                </div>
            </div>
        )



    }
}

export default SessionForm;

