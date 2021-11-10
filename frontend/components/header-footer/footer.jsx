import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
    <footer className="footer">
        <p>Inspired by <a href="http://www.atlasobscura.com">Atlas Obscura</a>.<br/>Built with React/Redux, Ruby on Rails, and PostgreSQL.</p>
        <ul className="personal-links">
            <li><a href="https://github.com/elliot-wilson/WideWorld" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a href="https://www.linkedin.com/in/elliot-wilson-4897a81b9/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
            <li><a href="mailto:elliot.andrew.wilson@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a></li>
        </ul>
    </footer>
);

export default Footer;