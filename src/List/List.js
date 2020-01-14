import React,{Component} from 'react';
import './List.css';

class List extends Component  {
render(){
    return(
        <div>
            <h1>List goes here...</h1>
    {this.props.books.map(book => (
    <div className="list">
        <img className="bookImg" src={book.volumeInfo.imageLinks.thumbnail} alt="book" width="300" height="300"/>
        <li>Author: {book.volumeInfo.authors}</li>
        <li>Title: {book.volumeInfo.title}</li>
        <li>{book.volumeInfo.description}</li>
        <a href={book.saleInfo.buyLink}>Buy now</a>
        </div>))}
    
        </div>
    )
}
}

export default List;