import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, continueWithGoogle, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, name, photo } = Object.fromEntries(
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
        form.reset();
        navigate("/");
        updateUser({ displayName: name, photoURL: photo })
          .then((result) => {
            console.log("User updated successful", result);
            fetch("http://localhost:3000/user", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ email, name, photo }),
            })
              .then((res) => res.json())
              .then((result) => {
                console.log("user data after database", result);
              });
          })
          .cath((error) => console.log("user Updated Error", error));
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already used!");
          return;
        }
      });
  };

  const handleAddByGoogle = () => {
    continueWithGoogle()
      .then(() => {
        toast.success("Logged Successful by Google");
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-12">
      <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

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
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Link to your photo"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition"
          >
            Register
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
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
