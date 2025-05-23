import React from "react";
import { useLoaderData } from "react-router";
import GardenerCard from "../components/GardenerCard";

const ExploreGarden = () => {
  const gardenersData = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
        🔍 Explore Gardeners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {gardenersData.map((garden) => (
          <GardenerCard garden={garden} key={garden._id} />
        ))}
      </div>
    </div>
  );
};

export default ExploreGarden;
