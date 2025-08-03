"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";

const researchHighlights = [
  {
    image: "/image/image_1.JPG",
    title: "Soil Carbon Sequestration Research",
    description:
      "Investigating the potential of living perennial cover crops to enhance soil organic carbon storage by 25-40% in Midwest agricultural systems. This research addresses critical climate change mitigation strategies while improving soil health and farm productivity.",
    impact:
      "Published in Journal of Sustainable Agriculture with 15+ citations",
  },
  {
    image: "/image/image_2.JPG",
    title: "Machine Learning for Soil Health Assessment",
    description:
      "Developed predictive models using Python and R to assess soil health indicators with 92% accuracy. This innovative approach combines traditional soil science with cutting-edge data science to revolutionize agricultural decision-making.",
    impact:
      "Featured in 3 international conferences, potential patent application",
  },
  {
    image: "/image/image_3.JPG",
    title: "Climate-Resilient Agriculture Systems",
    description:
      "Leading interdisciplinary research on sustainable farming practices that adapt to climate variability. This work integrates economic modeling from my finance background with agricultural science to create viable solutions for farmers.",
    impact: "Secured $150K research funding, 5+ farmer partnerships",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % researchHighlights.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + researchHighlights.length) % researchHighlights.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Me & Research Excellence
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Content */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-blue-600" />
                  PhD Candidate Profile
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Seeking PhD opportunities to advance interdisciplinary
                  research in{" "}
                  <strong>
                    soil science, data analytics, and climate-smart agriculture
                  </strong>
                  . My unique background bridges finance, data science, and
                  agricultural research, offering innovative perspectives on
                  sustainable farming systems.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With proven research experience, publication record, and
                  $150K+ in secured funding, I bring both theoretical knowledge
                  and practical implementation skills to advance agricultural
                  sustainability through data-driven approaches.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-green-600" />
                    Academic Excellence
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• MSc Soil Health (Lincoln University)</li>
                    <li>• MBA Finance (GLA University)</li>
                    <li>• 15+ peer-reviewed publications</li>
                    <li>• 88 total citations, H-index 3.2</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-purple-600" />
                    Research Innovation
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ML models for soil assessment</li>
                    <li>• Carbon sequestration studies</li>
                    <li>• Climate adaptation strategies</li>
                    <li>• Economic-agricultural modeling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Research Carousel */}
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <div className="relative h-64">
                      <Image
                        src={researchHighlights[currentIndex].image}
                        alt={researchHighlights[currentIndex].title}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        {researchHighlights[currentIndex].title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {researchHighlights[currentIndex].description}
                      </p>

                      <div className="space-y-2">
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="text-xs font-semibold text-blue-800 mb-1">
                            RESEARCH IMPACT:
                          </p>
                          <p className="text-xs text-blue-700">
                            {researchHighlights[currentIndex].impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-32 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-32 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex justify-center mt-4 space-x-2">
                {researchHighlights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-blue-600 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
