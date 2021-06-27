import React, { Component } from 'react'

class Book extends Component {
  
  moveHandle = (event) => {
    this.props.moveBook(this.props.bookObj, event.target.value)}
  
  render() {
    const { bookObj } = this.props 

    const thumbnail = bookObj.imageLinks && bookObj.imageLinks.thumbnail
                        ? bookObj.imageLinks.thumbnail
                        : bookObj;

    const bookTitle = bookObj.title ? bookObj.title : 'No title found';

    const authors  = bookObj.authors ? bookObj.authors : 'No authors found';

    return (
		<div>
      		<li id={bookObj.id}>
      			<div className="book">
      				<div className="book-top">
                  <div className="book-cover"style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.moveHandle}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                    </div>
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