'use strict'

/**
 * Dependencies
 */

const React = require('react')
const axios = require('axios')
const MovieDetails = require('./MovieDetails')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }))
      })
      .catch(error => {
        console.error('Server Error', error)
      })
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = MovieList
