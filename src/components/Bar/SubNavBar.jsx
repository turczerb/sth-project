import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";

//itt konkrétan az 1db felirat stylieingolása van
const Element = styled(Link)`
  text-decoration: none;
  color: #e1e9fc;
  padding: 15px 20px 10px 150px;
  font-size: 20px;
  align-items: center;
  //margin: 80px;
  &:hover {
    background: #252831;
    border-left: 4px solid #946b2d;
    font-weight: bold;
  }
`;
const SubElement = styled(Link)`
  text-decoration: none;
  color: #e1e9fc;
  display: block;
  align-items: center;
  z-index: -10;
  width: 140px;
  background-color: green;
`;

const SubNavBar = ({ mokus }) => {
  const [showSubElement, setShowSubElement] = useState(false);

  const showSubNav = () => {
    setShowSubElement(!showSubElement);
  };

  return (
    <>
      <Element to={mokus.path} onClick={mokus.subNav && showSubNav}>
        <div>
          <span>{mokus.title}</span>
          {mokus.subNav && showSubElement
            ? mokus.iconOpened
            : mokus.subNav
            ? mokus.iconClosed
            : null}
          {showSubElement &&
            mokus.subNav.map((item, index) => {
              return (
                <SubElement to={item.path} key={index}>
                  {item.title}
                </SubElement>
              );
            })}
        </div>
      </Element>
    </>
  );
};

export default SubNavBar;
