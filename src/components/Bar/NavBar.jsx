import { Link } from "react-router-dom"; // oldalváltás
import styled from "styled-components"; //stiluska

const Navi = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const NavBar = () => {
  return (
    <Navi>
      <h1>Books</h1>
      <h1>News</h1>
      <h1>Foregin books</h1>
      <h1>Movies</h1>
      <h1>Houses</h1>
      <div>Daily Prophet</div>
    </Navi>
  );
};

export default NavBar;
