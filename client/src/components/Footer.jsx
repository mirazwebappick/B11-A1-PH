import { Link } from "react-router";
import logo from "../assets/logo.webp";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-100 border-t border-green-200 text-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
            </Link>
            <span className="text-xl font-bold tracking-wide text-green-800">
              Gardening
            </span>
          </div>

          <div className="text-center text-sm text-gray-700 max-w-xl">
            <h2 className="font-semibold text-base text-green-800 mb-2">
              Terms & Conditions
            </h2>
            <p>
              By using this app, you agree to our Terms of Service and Privacy
              Policy. You must be 13+ years old to use this platform. Misuse or
              unauthorized access is prohibited.
            </p>
            <p className="mt-2">
              We comply with all data protection laws and will never share your
              data without consent. We reserve the right to suspend accounts
              violating these terms.
            </p>
            <p className="mt-3 text-xs text-gray-500">
              &copy; {new Date().getFullYear()} YourAppName. All rights
              reserved.
            </p>
          </div>

          <div className="flex space-x-5 text-green-700">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-green-900 transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-green-900 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-green-900 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-green-900 transition"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
