import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import CrouselImg from "../../assets/top_img.jpg";
import "../Announcement/Announcement.css";

function Announcement() {
  return (
    <div className="announcement">

      <div className="crousel">
        <h2>Here are some upcomming Announcement</h2>
        <Carousel>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img src={CrouselImg} alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <div className="count-down">
                <div className="hour"></div>
                <div className="min"></div>
                <div className="sec"></div>
              </div>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img src={CrouselImg} alt="" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img src={CrouselImg} alt="" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      
      <div className="past-compitation">
        <h2>Here are some Past Competition already been held</h2>
        <div className="list">
            <ul>
                <li>Css battle on flex box</li>
                <li>Css battle on flex box</li>
                <li>Css battle on flex box</li>
                <li>Css battle on flex box</li>
                <li>Css battle on flex box</li>
                <li>Css battle on flex box</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
