import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ProfileDropdown = ({ user, logOut }) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          navigate("/");
          toast.success("Logged out successfully!");
        });
      }
    });
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {user ? (
        <>
          {/* Profile Image with Tooltip */}
          <div
            className="h-12 w-12 rounded-full border border-green-300 cursor-pointer overflow-hidden relative group"
            onClick={() => setShow((prev) => !prev)}
          >
            <img
              src={user.photoURL || "https://via.placeholder.com/56"}
              alt="Profile"
              className="h-full w-full object-cover"
            />
            {/* Tooltip */}
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              {user.displayName || "User"}
            </div>
          </div>

          {/* Dropdown */}
          {show && (
            <div className="absolute right-0 mt-3 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-red-500 hover:bg-green-100 rounded-lg cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <NavLink to="/register">
          <button className="py-2 px-6 font-semibold border bg-white text-green-600 rounded-xl hover:bg-green-600 hover:text-white hover:border-transparent transition border-green-600">
            SignUp
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default ProfileDropdown;
