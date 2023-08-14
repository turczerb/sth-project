import { Link } from "react-router-dom"; // oldalváltás
import styled from "styled-components"; //stiluska
import { NavBarData } from "./NavBarData";
import SubNavBar from "./SubNavBar";

const Navi = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  color: white;
`;

const NavBar = () => {
  return (
    <Navi>
      {NavBarData.map((item, index) => {
        return <SubNavBar mokus={item} key={index} />;
      })}
    </Navi>
  );
};

export default NavBar;
