import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Book from "./Book";

const BookCardStylo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 40px;
  margin: 10px;
`;

const BookCard = () => {
  //itt kell a fetch és ő adja le props-ba a datát a book.jsx-nek fetch: useeffect and usestate
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=XsRGlXf2IXKnSA6DywLZJRDfitg8K1k1"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log("saláta");
  }, []);

  return (
    <BookCardStylo>
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
    </BookCardStylo>
  );
};

export default BookCard;
