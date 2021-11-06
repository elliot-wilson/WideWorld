import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

class EditorsDetails extends React.Component {


    render() {

        const { editors, location, initialEditor } = this.props

        const editorMap = editors.map((editor, index) => {
            if (index === editors.length - 1 || editors.length === 1) {
                return (
                    <li className="editor-name" key={editor.id}>
                        <Link to={`/users/${editor.id}`}>{editor.username}</Link>
                    </li>
                )
            } else {
                return (
                    <li className="editor-name" key={editor.id}>
                        <Link to={`/users/${editor.id}`}>{editor.username},&nbsp;</Link>
                    </li>
                )
            }
        });

        return (
            <div className="editors-box">
                <h2>Community Contributors</h2>
                <div className="initial-editor-spotlight">
                    <div><img></img></div>
                    <p className="editor-leadin">ADDED BY</p>
                    <p className="editor-name">
                        <Link to={`/users/${initialEditor.id}`}>{initialEditor.username}</Link>
                    </p>
                </div>
                <div className="addl-editor-list">
                    <p className="editor-leadin">EDITED BY</p>
                    <ul>
                        {editorMap}
                    </ul>
                </div>
                <div className="edit-location-links-box">
                    <p className="editor-leadin">EDIT THIS LISTING</p>
                    <p>
                        <Link to={`/locations/${location.id}/edit`} >
                            Make an Edit
                            <FontAwesomeIcon icon={faPencilAlt}/>
                        </Link>
                    </p>
                    <p>
                        <Link to={`/locations/${location.id}/add_photos`}>
                            Add Photos
                            <FontAwesomeIcon icon={faCamera} />
                        </Link>
                    </p>
                </div>
            </div>
        )

    }

}

export default EditorsDetails;