import logo from "../assets/logo.webp";
import { NavLink } from "react-router";
import ProfileDropdown from "./ProfileDropdown";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import Switcher from "./Switcher";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 transition-colors duration-300 
     ${
       isActive ? "text-green-600 font-bold after:scale-100" : "text-green-500"
     } 
     after:content-[''] after:absolute after:left-0 after:bottom-0 
     after:h-[2px] after:w-full after:bg-green-600 after:scale-0 
     after:origin-left after:transition-transform after:duration-300 
     hover:after:scale-100`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/explore-garden" className={navLinkStyle}>
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink to="/browse-tips" className={navLinkStyle}>
          Browse Tips
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/share-garden-tip" className={navLinkStyle}>
              Share a Garden Tip
            </NavLink>
          </li>
          <li>
            <NavLink to={`/my-tips/${user.email}`} className={navLinkStyle}>
              My Tips
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img className="w-14" src={logo} alt="Logo" />
          </NavLink>
          <span className="text-lg font-bold text-green-700 hidden sm:block">
            GardenApp
          </span>
        </div>

        <div className="lg:hidden">
          <button
            className="text-green-600 text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-4 font-semibold text-sm">
            {links}
          </ul>
        </div>

        <ProfileDropdown user={user} logOut={logOut} />
      </div>

      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 font-semibold text-green-600">
            {links}
          </ul>
          <div className="mt-4">
            <ProfileDropdown user={user} logOut={logOut} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
