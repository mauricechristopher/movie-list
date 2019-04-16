import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard.component';
import LoaderComponent from './Loader.component';
import styled from 'styled-components'
import { MovieDiv } from "../styles/MovieList.js"
import { MovieCardDiv } from "../styles/Cards.js"

const MyCol = styled(Col)`
  && {
    marginBottom: 20%;
    text-align: center;
  }
`

const MyRow = styled(Row)`
  && {
    text-align: center;
  }
`

export default class MovieBody extends React.Component {

  createTable = () => {
    let movies = [];
    // Outer loop to create parent
    for (let i = 0; i < 36; i++) {
        movies.push(
          <MyCol key={i} xs={2} sm={2} md={8}>
            <MovieCard />
          </MyCol>);
      }
    return movies
  }


  render() {
    return(
      <MovieDiv>
        <Container sm={2}>
          <MyRow sm={2}>
            {this.createTable()}
          </MyRow>
        </Container>
      </MovieDiv>
    )
  }

}
