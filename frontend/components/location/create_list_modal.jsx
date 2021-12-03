import React from "react";

class CreateListModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        };

        this.bindFuncs();
    }

    bindFuncs() {
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({title: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let list = {
            author_id: this.props.currentUserId,
            title: this.state.title
        };
        this.props.createUserLocationList(list)
            .then((res) => {
                this.props.addLocationListing({
                    location_id: this.props.location.id,
                    list_id: res.userLocationList.id
                })
            });
    }

    render() {
        const { location, opened } = this.props;

        const klass = opened ? "opened" : null;

        return (
            <div className={`create-list-modal-background ${klass}`}>
                <div className="create-list-modal">
                    <div
                        className="create-list-modal-close"
                    >
                        X
                    </div>
                    <form>
                        <h2>
                            Add {location.title} to a New List
                        </h2>
                        <input
                            className="create-list-input"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder="E.g. Roadtrip 2022"
                        />
                        <button
                            type="button"
                            onClick={this.handleSubmit}
                        >
                            CREATE NEW LIST
                        </button>
                    </form>
                </div>
            </div>
        )

    }
}

export default CreateListModal;