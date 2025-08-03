"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Calendar,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  Microscope,
  Leaf,
  BarChart3,
  Globe,
} from "lucide-react";

const publications = [
  {
    title:
      "Living Perennial Cover Crops: Impact on Soil Health and Carbon Sequestration",
    authors: "P. Karki, J. Smith, M. Johnson",
    year: "2023",
    journal: "Journal of Sustainable Agriculture",
    type: "Peer-reviewed Article",
    impact: "15+ citations",
    abstract:
      "Investigation of perennial cover crops' effects on soil carbon storage and microbial diversity in Midwest agricultural systems.",
    tags: ["Soil Health", "Carbon Sequestration", "Climate Change"],
    link: "#",
    featured: true,
  },
  {
    title: "Machine Learning Applications in Soil Health Assessment",
    authors: "P. Karki",
    year: "2022",
    journal: "MSc Thesis - Lincoln University",
    type: "Thesis",
    impact: "92% accuracy achieved",
    abstract:
      "Development of ML models for predicting soil health indicators using spectroscopic and chemical analysis data.",
    tags: ["Machine Learning", "Data Science", "Soil Analysis"],
    link: "#",
    featured: true,
  },
  {
    title:
      "Plastic Upcycling in Agricultural Applications: A Sustainability Analysis",
    authors: "P. Karki, R. Davis",
    year: "2023",
    journal: "Environmental Science & Technology",
    type: "Research Paper",
    impact: "Patent pending",
    abstract:
      "Novel approaches to converting agricultural plastic waste into value-added products for sustainable farming practices.",
    tags: ["Sustainability", "Waste Management", "Innovation"],
    link: "#",
    featured: false,
  },
];

const researchAreas = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Soil Health & Carbon Sequestration",
    description:
      "Investigating soil carbon storage mechanisms and developing strategies for climate change mitigation through agricultural practices. Research includes labile carbon and nitrogen indicators, cover crop integration, and soil microbial function. Recognized with 1st Place at the ASA-CSSA-SSSA International Annual Meeting (2023) for outstanding research on soil health. Active in hands-on farmer workshops and field days to promote adoption of sustainable practices.",
    projects: 3,
    color: "green",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Agricultural Data Science",
    description:
      "Applying machine learning and statistical modeling to solve complex agricultural challenges and optimize farming systems. Skills enhanced through participation in the Plant Breeding and Data Analytics Hackathon (2024), contributing to predictive systems for resilient crop selection. Leveraging advanced data collection methods such as LiDAR sensor technology for geospatial analysis in organic farming transitions.",
    projects: 2,
    color: "blue",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Climate-Resilient Agriculture",
    description:
      "Developing sustainable farming practices that adapt to climate variability while maintaining productivity and profitability. Research showcased at leading conferences including MarbleSeed Organic Farming Conference (2025) and 1890 ARD Research Symposium (2024). Focused on perennial cover crop integration, soil microbial activity, and resilience strategies for smallholder and organic farmers. Extensive community engagement through Soil Health Outreach Programs and Farmer Field Days.",
    projects: 4,
    color: "purple",
  },
];

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState("publications");

  const getColorClasses = (color: string) => {
    const colors = {
      green: "from-green-500 to-emerald-600 text-green-600 bg-green-50",
      blue: "from-blue-500 to-cyan-600 text-blue-600 bg-blue-50",
      purple: "from-purple-500 to-violet-600 text-purple-600 bg-purple-50",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Research Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering interdisciplinary research at the intersection of soil
              science, data analytics, and sustainable agriculture
            </p>
          </div>

          {/* Research Areas */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                  <div
                    className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${getColorClasses(
                      area.color
                    )
                      .split(" ")
                      .slice(0, 2)
                      .join(" ")} text-white mb-6`}
                  >
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex justify-between text-sm">
                    <div
                      className={`${
                        getColorClasses(area.color).split(" ").slice(-1)[0]
                      } px-3 py-1 rounded-full`}
                    >
                      <span
                        className={`font-semibold ${
                          getColorClasses(area.color).split(" ")[2]
                        }`}
                      >
                        {area.projects} Projects
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("publications")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "publications"
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <BookOpen className="w-5 h-5 inline mr-2" />
                Featured Publications
              </button>
              <button
                onClick={() => setActiveTab("impact")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "impact"
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <TrendingUp className="w-5 h-5 inline mr-2" />
                Research Impact
              </button>
            </div>
          </div>

          {/* Publications Tab */}
          {activeTab === "publications" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8"
            >
              {publications
                .filter((pub) => pub.featured)
                .map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Award className="w-6 h-6 text-yellow-500" />
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {pub.type}
                          </span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {pub.impact}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          {pub.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="font-medium">{pub.authors}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>
                            {pub.year} • {pub.journal}
                          </span>
                        </div>
                      </div>
                      <a
                        href={pub.link}
                        className="text-blue-600 hover:text-blue-800 p-2 hover:bg-white rounded-lg transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {pub.abstract}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          )}

          {/* Impact Tab */}
          {activeTab === "impact" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
                <Microscope className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">15+</div>
                <p className="text-blue-100">Publications</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">88</div>
                <p className="text-green-100">Citations</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">$150K</div>
                <p className="text-purple-100">Funding Secured</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center">
                <Globe className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">8</div>
                <p className="text-orange-100">Conferences</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
