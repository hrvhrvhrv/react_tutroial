import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// set up arry of books
import {books} from './books';
import Book from './Book';

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
