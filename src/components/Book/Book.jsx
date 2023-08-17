//modal ablak? ahhoz kell state open true or false ternary
import styled from "styled-components";

const BookItem = styled.div`
  display: grid;
  justify-content: center;
  border: 5px solid blue;
  border-radius: 30px;
  background-color: #dee2e6;
  size: 16px;
  text-align: center;
  margin-top: 20px;
`;

const Book = (props) => {
  return (
    <BookItem>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <p>{props.contributor}</p>
    </BookItem>
  );
};

export default Book;
