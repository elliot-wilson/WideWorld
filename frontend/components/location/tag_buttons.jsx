import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faStar, faListUl } from '@fortawesome/free-solid-svg-icons';

class TagButtons extends React.Component {



    handleClick(buttonName){

        
        const {
            location,
            currentUser,
            visit,
            wannaVisit } = this.props

        if (!currentUser) return this.props.history.push("/login");


        if (buttonName === 'visit') {
            if (visit) {
                this.props.deleteVisit(visit.id)
            } else {
                this.props.addVisit({
                    location_id: location.id,
                    visitor_id: currentUser
                })
            }
        } else {
            if (wannaVisit) {
                this.props.deleteWannaVisit(wannaVisit.id)
            } else {
                this.props.addWannaVisit({
                    location_id: location.id,
                    wanna_visitor_id: currentUser
                })
            }
        }

    }

    render() {
        const { 
            visits,
            wannaVisits,
            visit,
            wannaVisit } = this.props;

        let visitedClass, visitedText;
        let wannaVisitClass, wannaVisitText;

        if (visit) {
            visitedClass = "tagged";
            visitedText = "I'VE BEEN HERE";
        } else {
            visitedText = "BEEN HERE?";
        }
        
        if (wannaVisit) {
            wannaVisitClass = "tagged";
            wannaVisitText = "I WANT TO VISIT"
        } else {
            wannaVisitText = "WANT TO VISIT?"
        }



        return (
            <div className="tag-buttons">
                <div className="tag-button-container">
                    <div
                        className=
                            {`been-here-button-container
                            tag-button
                            ${visitedClass}`}

                        onClick={() => this.handleClick('visit')}
                        
                    >
                        <FontAwesomeIcon icon={faFlag} />
                        <p>{visitedText}</p>
                    </div>
                    <p>{visits.length}</p>
                </div>
                <div className="tag-button-container" >
                    <div 
                        className=
                            {`wanna-go-container
                            tag-button
                            ${wannaVisitClass}`}
                        onClick={() => this.handleClick('wanna-visit')}
                    >
                        <FontAwesomeIcon icon={faStar}/>
                        <p>{wannaVisitText}</p>
                    </div>
                    <p>{wannaVisits.length}</p>
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