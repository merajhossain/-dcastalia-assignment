import React, { useEffect, useState } from 'react'
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Slider from "react-slick";
import SliderCom from './SliderCom';

function OverViewSlider({sliderData}) {

  const sliderRef = React.createRef();

  const settings = {
      dots: false,
      infinite: true, // Enables infinite loop
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
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

  return (
    <div className='overViewSliderWrapper'>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
            <div className="title text-center">
                Overview
            </div>
            <div className="description text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut elit molestie, convallis arcu et, efficitur velit. Praesent porttitor, magna non sollicitudin volutpat, ipsum quam luctus massa, et congue ligula mi quis felis. Cras mi odio, efficitur tincidunt tempor eu, molestie ac ipsum. Integer luctus convallis faucibus. Cras a eros nec risus accumsan posuere. Phasellus nisl leo, consequat vel aliquet vestibulum, pulvinar eget sapien. Vestibulum in libero ut odio ullamcorper iaculis. Praesent lobortis, elit vel bibendum vehicula, lacus dolor bibendum nisl, a egestas ex ante et sem. Aliquam efficitur orci ut turpis ullamcorper, sit amet mattis arcu fringilla. Donec venenatis euismod diam, nec dapibus lacus iaculis fermentum. Donec luctus erat eget tortor gravida, ut rutrum justo finibus. Vestibulum ultricies quam in tortor tempus euismod. Maecenas eu mollis libero. Integer maximus, odio eget aliquet sagittis, arcu urna eleifend tortor, vitae dictum metus nibh eget ex.</p>
            </div>
        </Col>
      </Row>
      <Row>
        <Col>
            <div className="slider-wrapper">
                <SliderCom sliderData={sliderData} sliderRef={sliderRef} settingsData={settings}/>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default OverViewSlider
