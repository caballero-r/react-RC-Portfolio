// Import Required
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


// Footer component
function Footer() {
    return (
        <div className="footer">
            <a href='https://github.com/caballero-r' >
                <FaGithub size={30}/>
            </a>
            <a href='https://www.linkedin.com/in/russell-caballero-b8813a286/' >
                <FaLinkedin size={30}/>
            </a>
        </div>    
    );
};

export default Footer;