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
    <div className="flex justify-center items-center min-h-screen  px-4">
      <div className="card w-full max-w-md shadow-xl border bg-gray-100 border-gray-200 rounded-lg">
        <h1 className="text-3xl text-center font-semibold pt-6">
          Login Account
        </h1>
        <div className="card-body">
          <form onSubmit={handleLogin} className="space-y-4">
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
              className="py-2 font-semibold cursor-pointer border w-full mt-2 rounded-md hover:bg-green-600 hover:text-white hover:border-transparent border-green-600 bg-white"
            >
              Login
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
            Don't have an account?{" "}
            <Link className="text-green-600 font-semibold " to="/register">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
