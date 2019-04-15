import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';

const Container = styled.div`
  border-radius: 1%;
  position: fixed;
  overflow: hidden;
  top: 8%;
  height: 27%;
  width: 90%;
  margin: 0 auto;
  margin-left: 5%;
  background-color: slategrey;
  text-align: center;
`;

const Children  = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Dot = styled.span`
  font-size: 1em;
  cursor: pointer;
  user-select: none;
  color: white;
`;

const Dots = styled.span`
  bottom: 15%;
  cursor: pointer;
  z-index: 100;
  position: relative;
  display: block;
  margin: 0 auto;
  height: 100%;
`;

const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
    </Children>
    <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
  </Container>
);
const Carousl = makeCarousel(CarouselUI);

class Carousel extends React.Component {
  render() {
    return (
      <Carousl>
        <Slide right>
          <div>
            <h1>Slide 1</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h1>Slide 2</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h1>Slide 3</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h1>Slide 4</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
      </Carousl>
    );
  }
}



export default Carousel;
