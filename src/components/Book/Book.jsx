//modal ablak? ahhoz kell state open true or false ternary

const Book = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <p>{props.contributor}</p>
    </div>
  );
};

export default Book;
