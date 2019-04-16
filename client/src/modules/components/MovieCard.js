import React from 'react';
import { MovieCardDiv, myCard, myCardTitle, myCardMedia, CardButtons, styles } from '../styles/Cards.js';
import { CardMedia, CardTitle, Card } from 'material-ui'
import ButtBar from './ButtBar'
import { graphql } from 'react-apollo'
import { getMoviesQuery } from '../queries/queries'
import Loader from './Loader'

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false
    };
  }
  render() {
    let data = this.props.data
    if(data.loading) {
      return( <div>{ Loader } </div> )
    } else {
        let movies = data.search.movies
        return movies.map(movie => {
          if(movie.poster != "N/A" && movie.title != "Re-Animator: 1942") {
            return (
              <MovieCardDiv>
                <myCard
                  onMouseOver={ () => this.setState({isMouseOver: true}) }
                  onMouseLeave={ () => this.setState({isMouseOver: false}) }
                >
                  <myCardMedia
                    // overlay={
                    //   <CardTitle
                    //     title={ movie.title }
                    //   />
                    // }
                  >
                    <img style={styles.bgImage} src={ movie.poster } alt={ movie.title }/>
                  </myCardMedia>
                </myCard>
              </MovieCardDiv>
            )} else {
                return (
                  <MovieCardDiv>
                    <myCard
                      onMouseOver={ () => this.setState({isMouseOver: true}) }
                      onMouseLeave={ () => this.setState({isMouseOver: false}) }
                    >
                      <myCardMedia
                        // overlay={
                        //   <CardTitle
                        //     title={ movie.title }
                        //   />
                        // }
                      >
                        <img style={styles.bgImage} key={ movie.imdbId } src="https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_SX300.jpg" alt={ movie.title }/>
                      </myCardMedia>
                    </myCard>
                  </MovieCardDiv>
                )
            }
        })
      }
  }
}

export default graphql(getMoviesQuery)(MovieCard);
//              ^ binds this ^    to this ^
