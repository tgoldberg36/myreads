import React, { Component } from 'react'
import Shelfchanger from './Shelfchanger';

class Book extends Component {
  
  render() {
    const { books , moveBook, bookObj } = this.props 

    const thumbnail = bookObj.imageLinks && bookObj.imageLinks.thumbnail
                        ? bookObj.imageLinks.thumbnail
                        : bookObj;

    const bookTitle = bookObj.title ? bookObj.title : 'No title found';

    const authors  = bookObj.authors ? bookObj.authors : 'No authors found';

    console.log(bookObj)

    return (
		<div>
      		<li id={bookObj.id}>
      			<div className="book">
      				<div className="book-top">
                  <div className="book-cover"style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail})` }}></div>
                    <Shelfchanger moveBook={moveBook} bookObj={bookObj} books={books} />
                  </div>
                  <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{authors}</div>
            	</div>
      		</li>
      	</div>
    )
  }
}

export default Book