'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')

/**
 * Constants
 */

const Link = react_router_dom.Link

/**
 * Define component
 */

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </Link>
  )
}

/**
 * Export component
 */

module.exports = MovieDetails
