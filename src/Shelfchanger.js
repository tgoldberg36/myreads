import React, { Component } from 'react'

class Shelfchanger extends Component {

    moveHandle = (event) => {
           this.props.moveBook(this.props.bookObj, event.target.value)}

    render () {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.moveHandle} defaultValue={this.props.bookObj.shelf ? this.props.bookObj.shelf : 'none'}>
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

export default Shelfchanger