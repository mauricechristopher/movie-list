import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Carousel from "./Carousel.js"
import MovieCard from './MovieCard.js'
import { ButtonDiv, ShowBut, SoonBut, MovieDiv } from "../styles/MovieList.js"
import { MovieCardDiv } from '../styles/Cards.js'
import { Container, Row, Col } from 'react-bootstrap';
import MovieBody from './MovieList'
import * as scrollHelpers from '../common/scroll.helpers';
// import MovieBody from './MovieList.component.js'

// eslint-disable-next-line

class Body extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentPage: 1,
  //     currentMovies: []
  //   };
  //   this.handleScroll = this.handleScroll.bind(this);
  // }
  //
  // componentDidMount() {
  //   window.onscroll = this.handleScroll;
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }
  //
  // handleScroll() {
  //   const {topMovies} = this.props;
  //   if (!topMovies.isLoading) {
  //     let percentageScrolled = scrollHelpers.getScrollDownPercentage(window);
  //     if (percentageScrolled > .8) {
  //       const nextPage = this.state.currentPage + 1;
  //       this.props.getTopMovies(nextPage);
  //       this.setState({currentPage: nextPage});
  //     }
  //   }
  // }

  render() {
    const {topMovies} = this.props;
    const movies = [MovieCard];

    return (
      <div className="container">
        <Header />
        <Carousel />

        <ButtonDiv>
          <ShowBut>Now Showing</ShowBut>
          <SoonBut>Coming Soon</SoonBut>
        </ButtonDiv>

        <MovieBody movies={movies} />

        <Footer />
      </div>
    );
  }
}

export default Body;
