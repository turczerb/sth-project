import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Students, staff etc a menu tartalmát designolja
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 90px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #946b2d;
  }
`;

//ezek itt slytheri etc
const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

//margin left adta itt h az ikon és a szöveg pl students között hely lgyen
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SubMenu = ({ item }) => {
  //miért kell curly{} az itemnek?? destructuring miatt
  const [showSubNav, setShowSubNav] = useState(false); //ez az h most az almenu nyitva v sem alapbol zárva

  const showSubnav = () => {
    setShowSubNav(!showSubNav);
  };

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && showSubNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {showSubNav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
