import React, { use } from "react";

const FeatureGarden = ({ gardenPromises }) => {
  const gardenData = use(gardenPromises);
  const getFilter = gardenData.filter((garden) => garden?.status === "active");
  console.log("Show Data by status", getFilter);
  return (
    <div>
      <h2>Feature Garden</h2>
    </div>
  );
};

export default FeatureGarden;
