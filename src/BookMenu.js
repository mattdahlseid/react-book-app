import React from 'react';

class BookMenu extends React.Component {

    render() {
        
        const { currentShelf } = this.props;
        const { changeShelf } = this.props;
        const { book } = this.props;

        return (
            <div className="book-shelf-changer" title="Choose Shelf">
            
                <select 
                    value={currentShelf}
                    onChange={(event) => changeShelf(book, event.target.value)}
                >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
        )

    }

}

export default BookMenu;