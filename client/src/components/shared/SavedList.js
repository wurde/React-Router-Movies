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
const NavLink = react_router_dom.NavLink

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
          <div key={i} className="jsx-savedMovie">
            <NavLink to={`/movies/${movie.id}`} activeClassName="saved-active">
              <span key={i} className="saved-movie">{movie.title}</span>
            </NavLink>
            <span onClick={() => this.props.removeFromSavedList(movie)}>x</span>
          </div>
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
