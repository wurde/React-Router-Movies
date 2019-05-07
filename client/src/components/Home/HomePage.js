'use strict'

/**
 * Dependencies
 */

const React = require('react')
const shared = require('../shared/index')
const MovieList = require('../Movie/MovieList')

/**
 * Constants
 */

const SavedList = shared.SavedList

/**
 * Define component
 */

function HomePage(props) {
  return (
    <div className="jsx-HomePage">
      <SavedList list={props.savedList} removeFromSavedList={props.removeFromSavedList} />

      <MovieList />
    </div>
  )
}

/**
 * Export component
 */

module.exports = HomePage
