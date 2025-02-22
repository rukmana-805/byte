import React from "react";
import "../Tutorials/Tutorials.css";

const Tutorials = () => {
  return (
    <div id="tutorial-trigger">
      <div className="tutorials">
        <h1>Tutorials Recomendation</h1>
        <div className="course-tut">
          <div className="yt-courses" id="web-dev-tut">
            <div className="thumbnel">
              <iframe
                width="450"
                height="252"
                src="https://www.youtube.com/embed/tVzUXW6siu0?si=5yU_p4x-9cnZL0Kn"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h4 className="course-heading">Best Web-dev Recomndation</h4>
            <p className="course-desc">
              This course includes ReactJs, NodeJs, ExpressJs, and MongoDB with
              in depth knowledge
            </p>
            <p>Playlist : https.youtube.com</p>
          </div>
          <div className="yt-courses" id="ai-tut">
            <div className="thumbnel">
              <iframe
                width="450"
                height="252"
                src="https://www.youtube.com/embed/ZftI2fEz0Fw?si=aUAdk1Mz7I_-Ts-L"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h4 className="course-heading">Best Web-dev Recomndation</h4>
            <p className="course-desc">
              This course includes ReactJs, NodeJs, ExpressJs, and MongoDB with
              in depth knowledge
            </p>
            <p>Playlist : https.youtube.com</p>
          </div>
          <div className="yt-courses" id="ml-tut">
            <div className="thumbnel">
              <iframe
                width="450"
                height="252"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <h4 className="course-heading">Best Web-dev Recomndation</h4>
            <p className="course-desc">
              This course includes ReactJs, NodeJs, ExpressJs, and MongoDB with
              in depth knowledge
            </p>
            <p>Playlist : https.youtube.com</p>
          </div>
          <div className="yt-courses" id="dsa-tut">
            <div className="thumbnel">
              <iframe
                width="450"
                height="252"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <h4 className="course-heading">Best Web-dev Recomndation</h4>
            <p className="course-desc">
              This course includes ReactJs, NodeJs, ExpressJs, and MongoDB with
              in depth knowledge
            </p>
            <p>Playlist : https.youtube.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
