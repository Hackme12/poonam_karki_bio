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
    title: "Organic Transition Project",
    description:
      "Developing sustainable cover crop-cash crop companion production methods to enhance soil health and crowd out weeds. Addressing the $50 billion U.S. organic agriculture industry's greatest challenge - weed management without tillage-induced soil degradation. Working to improve crop yields and profitability for small- and mid-sized vegetable farms across Missouri and the Midwest.",
    impact:
      "USDA-NIFA funded project supporting 14,000+ organic farms",
  },
  {
    image: "/image/image_2.JPG",
    title: "Solar Corridor Cropping System (SCCS)",
    description:
      "Revolutionary USDA Conservation Innovation Grant project creating year-round grazing alternatives by intercropping high-energy grain crops with high-protein forage species. This system reduces dependence on hay, machinery, and labor while regenerating soil health and increasing farm resilience against extreme weather events.",
    impact:
      "Transformative solution for livestock operations, carbon sequestration focus",
  },
  {
    image: "/image/image_3.JPG",
    title: "Microbial Ecology & Biogeochemical Cycling",
    description:
      "Investigating the immense potential of soil microorganisms in biogeochemical cycles. Focused on carbon and nitrogen cycling dynamics in organic agricultural systems, exploring how microbial communities drive ecosystem sustainability and agricultural productivity.",
    impact: "Advancing understanding of soil-microbe interactions for sustainable agriculture",
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
            Research Background & Current Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Content */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-emerald-600" />
                  Research Journey & Passion
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  My strong desire to study soil biogeochemistry is rooted in the immense potential and unexplored territory within this field. The pivotal moment that ignited my interest dates to my undergraduate years when I discovered that <strong>a single teaspoon of soil contains more microorganisms than the entire global human population</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  This astonishing fact initially struck me as a potential typographical error, compelling me to read it twice in disbelief. Nonetheless, it had a lasting effect on me, igniting my interest in this field and motivating me to embark on a journey of research into biogeochemical cycling.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently working as a <strong>Soil Health Research Specialist in Dr. Hurisso's lab at Lincoln University</strong>, I focus on microbial ecology and carbon and nitrogen cycling dynamics in organic agricultural systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/70 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-green-600" />
                    Current Focus
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Microbial ecology research</li>
                    <li>• Soil biogeochemical cycling</li>
                    <li>• Conservation practices</li>
                    <li>• Organic agricultural systems</li>
                  </ul>
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-purple-600" />
                    Impact Areas
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sustainable farming transitions</li>
                    <li>• Small-mid scale farmer support</li>
                    <li>• Soil health improvement</li>
                    <li>• Production productivity enhancement</li>
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
