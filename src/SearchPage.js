import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI'


class SearchPage extends React.Component {

  state = {
    query: '',
    searchedBooks: []
  }
  // 
  updateQuery = (query) => {
    this.setState({ query });
    this.searchForBooks(query);
  }
  /* If there's a query, search through BooksAPI for results
  * that match query. If there's no match or an error, 
  * return no results.
  */
  searchForBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks });
        }
      })
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  render() {

    const { searchedBooks } = this.state;
    const { books } = this.props;
    const { changeShelf } = this.props;

    return (
        <div className="search-books">
        <div className="search-books-bar">
        {/* React Router Link added to improve navigation experience */}
        <Link className="close-search" to="/" title="Back to Shelves">
          Close Search
        </Link>
        
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          { /* Map through books from book array and searchedBook array
               If their IDs match, make sure their shelves match. 
               If searchedBook isn't in book array, set its shelf value to 'none'
            */
              searchedBooks.map(searchedBook => {
                let shelf = 'none';
                books.map(book => (
                  book.id === searchedBook.id ? 
                  shelf = book.shelf : 
                  ''
                ))
                return (
                <li key={searchedBook.id}>
                  <Book 
                    book={searchedBook}
                    changeShelf={changeShelf}
                    currentShelf={shelf}
                  />
                </li>
            )}
            )
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;