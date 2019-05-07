'use strict'

/**
 * Dependencies
 */

const React = require('react')
const shared = require('../shared/index')
const MovieList = require('../Movie/MovieList')

/**
 * Define component
 */

function HomePage(props) {
  return (
    <div className="jsx-HomePage">
      <shared.SavedList list={props.savedList} />

      <MovieList />
    </div>
  )
}

/**
 * Export component
 */

module.exports = HomePage
