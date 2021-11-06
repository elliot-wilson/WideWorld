import React from 'react';

const UserDetailsBox = (props) => {

    const { user } = props;

    return (
        <section className="user-details-box">
            <div className="user-photo-box">
                <img className="user-photo" src={user.photoUrl}/>
            </div>
            <ul>
                <li>Joined!!</li>
                <li>Places I've Been!</li>
                <li>Places I Want To Go!</li>
                <li>Places Added!</li>
                <li>Places Edited!</li>
            </ul>
        </section>
    )
}

export default UserDetailsBox;