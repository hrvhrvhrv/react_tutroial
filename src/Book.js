import React from 'react'

const Book = ({ img, title, author }) => {
    // attribute , event handler
    const clickHandler = ()=>{
      console.log('I was clicked');
    };
    const complexExample = (author)=>{
      console.log(author);
    };
    return (
      <article className="book">
        <img src={img} alt="Book" />
        <h1 onClick={()=>{console.warn(title)}}>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Cllick me</button>
        <button type="button" onClick={()=>complexExample(author)}>more complex example</button>
      </article>
    );
  };

export default Book;