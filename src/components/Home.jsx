import BookCard from "./Book/BookCard";
import NavBar from "./Bar/NavBar";
import TopNewCard from "./TopNewCard";
import SideBar from "./SideBar";
import { SideBarData } from "./SideBarData";
import Main from "./Main";

const Home = () => {
  console.log(SideBarData);
  console.log("kecsk3");

  return (
    <div>
      <SideBar />
      <Main></Main>
    </div>
  );
};

export default Home;
