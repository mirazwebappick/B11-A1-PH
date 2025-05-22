import React, { useState } from "react";
import { useLoaderData } from "react-router";

const TipDetails = () => {
  const tip = useLoaderData();
  const [likeCount, setLikeCount] = useState(tip.totalLiked || 0);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    if (liked) return;

    setLikeCount(likeCount + 1);
    setLiked(true);

    try {
      await fetch(`/api/tips/${tip.id}/like`, {
        method: "POST",
      });
    } catch (error) {
      console.error("Failed to update like count", error);
      setLikeCount(likeCount);
      setLiked(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 my-10 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <img
          src={tip.imageUrl}
          alt={tip.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <h1 className="text-3xl font-bold text-green-700 mb-2">{tip.title}</h1>
      <p className="text-gray-600 italic text-sm mb-4">
        by {tip.userName} ({tip.userEmail})
      </p>

      <div className="mb-4 space-y-1 text-sm text-gray-700">
        <p>
          <strong>Category:</strong> {tip.category}
        </p>
        <p>
          <strong>Difficulty:</strong> {tip.difficulty}
        </p>
        <p>
          <strong>Availability:</strong> {tip.availability}
        </p>
      </div>

      <div className="text-gray-800 leading-relaxed mb-6">
        <p>{tip.description}</p>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handleLike}
          disabled={liked}
          className={`flex items-center gap-2 px-5 py-2 text-white font-semibold rounded-lg transition 
            ${
              liked
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
        >
          👍 {liked ? "Liked" : "Like"}
        </button>
        <span className="text-gray-600 text-sm">
          {likeCount} {likeCount === 1 ? "Like" : "Likes"}
        </span>
      </div>
    </div>
  );
};

export default TipDetails;
