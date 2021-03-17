import React from 'react';

import styles from '../styles/scss/Carousel.module.scss';

import Carousel from 'react-bootstrap/Carousel';

const depo_1 = '/img/depo_1.png';
const depo_2 = '/img/depo_2.png';
const depo_3 = '/img/depo_3.jpg';
const depo_4 = '/img/depo_4.jpg';

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
