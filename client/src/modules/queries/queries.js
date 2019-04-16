import { gql } from 'apollo-boost'

const getMoviesQuery = gql`
  {
    search(apiKey:"<InsertApiKeyHere>", searchTerm: "1942") {
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
