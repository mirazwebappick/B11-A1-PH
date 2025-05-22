import logo from "../assets/logo.webp";
import { NavLink } from "react-router";
import ProfileDropdown from "./ProfileDropdown";
import { AuthContext } from "../context/AuthContext";
import { use } from "react";

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative px-3 py-2 transition-colors duration-300 
         ${
           isActive
             ? "text-green-600 font-bold after:scale-100"
             : "text-green-500"
         } 
         after:content-[''] after:absolute after:left-0 after:bottom-0 
         after:h-[2px] after:w-full after:bg-green-600 after:scale-0 
         after:origin-left after:transition-transform after:duration-300 
         hover:after:scale-100`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/explore-garden"
          className={({ isActive }) =>
            `relative px-3 py-2 transition-colors duration-300 
         ${
           isActive
             ? "text-green-600 font-bold after:scale-100"
             : "text-green-500"
         } 
         after:content-[''] after:absolute after:left-0 after:bottom-0 
         after:h-[2px] after:w-full after:bg-green-600 after:scale-0 
         after:origin-left after:transition-transform after:duration-300 
         hover:after:scale-100`
          }
        >
          Explore Gardeners
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/browse-tips"
          className={({ isActive }) =>
            `relative px-3 py-2 transition-colors duration-300 
         ${
           isActive
             ? "text-green-600 font-bold after:scale-100"
             : "text-green-500"
         } 
         after:content-[''] after:absolute after:left-0 after:bottom-0 
         after:h-[2px] after:w-full after:bg-green-600 after:scale-0 
         after:origin-left after:transition-transform after:duration-300 
         hover:after:scale-100`
          }
        >
          Browse Tips
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/share-garden-tip"
              className={({ isActive }) =>
                `relative px-3 py-2 transition-colors duration-300 
         ${
           isActive
             ? "text-green-600 font-bold after:scale-100"
             : "text-green-500"
         } 
         after:content-[''] after:absolute after:left-0 after:bottom-0 
         after:h-[2px] after:w-full after:bg-green-600 after:scale-0 
         after:origin-left after:transition-transform after:duration-300 
         hover:after:scale-100`
              }
            >
              Share a Garden Tip
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`/my-tips/${user.email}`}
              className={({ isActive }) =>
                `relative px-3 py-2 transition-colors duration-300 
         ${
           isActive
             ? "text-green-600 font-bold after:scale-100"
             : "text-green-500"
         } 
         after:content-[''] after:absolute after:left-0 after:bottom-0 
         after:h-[2px] after:w-full after:bg-green-600 after:scale-0 
         after:origin-left after:transition-transform after:duration-300 
         hover:after:scale-100`
              }
            >
              My Tips
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-white shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        <div>
          <NavLink to="/">
            <img className="w-14" src={logo} alt="Logo" />
          </NavLink>
        </div>

        <div className="text-green-500 font-semibold">
          <ul className="flex gap-3">{links}</ul>
        </div>

        <ProfileDropdown user={user} logOut={logOut} />
      </div>
    </div>
  );
};

export default Header;
