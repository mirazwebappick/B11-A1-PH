import { use } from "react";
import logo from "../assets/logo.webp";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  const [show, setShow] = useState(false);
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be logout this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout it!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then((success) => {
          console.log("Logout Successful", success);
          toast.success("Logout successfully !");
        });
      }
    });
  };
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
          to="/my-tips"
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

        <div>
          {user ? (
            <>
              <div className="relative group">
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user.displayName || "User"}
                >
                  <div
                    onClick={() => setShow(!show)}
                    className="h-14 w-14 rounded-full border border-green-300 cursor-pointer overflow-hidden"
                  >
                    <img
                      src={user.photoURL || "https://via.placeholder.com/56"}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {show && (
                  <div
                    onClick={handleLogout}
                    className="absolute right-0 mt-2 w-32 bg-white border border-green-200 rounded-lg shadow-lg z-50"
                  >
                    <button className="w-full px-4 py-2 text-left text-red-500 hover:bg-green-100 rounded-lg cursor-pointer">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <NavLink to="/register">
              <button className="py-2 px-6 font-semibold cursor-pointer border bg-white rounded-2xl hover:bg-green-600 hover:text-white hover:border-transparent transition border-green-600">
                SignUp
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
