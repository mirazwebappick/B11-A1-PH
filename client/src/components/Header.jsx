import logo from "../assets/logo.webp";
import { Link } from "react-router";

const Header = () => {
  const links = (
    <>
      <li>
        <Link className="p-3" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="p-3" to="/explore-garden">
          Explore Gardeners
        </Link>
      </li>
      <li>
        <Link className="p-3" to="/browse-tips">
          Browse Tips
        </Link>
      </li>
      <li>
        <Link className="p-3" to="/share-garden-tip">
          Share a Garden Tip
        </Link>
      </li>
      <li>
        <Link className="p-3" to="/my-tips">
          My Tips
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-white shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        <div className="">
          <Link to="/">
            <img className="w-14" src={logo} alt="" />
          </Link>
        </div>
        <div className="text-green-500 font-semibold">
          <ul className="flex gap-3">{links}</ul>
        </div>

        <div className="">
          <Link to="/register">
            <button className="py-2 px-6 font-semibold cursor-pointer border bg-white rounded-2xl hover:bg-green-600 hover:text-white hover:border-transparent transition border-green-600">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
