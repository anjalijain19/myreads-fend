import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import ShelfComponent from './ShelfComponent';

class Book extends Component {
    render() {
        const authors = this.props.book.authors && this.props.book.authors.join(' | ')
        let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`)
        return (
            <li>
                <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: url }}></div>
                <div className="book-shelf-changer">
                    <select value={this.props.book.shelf?this.props.book.shelf:'none'}
                        onChange={(event) => this.props.onShelfChange(this.props.book, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{authors}</div>
                </div>
            </li>
);}}
export default Book;
