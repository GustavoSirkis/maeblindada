import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import depo_1 from '../assets/depo_1.png';
import depo_2 from '../assets/depo_2.png';
import depo_3 from '../assets/depo_3.jpg';
import depo_4 from '../assets/depo_4.jpg';

import '../styles/scss/carousel.scss';

export default function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 border-radius"
          src={depo_1}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 border-radius"
          src={depo_2}
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="info">
        <img
          className="d-block w-100 border-radius"
          src={depo_3}
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 border-radius"
          src={depo_4}
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
