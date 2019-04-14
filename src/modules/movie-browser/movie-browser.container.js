import React from 'react';
import TopBar from "../components/TopBar.js"
import MovieList from "../components/MovieList.js"
import BotBar from "../components/BotBar.js"
// import Licon from "../components/Icons.js"
// import Ricon from "../components/Icons.js"
import Title from "../components/Title.js"
// import Searcon from "../components/Icons.js"
// import Hearcon from "../components/Icons.js"
// import Procon from "../components/Icons.js"
import Carousel from "../components/Carousel.js"
import Icons, { Licon, Ricon, Hearcon, Procon, Searcon } from "../components/Icons.js"



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

        <MovieList>
        </MovieList>



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
