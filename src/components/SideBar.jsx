import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { SideBarData } from "./SideBarData";
import * as FaIcons from "react-icons/fa"; //hát ez a react-icons loszar
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import NavBar from "./Bar/NavBar";

//ez a feketecsik fenn
const Sidi = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//ez a kis hamburger icon
const NavIcon = styled(Link)`
  margin-left: 2rem;
  color: #946b2d;
  font-size: 2 rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

//ez maga a kis sidebar ami megjelenik ha rákatt a burgerre
const SidebarNav = styled.nav`
  background: #15171c;
  width: 280px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

//ez meg egy div ami magába tartalmazza konténerként az egyes elemeket: students, staff etc
const SidebarWrap = styled.div`
  width: 100%;
`;

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar); //gonna change from the opposite.
  };

  return (
    <>
      <Sidi>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
        <NavBar props={sidebar}></NavBar>
      </Sidi>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SideBarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default SideBar;
