import React from 'react';
import { Route } from 'react-router-dom';
import  * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState({
              books: books
          })
      });
  }


changeShelf = (book, shelf) => {
  BooksAPI.update(book, shelf)
      .then(resp => {
            let newBooks = this.state.books;
            const books = newBooks.filter(selectedbooks => selectedbooks.id === book.id)
              if (books.length) {
                books[0].shelf = shelf;
              }else{
                  book.shelf=shelf;
                  newBooks.push(book);
              }
        this.setState({books: newBooks})
})
}

  render() {
    {console.log(this.state.books)}
    return (
      <div className="app">
       <Route path='/' exact={true} render={()=>
            <ListBooks
              books={this.state.books}
              onShelfChange={(book,shelf)=>this.changeShelf(book,shelf)}
            />
       }/>

        <Route path='/search' exact={true} render={()=>
            <SearchBook
            books={this.state.books}
            onShelfChange={(book,shelf)=>this.changeShelf(book,shelf)}
            />
        }/>
      </div>
    )
  }
}

export default BooksApp
