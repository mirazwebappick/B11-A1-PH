import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-white px-4 text-center">
      {/* Emoji & 404 */}
      <div className="animate-bounce text-green-600 text-[120px] leading-none font-extrabold mb-2">
        🌱
      </div>
      <h1 className="text-[72px] font-extrabold text-green-700 leading-none mb-2">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        Uh-oh! You wandered off the garden path.
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you’re looking for doesn’t exist. But don’t worry, the garden’s
        still full of tips!
      </p>

      {/* CTA */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
      >
        🔙 Go Home
      </Link>

      {/* Decorative Image */}
      <div className="mt-10">
        <img
          src="https://illustrations.popsy.co/gray/planting.svg"
          alt="Planting graphic"
          className="w-full max-w-xs mx-auto hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Error;
