import React from 'react';
import TopBar from "../components/TopBar.js"
import MovieList, { ButtonDiv, ShowBut, SoonBut, MovieDiv, MovieCard } from "../components/MovieList.js"
import BotBar from "../components/BotBar.js"
import Carousel from "../components/Carousel.js"
// eslint-disable-next-line
import Icons, { Licon, Title, Ricon, Hearcon, Procon, Searcon } from "../components/Icons.js"

class MovieBrowser extends React.Component {
  render() {
    return (
      <div>
        <TopBar>
          <Licon></Licon>
          <Title>Movies</Title>
          <Ricon></Ricon>
        </TopBar>

        <Carousel></Carousel>

        <ButtonDiv>
          <ShowBut>Now Showing</ShowBut>
          <SoonBut>Coming Soon</SoonBut>
        </ButtonDiv>

        <MovieDiv>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
        </MovieDiv>



        <BotBar>
          <Searcon />
          <Hearcon />
          <Procon />
        </BotBar>
      </div>
    );
  }
}

export default MovieBrowser;
