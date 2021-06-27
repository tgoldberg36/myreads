import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import Search from './Search'
import {Route, Link} from "react-router-dom";

class BooksApp extends Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }
  
  moveBook = (movedBook, shelf) => {
    //console.log(movedBook)
  	BooksAPI.update(movedBook,shelf)
    movedBook.shelf = shelf
    this.setState((currentState) => ({
    	books: currentState.books.filter((book) => book.id !== movedBook.id).concat(movedBook)
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <Bookshelf name={'Currently Reading'} shelf={'currentlyReading'} books={this.state.books} moveBook={this.moveBook}/>
            <Bookshelf name={'Want to Read'} shelf={'wantToRead'} books={this.state.books} moveBook={this.moveBook}/>
            <Bookshelf name={'Read'} shelf={'read'} books={this.state.books} moveBook={this.moveBook}/>

            <Link 
              to='/search'
              className="open-search">
                Add a Book
            </Link>
          </div>
        )} />

        <Route
            path="/search"
            render={({history}) => (
              <Search books={this.state.books} moveBook={(book,shelf) => {
                this.moveBook(book,shelf)
                history.push('/')
              }}/>
        )} />
	    </div>
    )
  }
}

export default BooksApp
