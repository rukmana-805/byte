import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import TopBlock from "../../components/TopBlock/TopBlock.jsx";
import Event from "../../components/Event/Event.jsx";
import "../Home/Home.css";
import Announcement from "../../components/Announcement/Announcement.jsx";
import Leaderboard from "../../components/Leaderboard/Leaderboard.jsx";
import Rodemap from "../../components/Rodemap/Rodemap.jsx";
import Tutorials from "../../components/Tutorials/Tutorials.jsx";
import Books from "../../components/Books/Books.jsx";
import Alumini from "../../components/Alumini/Alumini.jsx";

const Home = () => {
    return(
        <div>
            <Navbar/>
            <TopBlock/>
            <Event/>
            <Announcement/>
            <Leaderboard/>
            <Rodemap/>
            <Tutorials/>
            <Books/>
            <Alumini/>
        </div>
    )
}

export default Home;