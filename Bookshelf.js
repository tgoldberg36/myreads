import React, { Component } from 'react'
import Book from './Book'
//import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'

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
                        	<Book id={book.id} bookObj={book} moveBook={moveBook}/>
                        ))}
					</ol>
				</div>
          	</div>
        )
    }
}

export default Bookshelf