import * as FaIcons from "react-icons/fa"; //hát ez a react-icons loszar
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as PiIcons from "react-icons/pi";
import * as RxIcons from "react-icons/rx";
import * as GiIcons from "react-icons/gi";

export const SideBarData = [
  {
    title: " Students",
    path: "/students",
    icon: <PiIcons.PiStudentBold />,
  },
  {
    title: " Staff",
    path: "/staff",
    icon: <RxIcons.RxPerson />,
  },
  {
    title: " Spells",
    path: "/spells",
    icon: <RxIcons.RxMagicWand />,
  },
  {
    title: " All character",
    path: "/allcharacter",
    icon: <GiIcons.GiCharacter />,
  },
  {
    title: " Houses",
    path: "/houses",
    icon: <AiIcons.AiFillHome />,
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
