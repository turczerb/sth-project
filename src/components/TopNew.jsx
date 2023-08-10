import styled from "styled-components"; //stiluska
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Akarmi = styled.div`
  border: black 2px solid;
  width: 400px;
  margin: 2px;
  text-align: center;
  align-items: center;
`;

const TopNew = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          <h1>{props.title}</h1>
        </Card.Title>
        <Card.Text>{props.abstract}</Card.Text>
        <p>{props.byline}</p>
        <button>Read more</button>
      </Card.Body>
    </Card>
  );
};

export default TopNew;
