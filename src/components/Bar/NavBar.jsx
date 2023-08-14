import { Link } from "react-router-dom"; // oldalváltás
import styled from "styled-components"; //stiluska
import { NavBarData } from "./NavBarData";
import SubNavBar from "./SubNavBar";

const Navi = styled.nav`
  justify-content: center;
  width: ${({ sidebar }) => (sidebar ? "100px" : "1024px")};
`;

const Div = styled.div`
  color: black;
  background-color: ${({ sidebar }) => (sidebar ? "white" : "blue")};
`;

const NavBar = ({ sidebar }) => {
  console.error({ sidebar });
  return (
    <>
      <Navi sidebar={sidebar}>
        {NavBarData.map((item, index) => {
          return <SubNavBar sidebar={sidebar} mokus={item} key={index} />;
        })}
      </Navi>
    </>
  );
};

export default NavBar;
