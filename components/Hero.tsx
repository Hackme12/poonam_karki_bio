"use client";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Linkedin,
  Microscope,
  Leaf,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative bg-gradient-to-br from-emerald-50 via-blue-50 to-green-100 pt-32 md:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
                Poonam Karki
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-emerald-600 font-semibold">
                Soil Health Research Specialist
              </p>
              <p className="text-lg mb-2 text-gray-700 italic font-medium">
                "Building Healthy Soils, One Study at a Time"
              </p>
              <p className="text-base text-gray-600">
                Advancing soil health research to support sustainable farming
                and resilient food systems
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 shadow-lg">
                <span className="text-2xl font-bold text-emerald-600">2</span>
                <p className="text-sm text-gray-600">Active Projects</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 shadow-lg">
                <span className="text-2xl font-bold text-emerald-600">
                  USDA
                </span>
                <p className="text-sm text-gray-600">Funded Research</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-6"
            >
              <a
                href="https://www.linkedin.com/in/poonam-karki-56585b1b4/"
                className="text-emerald-600 hover:text-emerald-800 transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:karkip@lincolnu.edu"
                className="text-emerald-600 hover:text-emerald-800 transition-colors transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Glassy Mirror Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>

              <div className="relative z-10 space-y-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Research Focus
                  </h3>
                  <p className="text-gray-600">
                    Microbial ecology & soil biogeochemical cycling
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Leaf className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Expertise Areas
                      </h4>
                      <p className="text-sm text-gray-600">
                        Microbial ecology, soil biogeochemical cycling, and
                        conservation practices
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Mission</h4>
                      <p className="text-sm text-gray-600">
                        Advancing climate-smart agriculte by helping small and
                        mid-scale farmers transition to organic production,
                        improve productivity, and build resilience thorough
                        evidence-based soild health managament
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Current Position
                  </h4>
                  <p className="text-sm text-gray-700">
                    Soil Health Research Specialist at Lincoln University,
                    working in Dr. Hurisso's lab focusing on organic
                    agricultural systems
                  </p>
                </div>

                <div className="text-center pt-4">
                  <p className="text-xs text-gray-500 italic">
                    "A single teaspoon of soil contains more microorganisms than
                    the entire global human population"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
