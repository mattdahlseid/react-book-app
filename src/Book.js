import React from 'react';
import BookMenu from './BookMenu';
import NotesAndQuotes from './NotesAndQuotes';

class Book extends React.Component {

    render() {
        
        const { book } = this.props;
        const { changeShelf } = this.props;
        const { currentShelf } = this.props;

        /* to avoid error, handle cases where 
        * there's no book cover thumbnail image 
        * available (used in book-cover div url)
        */
        let thumb = book.imageLinks ? book.imageLinks.thumbnail : '';

        return (

            <div>
                <NotesAndQuotes 
                    book={book}
                />

                <div className="book" title={book.title}>

                    <div className="book-top">               
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${thumb}')` }}></div>

                    <BookMenu 
                        book={book}
                        changeShelf={changeShelf}
                        currentShelf={currentShelf}
                    />
                    </div>

                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>

                </div>

            </div>

        )

    }

}

export default Book