import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { search } from "./BooksAPI";
import Book from "./Book";
class SearchBook extends Component {
    state = {query: "",searchResult: []};

    handleQueryChange = event => {
        this.setState({ query: event.target.value });
        if (event.target.value.length <= 0 ) {
            this.setState({ searchResult: [] });
        } else {
            search(event.target.value).then(books =>{
            if(!books.error)
            {
                let shelfbooks = this.props.books;
                //update shelf in search result fom shelf books
                let resbooks=books.map(book => {
                    let item2 = shelfbooks.find(i2 => i2.id == book.id);
                        return item2 ? { ...book, ...item2 } : book;
                });
                this.setState({searchResult: resbooks})
            }
            else
                this.setState({ searchResult: [] })})
        }
    };

render() {

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text"
                       value={this.state.query}
                       placeholder="Search by title or author"
                       onChange={this.handleQueryChange}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {this.state.searchResult.map(book => (
                    <Book
                        key={book.id}
                        book={book}
                        onShelfChange={this.props.onShelfChange}
                    />
                ))}
                </ol>
            </div>
        </div>);
    }
}
SearchBook.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
};
export default SearchBook;