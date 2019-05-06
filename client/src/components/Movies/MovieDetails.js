'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const MovieCard = require('./MovieCard')

/**
 * Constants
 */

const Link = react_router_dom.Link

/**
 * Define component
 */

function MovieDetails({ movie }) {
  const { id, title, director, metascore, stars } = movie

  return (
    <Link to={`/movies/${id}`}>
      <MovieCard title={title} director={director} metascore={metascore} stars={stars} />
    </Link>
  )
}

/**
 * Export component
 */

module.exports = MovieDetails
