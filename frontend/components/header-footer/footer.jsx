import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faUserTie } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
    <footer className="footer">
        <p>Inspired by <a href="http://www.atlasobscura.com" target="_blank" rel="noopener noreferrer">Atlas Obscura</a>.<br/>Built with React/Redux, Ruby on Rails, and PostgreSQL.</p>
        <ul className="personal-links">
            <li><a href="https://github.com/elliot-wilson/WideWorld" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a href="https://angel.co/u/elliot-wilson-dev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faAngellist}/></a></li>
            <li><a href="https://www.linkedin.com/in/elliot-wilson-4897a81b9/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
            <li><a href="mailto:elliot.andrew.wilson@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a></li>
            <li><a href="https://www.elliotwilson.me/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faUserTie}/></a></li>
        </ul>
    </footer>
);

export default Footer;