import React from 'react';
import { Link } from 'react-router-dom';

const UserDetailsBox = (props) => {

    const {
        user,
        locationVisits,
        locationWannaVisits,
        locationAdds,
        locationEdits
    } = props;

    return (
        <section className="user-details-box">
            <div className="user-photo-box">
                <img className="user-photo" src={user.photoUrl}/>
            </div>
            <div>
                <h2 className="username">{user.username}</h2>
                <Link to={`/users/${user.id}/lists`}>My Lists</Link>
            </div>
            <ul>
                <li className="user-stat-li">
                    <p className="user-stat">{user.created_at.slice(0,4)}</p>
                    <p className="user-stat-text">JOINED<br/>WIDE WORLD</p>
                </li>
                <li className="user-stat-li">
                    <p className="user-stat">{locationVisits.length}</p>
                    <p className="user-stat-text">PLACES<br/>I'VE BEEN</p>
                </li>
                <li className="user-stat-li">
                    <p className="user-stat">{locationWannaVisits.length}</p>
                    <p className="user-stat-text">PLACES<br/>I WANT TO GO</p>
                </li>
                <li className="user-stat-li">
                    <p className="user-stat">{locationAdds.length}</p>
                    <p className="user-stat-text">PLACES<br/>ADDED</p>
                </li>
                <li className="user-stat-li">
                    <p className="user-stat">{locationEdits.length}</p>
                    <p className="user-stat-text">PLACES<br/>EDITED</p>
                </li>
            </ul>
        </section>
    )
}

export default UserDetailsBox;