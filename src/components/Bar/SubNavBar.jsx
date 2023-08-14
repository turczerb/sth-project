import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";

//itt konkrétan az 1db felirat stylieingolása van
const Element = styled(Link)`
  text-decoration: none;
  color: #e1e9fc;
  padding: 15px 20px 10px 20px;
  font-size: 20px;
  margin: 120px;
  &:hover {
    background: #252831;
    border-left: 4px solid #946b2d;
    font-weight: bold;
  }
`;
const SubElement = styled(Link)``;

const SubNavBar = ({ mokus }) => {
  const [showSubElement, setShowSubElement] = useState(false);

  const showSubNav = () => {
    setShowSubElement(!showSubElement);
  };

  return (
    <>
      <Element to={mokus.path} onClick={mokus.subNav && showSubNav}>
        <span>{mokus.title}</span>
        <SubElement></SubElement>
      </Element>
    </>
  );
};

export default SubNavBar;
