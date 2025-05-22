import React from "react";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Home Gardener",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "This platform helped me grow a beautiful vegetable garden in my backyard. Highly recommended!",
    rating: 5,
  },
  {
    name: "Farhan Ahmed",
    role: "Urban Farmer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The tips and seeds I got here made my terrace farm bloom within weeks. Excellent resources!",
    rating: 4,
  },
  {
    name: "Sadia Khatun",
    role: "Plant Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "A beautiful interface, helpful tips, and a lovely community. I enjoy visiting every week.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-green-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-green-700">
          What Gardeners Say
        </h2>
        <p className="mt-2 text-gray-600">
          Real feedback from our happy garden lovers
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full border-4 border-green-200 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-green-800">{t.name}</h3>
            <span className="text-sm text-gray-500">{t.role}</span>

            <div className="flex gap-1 my-3">
              {[...Array(t.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
              {[...Array(5 - t.rating)].map((_, i) => (
                <Star key={i + 5} size={16} className="text-gray-300" />
              ))}
            </div>

            <p className="text-gray-700 text-sm">{t.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
