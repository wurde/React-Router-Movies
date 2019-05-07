'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style component
 */

const MovieDetailsStyle = styled.div(() => `
  a {
    color: inherit;
    text-decoration: inherit;
  }
`)

/**
 * Export style component
 */

module.exports = MovieDetailsStyle
