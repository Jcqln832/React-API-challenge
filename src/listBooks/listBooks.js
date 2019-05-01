import React from 'react';
import './listBooks.css';

export default function BookListApp(props) {
  return (
   props.booklist.items.map(item => 
    <div className="bookEntry" key={item.id}>
      <img className="book_img" src={item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : ""} alt="book cover"/>
      <h2>{item.volumeInfo.title}</h2>
      <p>Author: {item.volumeInfo.authors ? item.volumeInfo.authors.map(author => author + " ") : "Not listed"}</p>
      <p>{item.volumeInfo.description}</p>
      <a href={item.volumeInfo.infoLink}>Learn More</a>
      <hr/>
    </div>
    
  )
  )
}