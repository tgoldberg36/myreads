import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
	render() {
      	const { name, books, shelf, moveBook } = this.props 
      	
      	const booksInShelf = books.filter((book) => (
    		book.shelf === shelf
    	)) 

    	return  (
        	<div className="bookshelf">
          		<h2 className="bookshelf-title">{name}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{booksInShelf.map((book) => (
                        	<Book id={book.id} books={books} bookObj={book} moveBook={moveBook}/>
                        ))}
					</ol>
				</div>
          	</div>
        )
    }
}

export default Bookshelf