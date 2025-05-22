import React from "react";
import Slider from "../components/Slider";
import FeatureGarden from "../components/FeatureGarden";
import Testimonial from "../components/Testimonial";
import ArticleSection from "../components/ArticleSection";

const gardenPromises = fetch("http://localhost:3000/garden").then((res) =>
  res.json()
);
const Home = () => {
  return (
    <div className="">
      <Slider />
      <FeatureGarden gardenPromises={gardenPromises} />
      <Testimonial />
      <ArticleSection />
    </div>
  );
};

export default Home;
