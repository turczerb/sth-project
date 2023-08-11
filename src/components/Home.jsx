import BookCard from "./Book/BookCard";
import NavBar from "./Bar/NavBar";
import TopNewCard from "./TopNewCard";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <BookCard />
      <TopNewCard />
      <SideBar />
    </div>
  );
};

export default Home;
