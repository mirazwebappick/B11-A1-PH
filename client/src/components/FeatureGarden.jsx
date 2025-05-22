import { use } from "react";
import FeatureGardenCard from "./FeatureGardenCard";

const FeatureGarden = ({ gardenPromises }) => {
  const gardenData = use(gardenPromises);
  return (
    <div className="max-w-7xl mx-auto px-4 py-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gardenData?.map((garden) => (
          <FeatureGardenCard key={garden?._id} garden={garden} />
        ))}
      </div>
    </div>
  );
};

export default FeatureGarden;
