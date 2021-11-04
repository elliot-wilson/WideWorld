import React from "react";
import { Link } from "react-router-dom";

class EditorsDetails extends React.Component {


    render() {

        const { editors, location, initialEditor } = this.props

        return (
            <div className="editors-box">
                <h2>Community Contributors</h2>
                <div className="initial-editor-spotlight">
                    <div><img></img></div>
                    <p>ADDED BY</p>
                    <p>
                        <Link to={`/users/${initialEditor.id}`}>{initialEditor.username}</Link>
                    </p>
                </div>
                <div className="addl-editor-list">
                    <p>EDITED BY</p>
                    <ul>
                        {editors.map(editor => (
                            <li key={editor.id}>
                                <Link to={`/users/${editor.id}`}>{editor.username}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )

    }

}

export default EditorsDetails;