import React from "react";
import "../Event/Event.css";

const Event = () => {
    return(
        <div>
            {/* <div className="event">
                <div className="upcomming">
                    <h2>Upcomming Events</h2>
                    <ul>
                        <li>Coding Round on Arraylist and Hashmmap</li>
                        <li>Coding Round on Arraylist and Hashmmap</li>
                        <li>Coding Round on Arraylist and Hashmmap</li>
                        <li>Coding Round on Arraylist and Hashmmap</li>
                        <li>Coding Round on Arraylist and Hashmmap</li>
                    </ul>
                </div>
                <div className="past">
                    <h2>Past Events</h2>
                    <ul>
                        <li>Coding Round on Arraylist and Hashmmap</li>
                        <li>Coding Round on Arraylist and Hashmmap</li>
                        <li>Coding Round on Arraylist and Hashmmap</li>
                        <li>Coding Round on Arraylist and Hashmmap</li>
                        <li>Coding Round on Arraylist and Hashmmap</li>
                    </ul>
                </div>
            </div> */}
            <h2 className="compitation-heading">Upcomming Competition</h2>
            <div className="events">
                <div className="event1">
                    <h2>Title :- Coding Compitation on Arraylist and Map</h2>
                    <p>There are three question you have to solve with in 2 hours and the dificulties lavel of the question is medium</p>
                    <p>Date : 12-Mar-2025</p>
                    <button>Join Now</button>
                </div>
                <div className="event2">
                    <h2>Title :- Coding Compitation on Array and Linkedlist</h2>
                    <p>There are three question you have to solve with in 2 hours and the dificulties lavel of the question is medium</p>
                    <p>Date : 12-Mar-2025</p>
                    <button>Join Now</button>
                </div>
                <div className="event3">
                    <h2>Title :- Coding Compitation on Hashset and Binary Tree</h2>
                    <p>There are three question you have to solve with in 2 hours and the dificulties lavel of the question is medium</p>
                    <p>Date : 12-Mar-2025</p>
                    <button>Join Now</button>
                </div>
                <div className="event4">
                    <h2>Title :- Coding Compitation on Hashset and Binary Tree</h2>
                    <p>There are three question you have to solve with in 2 hours and the dificulties lavel of the question is medium</p>
                    <p>Date : 12-Mar-2025</p>
                    <button>Join Now</button>
                </div>
            </div>
        </div>
    )
}

export default Event;