import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { SideBarData } from "./SideBarData";
import * as FaIcons from "react-icons/fa"; //hát ez a react-icons loszar
import * as AiIcons from "react-icons/ai";

//ez a feketecsik fenn
const Sidi = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

//ez a kis hamburger icon
const NavIcon = styled(Link)`
  margin-left: 2rem;
  color: white;
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
        leves
      </Sidi>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default SideBar;
