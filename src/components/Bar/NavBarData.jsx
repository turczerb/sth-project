import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const NavBarData = [
  {
    title: "Books",
    path: "/books",
  },
  {
    title: "News",
    path: "/news",
  },
  {
    title: "Movies",
    path: "/movies",
  },
  {
    title: " Houses",
    path: "/houses",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Gryffindor",
        path: "houses/gryffindor",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Hufflepuff",
        path: "houses/hufflepuff",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Ravenclaw",
        path: "houses/ravenclaw",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Slytherin",
        path: "houses/slytherin",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
