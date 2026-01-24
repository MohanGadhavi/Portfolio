import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Navigating the portfolio feels natural. Everything aligned and easy to use.",
    rating: 5,
  },
  {
    text: "Mohan captured our vision, turning it into a polished website.",
    rating: 5,
  },
  {
    text: "The experience feels smooth, fast, exactly how a portfolio should be.",
    rating: 5,
  },
  {
    text: "Portfolio navigation is top-notch. Everything aligned and high quality.",
    rating: 5,
  },
];

const TestimonialBar = () => {
  return (
    <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/5 py-8 mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <div className="flex gap-1">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-xs text-gray-400 italic leading-relaxed">
              "{item.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialBar;
