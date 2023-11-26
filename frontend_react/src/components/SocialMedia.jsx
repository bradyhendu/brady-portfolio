import React from "react";
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'

const SocialMedia = () => {
    return(
        <div className="app__social">
            <a href= "https://twitter.com/Bradyhendu" target="_blank" rel="noreferrer">
                <div onclick="location.href='https://twitter.com/Bradyhendu';">
                    <BsTwitter />
                </div>
            </a>
            <a href= "https://www.instagram.com/bradyhendu/?next=%2F" target="_blank" rel="noreferrer">
                <div>
                    <BsInstagram />
                </div>
            </a>
            <a href= "https://www.linkedin.com/in/bradyhendu/" target="_blank" rel="noreferrer">
                <div>
                    <BsLinkedin />
                </div>
            </a>
        </div>
    )
}

export default SocialMedia