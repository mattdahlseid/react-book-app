import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

    render() {
        const { books } = this.props;
        const { changeShelf } = this.props;

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1><span className="bigger">B</span>ook<span className="bigger">T</span>rack</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {  /* Filter through books based on their shelf value,
                        * then map over the resulting books to populate shelves
                        * (repeated for each shelf below)
                        */
                        books.filter(book => book.shelf === 'currentlyReading')
                            .map(book => (
                                <li key={book.id}>
                                    <Book 
                                        book={book} 
                                        changeShelf={changeShelf} 
                                        currentShelf={book.shelf}
                                    />
                                </li>
                        ))
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        books.filter(book => book.shelf === 'wantToRead')
                            .map(book => (
                                <li key={book.id}>
                                    <Book 
                                        book={book}
                                        changeShelf={changeShelf}
                                        currentShelf={book.shelf}
                                    />
                                </li>
                        ))
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        books.filter(book => book.shelf === 'read')
                            .map(book => (
                                <li key={book.id}>
                                    <Book 
                                        book={book}
                                        changeShelf={changeShelf}
                                        currentShelf={book.shelf}
                                    />
                                </li>
                        ))
                    }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search" title="Add a book">
              {/* React Router Link added to improve navigation experience */}
              <Link className="rotate-link"
                to="/search"
              >Add a book</Link>
            <div className="fixed-shadow"></div>
            </div>
          </div>
        )
    }
}

export default MainPage;