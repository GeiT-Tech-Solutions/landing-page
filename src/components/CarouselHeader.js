import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import Carousel1 from "../assets/images/carousels/Carousel_1.svg";
import Carousel2 from "../assets/images/carousels/Carousel_2.svg";
import Carousel3 from "../assets/images/carousels/Carousel_3.svg";
import "../assets/styles/components/CarouselHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";


const CarouselHeader = () => {
  return (
    <div className="carousel-bg">
      <Carousel className="fixTop" slide={false} fade={false} controls={false} interval={3000}>

        <Carousel.Item>
          <img className="carousel-image" src={Carousel1} alt="First slide" />
          <Carousel.Caption>
            <h3>
            {t("headerSlide.slideFirst.title")}
            </h3>
            <p>
            {t("headerSlide.slideFirst.para")}
            </p>
            <button className="btn button-dark-blue">Find out  <i class="fa-solid fa-angles-right"></i>
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="carousel-image" src={Carousel2} alt="Second slide" />
          <Carousel.Caption>
            <h3>{t("headerSlide.slideSec.title")}</h3>
            <p>
            {t("headerSlide.slideSec.para")}
            </p>
            <button className="btn button-dark-blue">Find out <i class="fa-solid fa-angles-right"></i>
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="carousel-image" src={Carousel3} alt="Third slide" />
          <Carousel.Caption>
            <h3>{t("headerSlide.slideThird.title")} </h3>
            <p>
            <p>{t("headerSlide.slideThird.para")} </p>
            </p>
            <button className="btn button-dark-blue">Find out <i class="fa-solid fa-angles-right"></i>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHeader;
