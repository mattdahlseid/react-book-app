import React from 'react';
import { Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  // retrieve books to display
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // update shelves when select menu changed (passed down to BookMenu Component)
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => BooksAPI.getAll())
      .then(books => this.setState({ books }))
  }

  render() {

    return (
      <div className="app">
        {/* Add Route to pages to improve navigation experience
        */}
        <Route path="/search" render={() => (
          <SearchPage 
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
        )}/>
      
        <Route exact path="/" render={() => (
            <MainPage 
              books={this.state.books} 
              changeShelf={this.changeShelf}
            />
        )}/>
      
      </div>
    )
  }
}

export default BooksApp;