'use strict'

/**
 * Dependencies
 */

const React = require('react')
const axios = require('axios')
const MovieCard = require('./MovieCard')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.fetchMovie(id)
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }))
      })
      .catch(error => {
        console.error(error)
      })
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id)
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList
    addToSavedList(this.state.movie)
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>
    }

    const { title, director, metascore, stars } = this.state.movie
    return (
      <div className="save-wrapper">
        <MovieCard title={title} director={director} metascore={metascore} stars={stars} />

        <div className="save-button" onClick={this.props.addToSavedList}>Save</div>
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = Movie
