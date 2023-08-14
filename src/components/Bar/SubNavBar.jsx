import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";

const Element = styled(Link)``;
const SubElement = styled(Link)``;

const SubNavBar = ({ mokus }) => {
  const [showSubElement, setShowSubElement] = useState(false);

  const showSubNav = () => {
    setShowSubElement(!showSubElement);
  };

  return (
    <>
      <Element to={mokus.path} onClick={mokus.subNav && showSubNav}>
        {mokus.title}
      </Element>
    </>
  );
};

export default SubNavBar;
