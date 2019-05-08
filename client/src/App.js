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
const HomePage = components.HomePage
const MoviePage = components.MoviePage

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

  removeFromSavedList = movie => {
    const savedList = this.state.savedList
    const newList = savedList.filter(m => m.id !== movie.id)
    this.setState({ savedList: newList })
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={(props) =>
          <HomePage {...props} savedList={this.state.savedList}
                               removeFromSavedList={this.removeFromSavedList} />} />

        <Route path="/movies/:id" render={(props) =>
          <MoviePage {...props} savedList={this.state.savedList}
                                addToSavedList={this.addToSavedList}
                                removeFromSavedList={this.removeFromSavedList} />} />
      </BrowserRouter>
    )
  }
}

/**
 * Export component
 */

module.exports = App
