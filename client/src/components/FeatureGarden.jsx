import { use } from "react";
import FeatureGardenCard from "./FeatureGardenCard";

const FeatureGarden = ({ gardenPromises }) => {
  // Wait for the resolved data from Suspense (React 18+)
  const gardenData = use(gardenPromises);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
        🌿 Featured Gardeners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {gardenData?.length > 0 ? (
          gardenData.map((garden) => (
            <FeatureGardenCard key={garden?._id} garden={garden} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No active gardeners found.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeatureGarden;
