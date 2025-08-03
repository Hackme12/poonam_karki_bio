"use client";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Linkedin,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative" style={{ backgroundColor: "#8B7355" }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
              Poonam Karki
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-600">
              Research Specialist & Data Scientist
            </p>
            <p className="text-lg mb-8 text-gray-600">
              Bridging Finance Analytics & Soil Science Research at Lincoln
              University of Missouri
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg px-4 py-2">
                <span className="text-2xl font-bold text-blue-600">15+</span>
                <p className="text-sm text-gray-600">Publications</p>
              </div>
              <div className="bg-blue-50 rounded-lg px-4 py-2">
                <span className="text-2xl font-bold text-blue-600">8</span>
                <p className="text-sm text-gray-600">Conferences</p>
              </div>
              <div className="bg-blue-50 rounded-lg px-4 py-2">
                <span className="text-2xl font-bold text-blue-600">3</span>
                <p className="text-sm text-gray-600">Research Projects</p>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/poonam-karki-56585b1b4/"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:poonam@example.com"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                PhD Candidate Profile
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Seeking PhD opportunities to advance interdisciplinary research
                in{" "}
                <strong>
                  soil science, data analytics, and climate-smart agriculture
                </strong>
                . My unique background bridges finance, data science, and
                agricultural research.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With proven research experience, publication record, and $150K+
                in secured funding, I bring both theoretical knowledge and
                practical implementation skills.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
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

              <div className="bg-white p-4 rounded-lg shadow-sm border">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
