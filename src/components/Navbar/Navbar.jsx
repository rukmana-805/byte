import React, { useState } from "react";
import Logo from "../../assets/logo.jpg"
import SearchIcon from "../../assets/search_icon.png"
import "../Navbar/Navbar.css"

const Navbar = () => {

    const [active,setActive] = useState("home");

    return(
        <div>
            <div className="navbar">
                <div className="left">
                    <div className="logo-div"><img src={Logo} alt="Logo" /></div>
                </div>
                <div className="middle">
                    <ul>
                        <a href="" className={active === "home" ? "active" : ""} onClick={()=>setActive("home")}>home</a>
                        <a href="#roadmap-trigger" className={active === "roadmap" ? "active" : ""} onClick={()=>setActive("roadmap")}>roadmap </a>
                        <a href="#tutorial-trigger" className={active === "tutorial" ? "active" : ""} onClick={()=>setActive("tutorial")}>tutorial</a>
                        <a href="#alumini-trigger" className={active === "alumini" ? "active" : ""} onClick={()=>setActive("alumini")}>alumini</a>
                        <a href="#footer-trigger" className={active === "contact" ? "active" : ""} onClick={()=>setActive("contact")}>contact us</a>
                    </ul>
                </div>
                <div className="right">
                    <div className="right-contain">
                        <img src={SearchIcon} alt="search icon" />
                        <button>login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;