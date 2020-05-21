import { faFacebookSquare, faGithubSquare, faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Socials = [
    {id: 1, name: "Facebook", icon: faFacebookSquare, color: "#4267B2"},
    {id: 2, name: "LinkedIn", icon: faLinkedin, color: "#0e76a8"},
    {id: 3, name: "Github", icon: faGithubSquare, color: "#333"},
    {id: 4, name: "Telegram", icon: faTelegram, color: "#0095e0"},
];


const renderSocials = (arr, onSocialSelected) => {
    return arr.map(({id, name, icon, color}) => {
        return (
            <div key={id} className="social-square">
                <FontAwesomeIcon icon={icon}
                                 size="3x"
                                 style={{color: color, cursor: "pointer"}}
                                 onClick={() => onSocialSelected(name)}/>
            </div>
        )
    })
};

export {
    Socials,
    renderSocials
}