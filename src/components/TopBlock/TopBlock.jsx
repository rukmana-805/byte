import React from "react";
import "../TopBlock/TopBlock.css";
import TopImg from "../../assets/top_img.jpg";

const TopBlock = () => {
    return(
        <div>
            <div className="top-block">
                <div className="top-left">
                    <div className="left-contain">
                        <h1>Welcome to Byte++ Socity. Code, Compete, and Collaborate</h1>
                        <p>Byte++ Coding Society is a community for coding enthusiasts to learn, compete, and collaborate. We organize hackathons, coding contests, and workshops to enhance technical skills. Join us to grow, innovate, and build amazing projects together!</p>
                        <button>Join Us</button>
                    </div>
                </div>
                <div className="top-right">
                    <div><img src={TopImg} alt="top-logo" /></div>
                </div>
            </div>
        </div>
    )
}

export default TopBlock;