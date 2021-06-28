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

        const { books } = this.props;
        const { bookResults } = this.state;

        let verifiedBooks = [];
        if(bookResults.length > 0){
          verifiedBooks = bookResults.map(book => {
          books.forEach(bookOnShelf => {
          if(book.id === bookOnShelf.id) {
            book.shelf = bookOnShelf.shelf;
          }
          });
          return book;
          });
          console.log("verifiedBooks",verifiedBooks)
        }



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
                {verifiedBooks.length > 0 
                  ? verifiedBooks.map(book => (
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