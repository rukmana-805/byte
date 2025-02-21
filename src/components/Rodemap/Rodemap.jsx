import React from "react";
import "../Rodemap/Rodemap.css";
import TechImg from "../../assets/tech.jpg";

const Rodemap = () => {
    return(
        <div>
            <div className="rodemap">
                <div className="heading-rodemap"><h1>Rodemap on Technologies</h1></div>
                <div className="courses">
                    <div className="dsa">
                        <div className="dsa-img">
                            <img src={TechImg} alt="" />
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum eligendi laudantium rerum veniam quod qui, placeat consequatur omnis. Reiciendis.</p>
                        </div>
                        <div className="btns"><button>See Details</button></div>
                    </div>
                    <div className="web-dev">
                        <div className="dsa-img">
                            <img src={TechImg} alt="" />
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum eligendi laudantium rerum veniam quod qui, placeat consequatur omnis. Reiciendis.</p>
                        </div>
                        <div className="btns"><button>See Details</button></div>
                    </div>
                    <div className="android-dev">
                        <div className="dsa-img">
                            <img src={TechImg} alt="" />
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum eligendi laudantium rerum veniam quod qui, placeat consequatur omnis. Reiciendis.</p>
                        </div>
                        <div className="btns"><button>See Details</button></div>
                    </div>
                </div>
                <div className="buttom-btn">
                    <button className="see-all">See All Courses</button>
                </div>
            </div>
        </div>
    )
}

export default Rodemap;