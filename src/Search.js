import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Search extends Component {

    state = {
        query: '',
        bookResults: []
    }

    searchBooks = event => {
        const currQuery = event.target.value;
        this.setState(() => ({
            query: currQuery
        }));
        if(currQuery){
            BooksAPI.search(currQuery.trim(),20)
                .then(books => {
                    console.log(books)
                    if(books.length > 0){
                      this.setState({ bookResults: books})
                    }else{
                      this.setState({ bookResults: []})
                    }
                })
        }else{
          this.setState({ bookResults: []})
        }
    }

    render () {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                className='close-search'
                to='/'>
                    Close
              </Link>
              <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={this.searchBooks}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.bookResults.length > 0 
                  ? this.state.bookResults.map(book => (
                      <Book id={book.id} books={this.props.books} bookObj={book} moveBook={this.props.moveBook}/>
                    ))
                  : <h2>No results found</h2>
                }
              </ol>
            </div>
          </div>
        )
    }
}

export default Search