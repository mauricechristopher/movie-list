import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import { styles } from '../styles/Cards'
import { Container, Children, Dot, Dots } from '../styles/Carousel'

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

export default class Carousel extends React.Component {
  render() {
    return (
      <Carousl>
        <Slide right>
          <Children>
            <img style={styles.cbgImage} src="http://timeentertainment.files.wordpress.com/2013/08/oblivion-poster.jpg" />
          </Children>
        </Slide>
        <Slide right>
          <Children>
            <img style={styles.cbgImage} src="https://www.joblo.com/assets/images/oldsite/posters/images/full/interstellar-banner.jpg" />
          </Children>
        </Slide>
        <Slide right>
          <Children>
            <img style={styles.cbgImage} src="https://www.joblo.com/assets/images/oldsite/posters/images/full/inception-uk-banner1.jpg" />
          </Children>
        </Slide>
        <Slide right>
          <Children>
            <img style={styles.cbgImage} src="http://thepowwowshow.net/wp-content/uploads/2013/02/exclusive-world-war-z-posters-take-the-destruction-worldwide-135838-a-1369754158-1000-100.jpg" />
          </Children>
        </Slide>
      </Carousl>
    );
  }
}
