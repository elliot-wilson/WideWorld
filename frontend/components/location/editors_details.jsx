import React from "react";

class EditorsDetails extends React.Component {


    render() {

        const { editors } = this.props

        return (
            <div className="editors-box">
                <h2>Community Contributors</h2>
                <div className="initial-editor-spotlight">
                    <div><img></img></div>
                    <p>ADDED BY</p>
                    <p>{location.initial_author_id}</p>
                </div>
                <div className="addl-editor-list">
                    <p>EDITED BY</p>
                    <ul>
                        {editors.map(editor => (
                            <li>{editor.username}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )

    }

}

export default EditorsDetails;