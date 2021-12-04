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
        this.handleOutsideCreateListModal = this.handleOutsideCreateListModal.bind(this);
    }

    componentDidMount() {
        document.addEventListener("click", this.handleOutsideCreateListModal);
    }

    componentWillUnmount() {
        // to-do: rethink this. after all, the component isn't UNMOUNTED when the modal
        // disappears -- its display is just set to none; that means that the event listener
        // doesn't actaully get removed until the user goes to a different page
        document.removeEventListener("click", this.handleOutsideCreateListModal);
    }

    handleOutsideCreateListModal(e) {
        const modalBg = document.querySelector('.create-list-modal-background');
        if (e.target === modalBg) {
            this.props.closeCreateListModal();
            this.setState({title:""})
        }
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
            })
            .then(this.props.closeCreateListModal)
            .then(this.setState({title:""}));
    }

    render() {
        const { location, opened } = this.props;

        const klass = opened ? "opened" : null;

        return (
            <div className={`create-list-modal-background ${klass}`}>
                <div className="create-list-modal">
                    <div
                        onClick={this.props.closeCreateListModal}
                        className="create-list-modal-close"
                    >
                        &times;
                    </div>
                    <form>
                        <h2>
                            Add <span>{location.title}</span> to a New List
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