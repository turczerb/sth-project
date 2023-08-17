import styled from "styled-components";
import TopNewCard from "./TopNewCard";
import BookCard from "./Book/BookCard";

const MainStyo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #414757;
  width: 70%;
  z-index: -10;
  position: absolute;
  left: 15%;
`;

const Main = () => {
  return (
    <MainStyo>
      <BookCard />
      <TopNewCard />
    </MainStyo>
  );
};

export default Main;
