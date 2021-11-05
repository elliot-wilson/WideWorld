import React from "react";

class LocationForm extends React.Component {
    constructor(props){
        super(props);

        this.inputRef = React.createRef();

        this.state = this.props.location;
        this.initialTitle = this.props.location.title;

        this.bindFuncs();
    }

    bindFuncs(){
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhotoAdd = this.handlePhotoAdd.bind(this);
    }

    componentDidMount() {
        this.generateAutoComplete();
    }

    generateAutoComplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.inputRef.current)
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        
        for (const key in this.state) {
            if (key === "photos") {
                for (let i = 0; i < this.state.photos.length; i++) {
                    formData.append(`location[photos][]`, this.state[key[i]])
                }
            } else {
                formData.append(`location[${key}]`, this.state[key])   
            }
        }

        this.props.action(formData);
    }

    preventDefault(e) {
        e.preventDefault();
    }

    handleChange(element){
        return (e) => this.setState({[element]: e.currentTarget.value})
    }

    handlePhotoAdd(e){
        const newPhotos = Array.from(e.target.files);
        this.setState({photos: newPhotos});
    }


    render(){
        const location = this.state;
        const { formType } = this.props

        let header, bodyHeader, buttonText;
        if (formType === 'create') {
            header = 'Add a Place';
            bodyHeader = 'Write your entry';
            buttonText = 'Submit Location'
        } else {
            header = `Edit ${this.initialTitle}`;
            bodyHeader = 'Edit the entry';
            buttonText = 'Submit Edit'
        }

        return (
            <div className="page-body">
                <div className="location-form-container">
                    <h2 className="title">{header}</h2>
                    <form className="location-form" onSubmit={this.preventDefault}>
                        <p className="subheading">Basic Information</p>
                        <p className="form-question-text">
                            What is this place commonly called?
                        </p>
                        <input
                            placeholder="E.g. World's Largest Collection of Small Tophats"
                            type="text"
                            onChange={this.handleChange('title')}
                            value={location.title}
                        />
                        <p className="form-question-text">
                            In a single sentence, what makes this place special?
                        </p>
                        <textarea
                            placeholder="E.g. You've seen larger tophats, but not a larger COLLECTION of small tophats"
                            type="text"
                            onChange={this.handleChange('summary')}
                            value={location.summary}
                        />
                        <p className="form-question-text">
                            What is the address?
                        </p>
                        <input
                            type="text"
                            id="autocomplete"
                            ref={this.inputRef}
                            onChange={this.handleChange('address')}
                            value={location.address}
                        />
                        <p className="subheading">{bodyHeader}</p>
                        <p className="form-help-text description-help-text">
                            Please use your own words to tell the unique story of the place in an engaging, concise way. If you need some help, here's a great example of an entry our users love.
                        </p>
                        <p className="form-question-text">
                            Edit entry below
                        </p>
                        <textarea
                            className="description-textarea"
                            onChange={this.handleChange('description')}
                            value={location.description}
                        />
                        <p className="subheading">
                            Add photos
                        </p>
                        <p className="form-help-text">
                            We’ll need at least one good photo to publish your submission. Use the Creative Commons Search  to find copyright-free images for your submission, or better yet, submit your own.
                        </p>
                        <input
                            type="file"
                            onChange={this.handlePhotoAdd}
                            multiple
                        />
                        <p className="subheading">
                            Anything else?
                        </p>
                        <p className="form-help-text">
                            Any additional directions or tips people should know before visiting?
                        </p>
                        <textarea
                            className="addl-info-textarea"
                            onChange={this.handleChange('additional_info')}
                            value={location.additional_info}
                        />
                        <p>
                            Official website
                        </p>
                        <input
                            placeholder="E.g. http://wide-world.herokuapp.com/#/"
                            type="text"
                            onChange={this.handleChange('officialWebsite')}
                            value={location.official_website}
                        />
                        <button
                            className="form-submit-button"
                            type="button"
                            onClick={this.handleSubmit}
                        >
                            {buttonText}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
};

export default LocationForm;