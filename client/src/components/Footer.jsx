import { Link } from "react-router";
import logo from "../assets/logo.webp";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        <div className="">
          <Link to="/">
            <img className="w-14" src={logo} alt="" />
          </Link>
        </div>
        <div className="text-gray-500 font-semibold">
          <footer className="footer footer-center p-6 bg-base-200 text-base-content text-sm">
            <div className="max-w-2xl text-center">
              <h2 className="font-semibold text-lg mb-2">Terms & Conditions</h2>
              <p className="mb-2">
                By registering or using this application, you agree to our Terms
                of Service and Privacy Policy. You must be at least 13 years old
                to use this service. Do not misuse the service or attempt
                unauthorized access.
              </p>
              <p className="mb-2">
                All user data is handled in accordance with applicable data
                protection laws. We do not share your personal information with
                third parties without your consent.
              </p>
              <p className="mb-4">
                We reserve the right to suspend or terminate accounts found to
                be in violation of these terms. This includes the use of
                automated scripts, abusive behavior, or misleading content.
              </p>
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} YourAppName. All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>

        <div className="flex gap-5">
          <FaFacebook size={32} />
          <FaInstagram size={32} />
          <FaTwitter size={32} />
          <FaGithub size={32} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
