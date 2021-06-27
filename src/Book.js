import React, { Component } from 'react'

class Book extends Component {
  
  moveHandle = (event) => {
    this.props.moveBook(this.props.bookObj, event.target.value)}
  
  render() {
    const { bookObj } = this.props 

    return (
		<div>
      		<li id={bookObj.id}>
      			<div className="book">
      				<div className="book-top">
                  <div className="book-cover"style={{ width: 128, height: 192, backgroundImage: `url(${bookObj.imageLinks.thumbnail})` }}></div>
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
                  <div className="book-title">{bookObj.title}</div>
                <div className="book-authors">{bookObj.authors}</div>
            	</div>
      		</li>
      	</div>
    )
  }
}

export default Book