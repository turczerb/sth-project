import styled from "styled-components";
import TopNewCard from "./TopNewCard";

const MainStyo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: grey;
  width: 70%;
  z-index: -10;
  position: absolute;
  left: 15%;
`;

const Main = () => {
  return (
    <MainStyo>
      ez a mainke
      <div>
        <TopNewCard></TopNewCard>
      </div>
    </MainStyo>
  );
};

export default Main;
