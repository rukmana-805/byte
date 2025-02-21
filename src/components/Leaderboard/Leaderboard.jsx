import React from "react";
import "../Leaderboard/Leaderboard.css";
import Profile from "../../assets/profile.jpg"
import GoldMedel from "../../assets/gold_medal.png"

const Leaderboard = () => {
    return(
        <div className="parent-leaderboard">
            <h1 className="top-heading">Leaderboard</h1>
            <div className="leaderboard">
                <div className="top-profile">
                    <div className="img-cotest">
                        <div className="profile-image"><img src={Profile} alt="firstRanker" /></div>
                        <div className="contest">
                            <div className="winner">
                                <img src={GoldMedel} alt="gold medal" />
                                <h4>Winner</h4>
                            </div>
                            <h5>Byte++ -Web Dev Chellange-2025</h5>
                            
                            <p><span>Held on</span> : 12-Mar-2025</p>
                        </div>
                    </div>
                    <div className="profileInfo">
                        <p><span>Name</span> : Rukmana Behera</p>
                        <p><span>Score</span> : 20</p>
                        <p><span>Leadcode</span> : leadcode.akash.in</p>
                        <p><span>LinkedIn</span> : rukmana-805.linked.in</p>

                    </div>
                </div>
                <div className="rank-holders">
                    <h2>Leading Students</h2>
                    <hr />
                    <table >
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Context</th>
                            <th>Points</th>
                            <th>Win</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rukama Behera</td>
                            <td>Demo</td>
                            <td>20</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rukama Behera</td>
                            <td>Demo</td>
                            <td>20</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rukama Behera</td>
                            <td>Demo</td>
                            <td>20</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rukama Behera</td>
                            <td>Demo</td>
                            <td>20</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rukama Behera</td>
                            <td>Demo</td>
                            <td>20</td>
                            <td>1</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard;