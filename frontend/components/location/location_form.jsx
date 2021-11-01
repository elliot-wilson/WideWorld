import React from "react";

class LocationForm extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.location;

        this.bindFuncs();
    }

    bindFuncs(){
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    }

    handleChange(element){
        return (e) => this.setState({[element]: e.currentTarget.value})
    }


    render(){
        const location = this.state;

        return (
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Title
                        <input
                            type="text"
                            onChange={this.handleChange('title')}
                            value={location.title}
                        />
                    </label>
                    <label>Summary
                        <input
                            type="text"
                            onChange={this.handleChange('summary')}
                            value={location.summary}
                        />
                    </label>
                    <label>Address
                        <input
                            type="text"
                            onChange={this.handleChange('address')}
                            value={location.address}
                        />
                    </label>
                    <label>Description
                        <textarea
                            onChange={this.handleChange('description')}
                            value={location.description}
                        />
                    </label>
                    <label>Additional Info
                        <input
                            type="text"
                            onChange={this.handleChange('additional_info')}
                            value={location.additional_info}
                        />
                    </label>
                    <label>Official Website
                        <input
                            type="text"
                            onChange={this.handleChange('officialWebsite')}
                            value={location.official_website}
                        />
                    </label>
                    <button type="submit">{this.props.formType}</button>
                </form>
            </div>
        )
    }
};

export default LocationForm;