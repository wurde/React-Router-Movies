'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const components = require('./components/index')

/**
 * Constants
 */

const Component = React.Component
const BrowserRouter = react_router_dom.BrowserRouter
const Route = react_router_dom.Route

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
      <BrowserRouter>
        <components.SavedList list={this.state.savedList} />

        <Route exact path="/" component={components.MovieList} />
        <Route path="/movies/:id" component={components.Movie} />
      </BrowserRouter>
    )
  }
}

/**
 * Export component
 */

module.exports = App
