import TopNew from "./TopNew";
import React, { useState, useEffect } from "react";
import styled from "styled-components"; //stiluska

const Hir = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5px;
  place-items: center;
  row-gap: 10px;
  padding-top: 80px;
  padding-bottom: 40px;
`;

const TopNewCard = () => {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=DETWPC0BzkROuXQ1BReu3G6vWigC9Rbv"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
    console.log("new data");
  }, []);

  return (
    <Hir>
      {data.results.slice(1, 9).map((hir, index) => {
        return (
          <TopNew
            key={index}
            title={hir.title}
            abstract={hir.abstract}
            byline={hir.byline}
          />
        );
      })}
    </Hir>
  );
};

export default TopNewCard;
