import React from "react";
import Slider from "../components/Slider";
import FeatureGarden from "../components/FeatureGarden";

const gardenPromises = fetch("http://localhost:3000/garden").then((res) =>
  res.json()
);
const Home = () => {
  return (
    <div>
      <Slider />
      <FeatureGarden gardenPromises={gardenPromises} />
    </div>
  );
};

export default Home;
