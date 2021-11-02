import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faStar, faListUl } from '@fortawesome/free-solid-svg-icons';

class TagButtons extends React.Component {




    render() {

        return (
            <div className="tag-buttons">
                <div className="been-here-container tag-button">
                    <FontAwesomeIcon icon={faFlag} />
                    <p>BEEN HERE?</p>
                </div>
                <div className="wanna-go-container tag-button">
                    <FontAwesomeIcon icon={faStar}/>
                    <p>WANT TO VISIT?</p>
                </div>
                <div className="add-to-list tag-button">
                    <FontAwesomeIcon icon={faListUl}/>
                    <p>ADD TO LIST</p>
                </div>
            </div>
        )
    }

}

export default TagButtons;