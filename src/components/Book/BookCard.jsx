import React, { useState, useEffect } from "react";
import Book from "./Book";

const BookCard = (props) => {
  //itt kell a fetch és ő adja le props-ba a datát a book.jsx-nek fetch: useeffect and usestate
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=XsRGlXf2IXKnSA6DywLZJRDfitg8K1k1"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
    console.log("konyv data");
  }, []);

  return (
    <div>
      {data.results.map((book, index) => {
        return (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            contributor={book.contributor}
          />
        );
      })}
    </div>
  );
};

export default BookCard;
