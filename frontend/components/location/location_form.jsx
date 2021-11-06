import React from "react";

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
        this.handlePhotoAdd = this.handlePhotoAdd.bind(this);
    }

    componentDidMount() {
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
        const { lat, lng } = this.state;
        const options = {
            mapTypeControlOptions: { mapTypeIds: [] },
            streetViewControl: false,
            center: { lat, lng },
            zoom: 15,
        }
        const map = new google.maps.Map(this.mapRef.current, options);
        const marker = new google.maps.Marker({
            position: { lat, lng },
            map: map 
        });
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

        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append("location[photos][]", this.state.photos[i])
        }

        this.props.action(formData, id);
    }

    preventDefault(e) {
        e.preventDefault();
    }

    handleChange(element){
        return (e) => this.setState({[element]: e.currentTarget.value})
    }

    handlePhotoAdd(e){
        const newPhotos = Array.from(e.target.files);
        const newPhotoObjectsArray = [];

        if (newPhotos) {
            newPhotos.forEach(photo => {
                let reader = new FileReader();

                reader.onloadend = () => {
                    let photo_url = reader.result;
                    let photoObject = {
                        photo,
                        photo_url
                    };
                    newPhotoObjectsArray.push(photoObject);
                }
            });
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            let newPhotoObjectsArray = this.state.photos.slice();

            newPhotos.forEach(photo => {
                newPhotoObjectsArray.push({photo, photo_url: reader.result });
            });

            this.setState({photos: newPhotoObjectsArray});
        }

        if (newPhotos) {
            newPhotos.forEach(photo => {
                reader.readAsDataURL(photo);
            });
        }

        // if (newPhotos) {
        //     newPhotos.forEach(photo => {
        //         console.log("inside handle photo conditional!!!")
        //         let reader = new FileReader();
        //         reader.onloadend = () => {
        //             console.log("inside loadend!!")
        //             let photo_url = reader.result   
        //             let photoObject = {
        //                 photo,
        //                 photo_url
        //             }
        //             newPhotoObjectsArray.push(photoObject);
        //             this.setState({photos: this.state});
        //         }
        //         reader.readAsDataURL(photo)
        //     });
        // }

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

            console.log(display)

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
            console.log("hellooooo");
            let photos = [...this.state.photos];
            photos.splice(idx, 1);
            this.setState({photos});
        };
    }


    render(){

        console.log(this.state);

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
                        <label
                            id="photo-chooser-label"
                            for="photo-chooser"
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
                            className="form-submit-button green-button"
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