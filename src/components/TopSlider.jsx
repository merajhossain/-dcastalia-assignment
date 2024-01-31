import React, { useEffect, useState } from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCom from "./SliderCom";

function TopSlider({sliderData}) {
  
  const sliderRef = React.createRef();

  const settings = {
    dots: false,
    infinite: true, // Enables infinite loop
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <div className="topSliderWrapper">
        <Row>
          <Col md={3} lg={3}>
            <div className="topSliderDetails">
              <h1 className="title">indulge in decadence</h1>
              <p className="subtitle">Project 4</p>
              <div className="sort-tex">
                <span>Residential</span>
                <span>Place 4</span>
              </div>
              <div className="d-flex align-items-center justify-content-start topSliderButton">
                <button onClick={handlePrev}>{`<`}</button>
                <button onClick={handleNext}>{`>`}</button>
              </div>
            </div>
          </Col>
          <Col md={9} lg={9}>
            <div className="slider-wrapper">
              <SliderCom sliderData={sliderData} sliderRef={sliderRef} settingsData={settings}/>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TopSlider;
