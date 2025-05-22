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
          navigate("/");
          toast.success("Logout successfully !");
        });
      }
    });
  };

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
          <div
            className="h-14 w-14 rounded-full border border-green-300 cursor-pointer overflow-hidden"
            onClick={() => setShow((prev) => !prev)}
            title={user.displayName || "User"}
          >
            <img
              src={user.photoURL || "https://via.placeholder.com/56"}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          {show && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-green-200 rounded-lg shadow-lg z-50">
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
          <button className="py-2 px-6 font-semibold cursor-pointer border bg-white rounded-2xl hover:bg-green-600 hover:text-white hover:border-transparent transition border-green-600">
            SignUp
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default ProfileDropdown;
