import React from 'react';
import { Carousel } from 'react-bootstrap';

class CarouselComponent extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        data: []
    }
}

  render() {
    return (
        <Carousel>
        <Carousel.Item>
          <h1>Person 1</h1>
          <h1> XFERS :  2</h1>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <h1>Person 2</h1>
          <h1> XFERS : 0</h1>
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <h1>Person 3</h1>
          <h1> XFERS : 5</h1>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselComponent;