import React from 'react';
import { MovieCardDiv, myCard, myCardTitle, myCardMedia, CardButtons, styles } from '../styles/Cards.js';
import ButtBar from './ButtBar.component'

export default class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false
    };
  }

  render() {
    const { movie, openMovieModal } = this.props;
    const subtitle = this.state.isMouseOver;

    return (
      <MovieCardDiv>
        <myCard
          onMouseOver={ () => this.setState({isMouseOver: true}) }
          onMouseLeave={ () => this.setState({isMouseOver: false}) }
        >
          <myCardMedia
            overlay={
              <myCardTitle
                title="I am"
                subtitle="Tired"
              />
            }
          >
          <img style={styles.bgImage} src="https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" alt="oof"/>
          </myCardMedia>
          <ButtBar></ButtBar>
        </myCard>

      </MovieCardDiv>
    );
  }
}
