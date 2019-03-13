import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBooksBar extends Component {
  static propTypes = {
    handleSearchBooks: PropTypes.func.isRequired,
    showSearchPage: PropTypes.func.isRequired
  }
  render() {
    const { handleSearchBooks, showSearchPage } = this.props

    const onSearchBooks = event => handleSearchBooks(event.target.value)

    return (
      <div className="search-books-bar">
        <button className="close-search" onClick={() => showSearchPage(false)}>Close</button>
        <div className="search-books-input-wrapper">
          <input 
            type="text"
            placeholder="Search by title or author"
            onChange={onSearchBooks}
          />
        </div>
      </div>
    )
  }
}

export default SearchBooksBar