import React from 'react';

class NotesAndQuotes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false, 
            bookNote: '',
            myNotes: []
        }

        this.removeNote = this.removeNote.bind(this);

    }

    // modal visibility 
    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    // updates note
    updateNote = (bookNote) => {
        this.setState({ bookNote });
    }

    addNote = () => {
        const { bookNote } = this.state;
        /* if statement to prevent blank submissions
         * spread to continue adding each note to myNotes
         * reset note to empty string on submit
         */
        if (bookNote.length > 0) {
            this.setState({
                myNotes: [...this.state.myNotes, bookNote]
            })
            this.setState({
                bookNote: ''
            }) 
        }
    }

    removeNote(note) {
        // filter through notes and return notes that aren't the selected note
        const newNotes = this.state.myNotes.filter(aNote => {
            return aNote !== note;
        })
        this.setState({
            myNotes: [...newNotes]
        })
    }

    render() {

    return (
        <main>
            <Modal 
                show={this.state.show} 
                handleClose= {this.hideModal} 
                book={this.props.book} 
                bookNote={this.state.bookNote} 
                updateNote={this.updateNote} 
                myNotes={this.state.myNotes} 
                addNote={this.addNote} 
                removeNote={this.removeNote}
            >
            </Modal>
            <button 
              type="button" 
              onClick={this.showModal}
              className="notes-icon" 
              title="Take Notes">
                ✎
            </button>
        </main>
        )
        }
    }

const Modal = ({ handleClose, show, book, updateNote, bookNote, myNotes, addNote, removeNote }) => {
    // change whether modal is shown
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
   
    <div className={showHideClassName}>
      <section className="notes-window">
        <div className="notes-book-title">{book.title}</div>
        <div className="notes-window-title">Notes &amp; Quotes</div>
        <div className="notes-display">
            <ul>
               {   // map through myNotes to display each note in notes-display 
                   myNotes.map((note, index) => {
                       return (
                           <li key={index}>
                           {note}
                           <button 
                                type="button" 
                                onClick={() => removeNote(note)} 
                                className="removeButton" 
                                title="Delete Note">
                                 x
                            </button>
                           </li>
                       )
                   })
               }
            </ul>
        </div>
        <input 
            className="notes-input" 
            placeholder="Type New Note" 
            value={bookNote} 
            onChange={(event) => updateNote(event.target.value)}>
        </input>

        <button onClick={addNote}>
          SAVE NOTE
        </button>

        <button onClick={handleClose}>
          CLOSE
        </button>

      </section>
    </div>
  );
};

export default NotesAndQuotes

/* ACKNOWLEDGMENTS
 *
 *  I learned how to make a modal with React by reviewing this 
 *  pen from Alligator.io:
 *      https://codepen.io/alligatorio/pen/aYzMKL?editors=0110
 * 
 *  These YouTube tutorials from ihatetomatoes on adding and removing items 
 *  from a list via React helped me understand how to create the notes component
 *  React setState Tutorial 2017 - Add items to a list:
 *      https://www.youtube.com/watch?v=Dt6eU-VCKoo  
 *  How to remove items from the state - React Tutorial 2017:
 *      https://www.youtube.com/watch?v=w_-tUnv5qXk
 * 
*/
