import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-white text-center">
      {/* Animated Emoji */}
      <div className="text-6xl animate-bounce mb-4">🌱</div>

      {/* Custom Loader */}
      <div className="w-12 h-12 border-4 border-green-600 border-dashed rounded-full animate-spin mb-4"></div>

      <p className="text-gray-600 text-sm font-medium">
        Loading the garden magic...
      </p>
    </div>
  );
};

export default Loading;
