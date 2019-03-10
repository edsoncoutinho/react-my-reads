import React, { Component } from 'react'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'
import BookTitle from './BookTitle'
import BookAuthors from './BookAuthors'

class Book extends Component {
  render() {
    const { book, handleBooks } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <BookCover imageLinks={book.imageLinks} />
          <BookShelfChanger book={book} handleBooks={handleBooks} />
        </div>
        <BookTitle title={book.title} />
        <BookAuthors authors={book.authors} />
      </div>
    )
  }
}

export default Book