import React from 'react';
import { Carousel } from 'react-bootstrap';
import Carousel1 from "../assets/images/carousels/carousel-1.jpg";
import Carousel2 from "../assets/images/carousels/carousel-2.jpg";
import Carousel3 from "../assets/images/carousels/carousel-3.png";
import "../assets/styles/components/CarouselHeader.scss"

const CarouselHeader = () => {
    return (
        <Carousel className='fixTop'>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={Carousel1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Leap Your Business
                        To Next Level</h3>
                    <p>Elevate your company's performance with our customizable software solutions.
                        Experience seamless integration and enhanced productivity tailored to your needs.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={Carousel2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Empower Your Operations with Intelligent </h3>
                    <p>Integrate cutting-edge software that adapts to your business needs.
                        Our automation solutions streamline workflows, reduce manual effort, and enhance productivity.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={Carousel3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Discover Powerful Features</h3>
                    <p>Explore the cutting-edge features designed to streamline your business processes.
                        Enhance productivity, improve efficiency, and gain valuable insights with our comprehensive solutions.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )

}

export default CarouselHeader;