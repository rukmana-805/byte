import React from "react";
import "../Footer/Footer.css";
import LogoFooter from "../../assets/logo.jpg";
import Facebook from "../../assets/facebook_icon.png";
import Twitter from "../../assets/twitter_icon.png";
import LinkedIn from "../../assets/linkedin_icon.png";
import Phonecall from "../../assets/phone-call.png";
import Mail from "../../assets/mail.png";
import RightArrow from "../../assets/right-arrow.png";

const Footer = () => {
    return(
        <div className="footer-parent">
            <div className="footer">
                <div className="left-footer">
                    <div className="info-logo">
                        <img src={LogoFooter} alt="" />
                        <h3>Byte++ Coding Socity</h3>
                    </div>
                    <h5>Banaras Hindu University</h5>
                    <h5>Varanasi</h5>
                </div>
                <div className="middle-footer">
                    <h3>CONTACT US</h3>
                    <div className="email">
                        <img src={Mail}alt="email" />
                        <span>bhuoriginal.com</span>
                    </div>
                    <div className="phone">
                        <img src={Phonecall} alt="phone" />
                        <span>8260522156</span>
                    </div>
                </div>
                <div className="right-footer">
                    <h3>FIND OUT MORE</h3>
                    <div className="faculty">
                        <img src={RightArrow} alt="arrow" />
                        <span>Faculties</span>
                    </div>
                    <div className="members">
                        <img src={RightArrow} alt="arrow" />
                        <span>Members</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="below-footer">
                <div className="social-media">
                    <img src={LinkedIn} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                </div>
                <hr />
                <div className="copy-right">
                © 2025 Banaras Hindu University, All Rights Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer;