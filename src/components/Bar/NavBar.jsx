import { Link } from "react-router-dom"; // oldalváltás
import styled from "styled-components"; //stiluska
import { NavBarData } from "./NavBarData";
import SubNavBar from "./SubNavBar";

const Navi = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: ${({ props }) => (props ? "100%" : "75%")};
  transition: 350ms;
`;

const NavBar = (props) => {
  return (
    <Navi props={props}>
      {NavBarData.map((item, index) => {
        return <SubNavBar mokus={item} key={index} />;
      })}
    </Navi>
  );
};

export default NavBar;
