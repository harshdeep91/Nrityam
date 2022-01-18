import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import "./style.css";
const mCarousel = () => {
  return (
    <Carousel >
      <Carousel.Item  style={{height: "50vh", width: "100vw" }}>
        <img
          className="w-100"
          src="https://picsum.photos/1000/1000/"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "50vh", width: "100vw" }}>
        <img
          className="w-100 "
          src="https://picsum.photos/1000/1000/"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  style={{ height: "50vh", width: "100vw" }}>
        <img
          className="w-100 "
          src="https://picsum.photos/1000/1000/"
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
