import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
//import ShelfComponent from './ShelfComponent';

class ListBooks extends Component {
    render() {
        let allbooks=this.props.books;

return (
        <div>
    <div className="list-books">
        <div className="list-books-title"><h1>MyReads</h1></div>
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">{allbooks.filter(book=>book.shelf==="currentlyReading").map(book => (
                            <Book
                                key={book.id}
                                book={book}
                                onShelfChange={this.props.onShelfChange}
                            />))}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">{allbooks.filter(book=>book.shelf==="wantToRead").map(book => (
                            <Book
                                key={book.id}
                                book={book}
                                onShelfChange={this.props.onShelfChange}
                            />
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">{allbooks.filter(book=>book.shelf==="read").map(book => (
                            <Book
                                key={book.id}
                                book={book}
                                onShelfChange={this.props.onShelfChange}
                            />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="open-search">
        <Link to="/search" className="close-search" >Add a book</Link>
    </div></div>
)}}
export default ListBooks