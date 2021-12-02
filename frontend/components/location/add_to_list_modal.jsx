import React from 'react'

class AddToListModal extends React.Component {
    constructor(props) {
        super(props);

        this.bindFuncs();
    }

    bindFuncs() {
        this.displayLists = this.displayLists.bind(this);
    }
    
    displayLists() {
        const { currentUserLists } = this.props;

        let listsDisplay;
        if (currentUserLists) {
            listsDisplay = currentUserLists.map((list, idx) => (
                <div>
                    <div>
                        <input type="checkbox" id={`list-${idx}`}/>
                        <label for={`list-${idx}`}>{list.title}</label>
                    </div>
                    <div>
                        <p>VIEW</p>
                    </div>
                </div>
            ))
        } else {
            listsDisplay = (<div></div>)
        }

        return listsDisplay;
    }

    render() {

        const { clicked } = this.props;

        const klass = clicked ? "clicked" : null;

        return (
            <div className={`add-to-list-modal ${klass}`}>
                {this.displayLists()}
                <div>
                    <p>+ CREATE NEW LIST</p>
                </div>
            </div>
        )
    }
}

export default AddToListModal;