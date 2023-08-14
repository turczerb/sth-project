import { Link } from "react-router-dom"; // oldalváltás
import styled from "styled-components"; //stiluska
import { NavBarData } from "./NavBarData";
import SubNavBar from "./SubNavBar";

const Navi = styled.nav``;

//ez semmire sem hat
const NavContainer = styled.div``;

const NavBar = () => {
  return (
    <Navi>
      <NavContainer>
        {NavBarData.map((item, index) => {
          return <SubNavBar mokus={item} key={index} />;
        })}
      </NavContainer>
    </Navi>
  );
};

export default NavBar;
