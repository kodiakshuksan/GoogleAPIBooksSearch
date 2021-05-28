// App.js
import React, { useState } from 'react';
import axios from 'axios';
//import Books from "./pages/Books";
//import Nav from "./components/Nav";

import './App.css';
//import Search from './components/Search';



const App = () => {
  // App.js

const [books, setBooks] = useState({ items: [] });
  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
      // Ajax call to API using Axios
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      // Books result
      console.log(result.data);
      console.log(result.data.items[0].volumeInfo.title);
  }

  // Submit handler
  // const onSubmitHandler = (e) => {
  //     // Prevent browser refreshing after form submission
  //     e.preventDefault();
  //     // Call fetch books async function
  //     fetchBooks();
  // }

  const [searchTerm, setSearchTerm] = useState('');
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const bookAuthors = authors => {
    if (authors.length <= 2) {
      authors = authors.join(' and ');
    } else if (authors.length > 2) {
      let lastAuthor = ' and ' + authors.slice(-1);
      authors.pop();
      authors = authors.join(', ');
      authors += lastAuthor;
    }
    return authors;
  };

  // Param, Vennila and Afrin
  // let authors = ['Param', 'Vennila', 'Afrin'];

  // bookAuthors(authors);

  const onSubmitHandler = (e) => {
    // Prevent browser refreshing after form submission
    e.preventDefault();
    // Call fetch books async function
    fetchBooks();
}
  return (
    <section>
       <form onSubmit={onSubmitHandler}>
      <ul>
        {
          books.items.map((book, index) => {
            return (
              <li key={index}>
                <div>
                  <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{ bookAuthors(book.volumeInfo.authors) }</p>
                    <p>{book.volumeInfo.publishedDate}</p>
                  </div>
                </div>
                <hr />
              </li>
            );
          })
        }
      </ul>
        <label>
          <span>Google_API Books Search</span>
  
          <input
            type="search"
            placeholder="Search For Books,"
            value={searchTerm}
            onChange={onInputChange}
          />

          <button type="submit">Search</button>
        </label>
      </form>
      <div id="results"></div>
      
      
    </section>
  );
};

export default App;