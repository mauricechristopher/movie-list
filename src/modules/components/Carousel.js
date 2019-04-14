import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';

const width = '90%', height='150px';
const Container = styled.div`
  border-radius: 1.5%;
  position: relative;
  overflow: hidden;
  width: ${width};
  margin: 0 auto;
  background-color: slategrey;
  padding-bottom: 20px;
`;
const Children  = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
  margin: 0 auto;
  text-align: center;
`;

const Dot = styled.span`
  font-size: 1em;
  cursor: pointer;
  user-select: none;
  margin: 0 auto;
  color: white;
`;
const Dots = styled.span`
  width: ${width};
  cursor: pointer;
  z-index: 100;
  padding-left: 211px;
  margin: 0 auto;
  padding-bottom: 50px;
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
