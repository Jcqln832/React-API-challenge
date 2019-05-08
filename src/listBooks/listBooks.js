import React from 'react';
import './listBooks.css';

export default function BookListApp(props) {
  return (
   props.booklist.items.map(item => 
    <li className="bookEntry" key={item.id}>
      <img className="book_img" src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "placholder"} alt="book cover"/>
      <div>
        <h2>{item.volumeInfo.title}</h2>
        <p>Author: {item.volumeInfo.authors ? item.volumeInfo.authors.map(author => author + " ") : "Not listed"}</p>
        <p>{item.volumeInfo.description}</p>
        <a href={item.volumeInfo.infoLink}>Learn More</a>
      </div>
    </li>
    
  )
  )
}