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
                        <li className={active === "home" ? "active" : ""} onClick={()=>setActive("home")}>home</li>
                        <li className={active === "roadmap" ? "active" : ""} onClick={()=>setActive("roadmap")}>roadmap </li>
                        <li className={active === "tutorial" ? "active" : ""} onClick={()=>setActive("tutorial")}>tutorial</li>
                        <li className={active === "alumini" ? "active" : ""} onClick={()=>setActive("alumini")}>alumini</li>
                        <li className={active === "contact" ? "active" : ""} onClick={()=>setActive("contact")}>contact us</li>
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