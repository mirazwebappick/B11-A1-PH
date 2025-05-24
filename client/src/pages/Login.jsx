import React from "react";
import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, continueWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Logged Successful");
        navigate(state || "/");
        form.reset();
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error(
            <div className="flex flex-col">
              <h2>Wrong credential!</h2>
              <h3>Check your Email or Password</h3>
            </div>
          );
          return;
        }
        console.log("wrong credential!", error);
      });
  };

  const handleAddByGoogle = () => {
    continueWithGoogle().then(() => {
      toast.success("Logged Successful by Google");
      navigate(state || "/");
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login Account
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <div className="my-4 border-t border-gray-200"></div>

        <button
          onClick={handleAddByGoogle}
          className="w-full py-2 flex items-center justify-center gap-3 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
