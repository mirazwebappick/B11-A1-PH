import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, continueWithGoogle } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    const validNumber = /(?=.*\d)/;
    const validSmallLetter = /(?=.*[a-z])/;
    const validCapitalLetter = /(?=.*[A-Z])/;
    const validCharacter = /.{8,}/;
    const specialCharacter = /(?=.*[@$!%*?&])/;

    if (validCharacter.test(password) === false) {
      toast.error("Password must have 8 character or longer");
      return;
    }
    if (validSmallLetter.test(password) === false) {
      toast.error("Password must have one Small letter");
      return;
    }
    if (validCapitalLetter.test(password) === false) {
      toast.error("Password must have one Capital letter");
      return;
    }
    if (validNumber.test(password) === false) {
      toast.error("Password must have any number (0-9)");
      return;
    }
    if (specialCharacter.test(password) === false) {
      toast.error("Password must have one Special Character");
      return;
    }
    createUser(email, password)
      .then((data) => {
        console.log("User Created Successful", data);
        toast.success("User Created Successfully!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("Email already used!");
          return;
        }
      });
  };

  const handleAddByGoogle = () => {
    continueWithGoogle()
      .then((data) => {
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen  px-4">
      <div className="card w-full max-w-md shadow-xl border bg-gray-100 border-gray-200 rounded-lg">
        <h1 className="text-3xl text-center font-semibold pt-6">
          Create Account
        </h1>
        <div className="card-body">
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your full name"
                className="input input-bordered rounded-md w-full shadow-2xl bg-white"
                required
              />
            </div>

            <div>
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="input input-bordered rounded-md w-full shadow-2xl bg-white"
                required
              />
            </div>

            <div>
              <label className="label" htmlFor="photo">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Link to your photo"
                className="input input-bordered rounded-md w-full shadow-2xl bg-white"
              />
            </div>

            <div>
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Create a password"
                className="input input-bordered rounded-md w-full shadow-2xl bg-white"
                required
              />
            </div>

            <button
              type="submit"
              className="py-2 font-semibold cursor-pointer border bg-white w-full mt-2 rounded-md hover:bg-green-600 hover:text-white hover:border-transparent border-green-600"
            >
              Register
            </button>
          </form>

          <button
            onClick={handleAddByGoogle}
            className="py-2 font-semibold cursor-pointer border bg-white w-full mt-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white hover:border-transparent transition border-green-600"
          >
            <FcGoogle size={20} />
            <span className="text-sm font-medium">Continue with Google</span>
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-green-600 font-semibold " to="/login">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
