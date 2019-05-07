'use strict'

/**
 * Dependencies
 */

const React = require('react')
const shared = require('../shared/index')
const Movie = require('./Movie')

/**
 * Constants
 */

const SavedList = shared.SavedList

/**
 * Define component
 */

function MoviePage(props) {
  return (
    <div className="jsx-MoviePage">
      <SavedList list={props.savedList} removeFromSavedList={props.removeFromSavedList} />

      <Movie {...props} savedList={props.savedList} addToSavedList={props.addToSavedList} />
    </div>
  )
}

/**
 * Export component
 */

module.exports = MoviePage
