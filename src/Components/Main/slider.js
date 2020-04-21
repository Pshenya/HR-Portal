import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import './slider.css';
import './slide-animations.css'
import watch from "../../assets/img/watch.png";
import bg from "../../assets/img/for.jpg";
import forest from "../../assets/img/forest.jpg";

class Slider extends Component {
    render() {
        return (
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100"
                             src={watch}
                             alt="watch"/>
                        <Carousel.Caption>
                                <h1>Lorem ipsum</h1>
                                <p>PPoofjvjjsnncm jjfiwii llfkkdj nvnnmcfjjdkow</p>
                            <button>Read More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                             src={bg}
                             alt="watch"/>
                        <Carousel.Caption>
                            <h1>Lorem ipsum</h1>
                            <p>PPoofjvjjsnncm jjfiwii llfkkdj nvnnmcfjjdkow</p>
                            <button>Read More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                             src={forest}
                             alt="bg"
                        />
                        <Carousel.Caption>
                            <h1>Lorem ipsum</h1>
                            <p>PPoofjvjjsnncm jjfiwii llfkkdj nvnnmcfjjdkow</p>
                            <button>Read More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        );
    }
}

export default Slider;