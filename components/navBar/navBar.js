import Logo from "./logo";
import DropDown from "./dropDown";

const NavBar = ({ userName }) => {
  return (
    <div className="fixed top-0 z-50 justify-between w-full bg-gradient-to-b from-white dark:from-gray-700 to-transparent">
      <div className="flex p-5 pl-4 pr-4 md:pl-16 md:pr-16 md:flex-row md:items-center">
        <Logo />
        <nav className="flex items-start ml-auto">
          <DropDown userName={userName} />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
