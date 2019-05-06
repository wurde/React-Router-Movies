'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')

/**
 * Constants
 */

const Component = React.Component
const Link = react_router_dom.Link

/**
 * Define component
 */

class SavedList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map((movie, i) => (
          <span key={i} className="saved-movie">{movie.title}</span>
        ))}

        <Link className="home-button" to="/">Home</Link>
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = SavedList
