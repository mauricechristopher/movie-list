import { gql } from 'apollo-boost'

const getMoviesQuery = gql`
  {
    search(apiKey:"6787a073", searchTerm: "1942") {
  		totalResults
    	movies{
        title
        year
        imdbId
        poster
      }
    }
  }
`
export{ getMoviesQuery }
