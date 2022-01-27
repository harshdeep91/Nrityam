import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import "./style.css";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
const mCarousel = () => {
  return (
    <Carousel >
      <Carousel.Item  style={{height: "50vh", width: "100vw" }}>
        <img
          className="h-100 w-100"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "50vh", width: "100vw" }}>
        <img
          className="w-100 h-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  style={{ height: "50vh", width: "100vw" }}>
        <img
          className="w-100 h-100"
          src={img3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default mCarousel;
