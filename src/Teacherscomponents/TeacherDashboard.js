import React from "react";
import Nav from "../components/Nav";
import teacher from "../images/teacher.webp";
import third from "../images/third.webp";
import second from "../images/second.jpg";
import Carousel from "react-bootstrap/Carousel";

const TeacherDashboard = () => {
  return (
    <div className="tea_dash">
      <Nav />
      {/* <img src={teacher} /> */}
      {/* <h1>Welcome to Our learning center</h1> */}

      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-50 dash_img" src={teacher} />
          <Carousel.Caption>
            <p className="multicolortext">
              Education is the key that unlocks the golden door to freedom.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-50 dash_img m1s" src={second} />
          <Carousel.Caption>
            <p className="multicolortext m1">
              I cannot teach anybody anything; I can only make them think.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-50 dash_img" src={third} />
          <Carousel.Caption>
            <p className="multicolortext">
              One child, one teacher, one book, one pen can change the world.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TeacherDashboard;
