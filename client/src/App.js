'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/index')

/**
 * Constants
 */

const Component = React.Component

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

class App extends Component {
  constructor() {
    super()
    this.state = {
      savedList: []
    }
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList
    savedList.push(movie)
    this.setState({ savedList })
  }

  render() {
    return (
      <div>
        <components.SavedList list={this.state.savedList} />
        <div>Replace this Div with your Routes</div>
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App
