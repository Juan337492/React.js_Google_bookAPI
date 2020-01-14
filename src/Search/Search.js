import React,{Component} from 'react';
import List from '../List/List';

class Search extends Component  {
    constructor(props)  {
        super(props);
        this.state = {
            books: []
            
        }
    }

    apiCall =(e)=>{
        e.preventDefault();
        console.log('api call running');
        var term = e.target.term.value;
        var ebook = e.target.print.value;
        const url = `https://www.googleapis.com/books/v1/volumes?q=search+`+ term +`&filter=`+ ebook +`&api_key=AIzaSyBd13bQbKNCSd26OXzT6WCkAB6Ywx8PLhE`;
        console.log(url);
        fetch(url)
        .then(data => {
            console.log('About to check for errors');
            console.log(data);
            if(!data.ok) {
                console.log('An error did occur, let\'s throw an error.');
                throw new Error('Something went wrong');
            }
            return data;
        })
        .then(data => data.json())
        .then(data => {
            console.log(data);
            const booksData = data.items;
            this.setState({
                books: booksData
            })
          })
    }

render(){
    

    return(
        <div>
            <h1>Search bar goes here...</h1>
            <form onSubmit={this.apiCall}>
                <label htmlFor="label">Search:</label>
                    <input type="text" placeholder="Search..." name="term"></input>
                    <button>Search</button>
                <label htmlFor="print">Print Type:</label>
                    <select name="print">
                        <option>ebooks</option>
                        <option>free-ebooks</option>
                        <option>paid-ebooks</option>
                    </select>
                <label htmlFor="book">Book Type:</label>
                    <select name="type">
                        <option>options</option>
                    </select>
                    <List 
                    books={this.state.books}
                    />
            </form>
           
        </div>
    )
}
}

export default Search;