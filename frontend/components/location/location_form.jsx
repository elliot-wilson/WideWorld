import React from "react";
import { NavLink } from "react-router-dom";
import NewLocationOverview from "./new_location_overview";

class LocationForm extends React.Component {
    constructor(props){
        super(props);

        this.inputRef = React.createRef();
        this.mapRef = React.createRef();

        this.state = this.props.location;
        this.state.photos = [];
        this.initialTitle = this.props.location.title;

        this.bindFuncs();
    }

    bindFuncs(){
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.generateAutoComplete();
        this.setMap();
    }

    generateAutoComplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.inputRef.current)
        
        autocomplete.addListener("place_changed", () => {
            let place = autocomplete.getPlace();
            let address = place.formatted_address;
            let lat = place.geometry.location.lat();
            let lng = place.geometry.location.lng();

            
            this.setState({ lat, lng, address })
            
            this.setMap();
        })
    }

    setMap() {
        let { lat, lng } = this.state;
        let markerBlock = false;

        if (!lat) {
            markerBlock = true;
            lat = 40.7204807
            lng = -73.9950969
        }
        const options = {
            mapTypeControlOptions: { mapTypeIds: [] },
            streetViewControl: false,
            center: { lat, lng },
            zoom: 15,
        }
        const map = new google.maps.Map(this.mapRef.current, options);
        
        if (!markerBlock) {
            const marker = new google.maps.Marker({
                position: { lat, lng },
                map: map 
            });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();

        let id = this.props.location.id

        formData.append('location[title]', this.state.title);
        formData.append('location[summary]', this.state.summary);
        formData.append('location[address]', this.state.address);
        formData.append('location[lat]', this.state.lat);
        formData.append('location[lng]', this.state.lng);
        formData.append('location[description]', this.state.description);
        formData.append('location[additional_info]', this.state.additional_info);
        formData.append('location[official_website]', this.state.official_website);
        formData.append('location[initial_author_id]', this.state.initial_author.id);

        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append("location[photos][]", this.state.photos[i])
        }

        this.props.action(formData, id)
            .then((response) => {
                if (this.props.formType === "update") {
                    this.props.createLocationEdit({
                        location_id: id,
                        editor_id: this.props.currentUserId
                    }).then((res) => this.props.history.push(`/locations/${res.locationEdit.location_id}`))
                } else {
                    this.props.history.push(`/locations/${response.locationPayload.location.id}`)
                }
            });
    }

    preventDefault(e) {
        e.preventDefault();
    }

    handleChange(element){
        return (e) => this.setState({[element]: e.currentTarget.value})
    }

    imagesPreview() {
        const photos = Array.from(this.state.photos);

        if (!photos) return null;

        if (photos.length > 0) {
            
            let display = photos.map((photo, idx) => {
                return ( <img
                key={idx}
                onClick={this.removePhoto(idx)}
                className="form-preview-image"
                    src={URL.createObjectURL(photo)}
                />)
            })

            return (
                <div className="photo-preview-container">
                    <p className="photo-preview-helper form-help-text">
                        Change your mind? Click on a photo to delete it.
                    </p>
                    <div className="photo-preview">{display}</div>
                </div>
            )
        }
    }

    removePhoto(idx) {
        return (e) => {
            e.preventDefault();
            let photos = [...this.state.photos];
            photos.splice(idx, 1);
            this.setState({photos});
        };
    }


    render(){

        const location = this.state;
        const { formType } = this.props

        let header, overview, bodyHeader, descriptionVerb, buttonText, cancelPath;
        if (formType === 'create') {
            header = 'Add a Place';
            overview = (<NewLocationOverview />)
            bodyHeader = 'Write your entry';
            buttonText = 'Submit Location';
            descriptionVerb = 'Write'
            cancelPath = '/';
        } else {
            header = `Edit ${this.initialTitle}`;
            bodyHeader = 'Edit the entry';
            descriptionVerb = 'Edit'
            buttonText = 'Submit Edit';
            cancelPath = `/locations/${location.id}`
        }

        return (
            <div className="page-body">
                <div className="location-form-container">
                    <h2 className="title">{header}</h2>
                    {overview}
                    <form className="location-form" onSubmit={this.preventDefault}>
                        <p className="subheading">Basic information</p>
                        <p className="form-question-text">
                            What is this place commonly called?
                        </p>
                        <input
                            placeholder="E.g. World's Largest Collection of Tophats"
                            type="text"
                            onChange={this.handleChange('title')}
                            value={location.title}
                        />
                        <p className="form-question-text">
                            In a single sentence, what makes this place special?
                        </p>
                        <textarea
                            placeholder="E.g. Maybe you've seen larger tophats, and maybe you've seen larger collections, but you definitely haven't seen a larger collection of tophats"
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
                        <div
                            id="location-form-map"
                            ref={this.mapRef}
                        >
                        </div>
                        <p className="subheading">{bodyHeader}</p>
                        <p className="form-help-text description-help-text">
                            Please use your own words to tell the unique story of the place in an engaging, concise way. If you need some help, here's a great example of an entry our users love.
                        </p>
                        <p className="form-question-text">
                            {descriptionVerb} entry below:
                        </p>
                        <textarea
                            className="description-textarea"
                            onChange={this.handleChange('description')}
                            value={location.description}
                            placeholder="E.g. Jim Garnsey won his first tophat at a circus in 1955. It changed his life. Ever since then..."
                        />
                        <p className="subheading">
                            Add photos
                        </p>
                        <p className="form-help-text">
                            We’ll need at least one good photo to publish your submission. Use <a href="https://search.creativecommons.org/" target="_blank" rel="noopener noreferrer">Creative Commons</a> to find copyright-free images for your submission, or better yet, submit your own.
                        </p>
                        <label
                            id="photo-chooser-label"
                            htmlFor="photo-chooser"
                            className="form-help-text green-button"
                        >
                            Choose Files
                        </label>
                        <input
                            id="photo-chooser"
                            type="file"
                            onChange={e => this.setState({photos: e.target.files})}
                            multiple
                            hidden
                        />
                        {this.imagesPreview()}
                        <p className="subheading">
                            Anything else?
                        </p>
                            <div className="optional-container">
                            <p className="form-help-text">
                                Any additional directions or tips people should know before visiting?
                            </p>
                            <p className="form-help-text greyed-out">Optional</p>
                        </div>
                        <textarea
                            className="addl-info-textarea"
                            onChange={this.handleChange('additional_info')}
                            value={location.additional_info}
                            placeholder="E.g. Visitors often bring snacks for Jim's pet cat Freckles."
                        />
                        <div className="optional-container">
                            <p className="form-help-text">
                                Official website
                            </p>
                            <p className="form-help-text greyed-out">Optional</p>
                        </div>
                        <input
                            placeholder="E.g. http://wide-world.herokuapp.com/#/"
                            type="text"
                            onChange={this.handleChange('official_website')}
                            value={location.official_website}
                        />
                        <button
                            className="form-submit-button green-button"
                            type="button"
                            onClick={this.handleSubmit}
                        >
                            {buttonText}
                        </button>
                        <NavLink className="cancel-button" to={cancelPath}>Cancel</NavLink>
                    </form>
                </div>
            </div>
        )
    }
};

export default LocationForm;