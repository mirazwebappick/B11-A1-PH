import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Top 5 Summer Plants for Your Balcony",
    summary:
      "These plants thrive in warm weather and require low maintenance, perfect for urban gardeners.",
    image: `https://i.ibb.co/PGZ1Y2Tn/Best-Summer-Plants-For-Your-Balcony-Gardens-2-1.webp`,
    link: "#",
  },
  {
    title: "How to Make Organic Fertilizer at Home",
    summary:
      "Learn simple and eco-friendly ways to enrich your soil using kitchen waste and composting methods.",
    image: "https://i.ibb.co/RTQ3wfGd/Adobe-Stock-646751426-scaled.webp",
    link: "#",
  },
  {
    title: "7 Common Garden Mistakes and How to Avoid Them",
    summary:
      "Avoid overwatering, wrong planting times, and more with these beginner-friendly tips.",
    image:
      "https://i.ibb.co/3yyt7LBn/beautiful-girl-florist-transplants-home-plants-into-new-pots-girl-takes-care-plants-woman-plants-hom.webp",
    link: "#",
  },
];

const ArticleSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold text-green-700">
          Gardening Tips & Articles
        </h2>
        <p className="text-gray-600 mt-2">
          Stay updated with the latest guides, tips, and insights
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.a
            key={index}
            href={article.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 flex flex-col group"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover rounded-t-2xl"
              loading="lazy"
            />

            {/* ✅ Content below image */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-green-800 group-hover:underline">
                  {article.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{article.summary}</p>
              </div>
              <div className="mt-4 text-green-600 flex items-center gap-1 font-medium group-hover:underline">
                Read More <ArrowRight size={16} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
