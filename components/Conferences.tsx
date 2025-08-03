"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, Award, Users, Presentation, X } from "lucide-react";

const featuredHighlights = [
  {
    title: "1st Place – ASA-CSSA-SSSA International Annual Meeting",
    year: "2023",
    location: "St. Louis, MO",
    award: "🥇 1st Place",
    type: "Award",
  },
  {
    title: "3rd Place – 1890 ARD Research Symposium",
    year: "2024",
    location: "Nashville, TN",
    award: "🥉 3rd Place",
    type: "Award",
  },
  {
    title: "MarbleSeed Organic Farming Conference Presenter",
    year: "2025",
    location: "La Crosse, WI",
    award: "🎤 Presenter",
    type: "Presentation",
  },
  {
    title: "Farmer Field Day Organizer – Lincoln University Busby Farm",
    year: "2024",
    location: "Lincoln University, MO",
    award: "🧑‍🏫 Organizer",
    type: "Workshop",
  },
  {
    title: "Master's Thesis Defense – Lincoln University",
    year: "2024",
    location: "Lincoln University, MO",
    award: "🎓 Defense",
    type: "Academic",
  },
];

const conferences = [
  {
    name: "ASA-CSSA-SSSA International Annual Meeting",
    year: "2023",
    location: "St. Louis, MO",
    type: "Poster",
    presentation: "Evaluation of Labile C and N Indicators of Soil Health",
    achievement: "🥇 1st Place recognition",
    category: "Conference",
    description:
      "We presented two research posters at the ASA-CSSA-SSSA International Annual Meeting in October 2023, held in St. Louis, Missouri: 'Evaluation of Labile C and N Indicators of Soil Health After 2 Years of Living Perennial and Annual Cover Crops During Organic Vegetable Production' and 'Soil Health Characteristics Across a Gradient of Organic Land-Use Intensity in Mid-Missouri.' This premier conference, hosted by the three largest agricultural societies in the United States, brought together nearly 4,000 researchers to share innovative solutions across environmental and agricultural sciences. The first poster received first place recognition and was featured on Lincoln University's official social media platforms and the Organic Management Systems Discussion Board.",
    images: ["/image/asa-cssa-sssa.JPG"],
  },
  {
    name: "1890 ARD Research Symposium",
    year: "2024",
    location: "Nashville, TN",
    type: "Poster",
    presentation: "Integrating Living Perennial Cover Crops",
    achievement: "🥉 3rd Place in Renewable Energy & Climate Change Category",
    category: "Conference",
    description:
      "I presented a poster titled 'Integrating Living Perennial Cover Crops into Organic Vegetable Systems: Impact on Soil Health and Cover Crop Biomass Production' at the 1890 ARD Research Symposium held in Nashville, Tennessee. The symposium, themed 'Climate, Health, and Cultivating the Next Generation of Agriculture Leaders: Creating Solutions in Food, Agriculture, and Natural Resources,' brought together over 900 participants and showcased more than 500 research papers and posters. My poster was awarded 3rd place in the Renewable Energy, Natural Resources, Environment, and Climate Change category and was also featured on Lincoln University's official social media platforms.",
    images: ["/image/1890_ard_2.jpg", "/image/environment_human_sc.jpg"],
  },
  {
    name: "MarbleSeed Organic Farming Conference",
    year: "2025",
    location: "La Crosse, WI",
    type: "Poster",
    presentation:
      "Soil Health Comparison of Living Perennial vs Annual Cover Crops",
    achievement: "Presenter",
    category: "Conference",
    description:
      "I presented a poster titled 'Soil Health Comparison of Living Perennial versus Annual Cover Crops During Transition to Certified Organic Vegetable Production' at the Marbleseed Organic Farming Conference, the largest organic farming conference in the United States. Each year, this event brings together regenerative and organic farmers of diverse backgrounds and experiences to explore the latest organic farming methods, build community, and shape the future of the organic movement. My presentation aimed to share research findings and practical insights to support farmers transitioning to certified organic production.",
    images: ["/image/marbleseed_organic.jpg"],
  },
  {
    name: "Great Plains Growers Conference",
    year: "2024 & 2025",
    location: "St. Joseph, MO",
    type: "Poster",
    presentation: "Soil Health & Vegetable Yield Responses",
    achievement: "Multi-year participation",
    category: "Conference",
    description:
      "We presented a poster titled 'Soil Health and Vegetable Yield Responses to Perennial versus Annual Cover Crops in Traffic Pathways' at the 2024 Great Plains Growers Conference (GPGC) in St. Joseph, Missouri. GPGC is a key annual event for commercial fruit and vegetable producers, specialty crop growers, and hobbyists across the Midwest, drawing attendees from Iowa, Kansas, Missouri, Nebraska, South Dakota, and beyond. The conference provides practical, research-based insights from vegetable specialists and experienced growers. Our poster highlighted how the use of perennial and annual cover crops in traffic pathways can enhance soil health and improve vegetable yield, offering guidance to producers seeking more sustainable production strategies.",
    images: ["/image/great_plains.jpg"],
  },
  {
    name: "12th National Horticultural Seminar",
    year: "2021",
    location: "Kathmandu, Nepal",
    type: "Poster",
    presentation: "Growth & Yield of African Marigold",
    achievement: "International presentation",
    category: "Conference",
    description:
      "I presented a poster titled 'Effect of Maleic Hydrazide and Gibberellic Acid on Growth and Yield of African Marigold (Tagetes erecta L.) CV. Calcuttia Orange' at the National Horticultural Seminar in Nepal. This seminar serves as a platform to foster the development of horticulture in Nepal and to strengthen linkages with national and international institutions and organizations. The research aimed to evaluate the effects of varying doses of Maleic Hydrazide and Gibberellic Acid on the growth, flowering, and yield of African marigold. The findings contribute valuable information for optimizing production practices and lay the foundation for future research into the productivity of floricultural crops.",
    images: ["/image/kritipur_ktm.jpg"],
  },
  {
    name: "Minority and Limited Resources Farmers and Producers Conference",
    year: "2023 & 2024",
    location: "Sikeston, MO, USA",
    type: "Presenter",
    presentation: "Soil Health Testing Tools and Interpretation",
    achievement: "Multi-year demonstration",
    category: "Conference",
    description:
      "Our lab came together to demonstrate different tools and their use in soil health testing and how to interpret them in September of 2023 and 2024. Together with the farmers located in the Southeast regions of Missouri, we explored soil respiration, microbial food sources, and soil compaction.",
    images: [
      "/image/resources_farmers_producers_1.jpg",
      "/image/resources_farmer_producer_2.jpg",
    ],
  },
];

const workshops = [
  {
    name: "Soil Health Outreach Program",
    year: "2023 & 2024",
    location: "Kansas City, MO",
    type: "Community Workshop",
    description:
      "I conducted a community-focused soil health workshop aimed at providing science-based, comprehensive soil health management information to farmers in and around Kansas City in September of 2023 and 2024. The program delivered targeted education and outreach services tailored to meet the specific needs of local producers, promoting sustainable farming practices and improved soil stewardship.",
    category: "Workshop",
    presentation: undefined,
    achievement: undefined,
    images: [
      "/image/soil_health_outreach_program.jpg",
      "/image/soil_health_outreach_2.jpg",
    ],
  },
  {
    name: "DJI L1 LiDAR Sensor Training",
    year: "2024",
    location: "Lincoln University, MO",
    type: "Technical Training",
    description:
      "I received hands-on training on operating DJI's L1 LiDAR sensor in photogrammetric mode at a flight altitude of 50 meters above ground level, as part of the Organic Transition Project at Lincoln University. This training enhanced my skills in aerial data collection, LiDAR technology, and geospatial analysis, supporting efforts to monitor and assess field conditions and management practices in organic transition systems.",
    category: "Training",
    presentation: undefined,
    achievement: undefined,
    images: ["/image/sensor_operation.jpg"],
  },
  {
    name: "Farmer Field Day",
    year: "2024",
    location: "Lincoln University Busby Farm",
    type: "Field Workshop",
    description:
      "We organized a farmer's field day to showcase our research titled 'The Impact of Annual and Perennial Cover Crops on Soil Health and Vegetable Yield' to members of the Missouri Organic Association. The objective of this event was to demonstrate practical outcomes of our research directly in the field, share science-based insights on soil health improvements and yield responses, and engage with more than 50 organic producers/enthusiasts through hands-on learning and open dialogue. The event served as a valuable platform to connect research with real-world farming practices and foster collaborative learning among farmers, researchers, and extension professionals.",
    category: "Workshop",
    presentation: undefined,
    achievement: undefined,
    images: ["/image/busby_farm.jpg"],
  },
  {
    name: "Plant Breeding & Data Analytics Hackathon",
    year: "2024",
    location: "Nashville, TN",
    type: "Hackathon",
    description:
      "I participated in the 2024 Plant Breeding and Data Analytics Hackathon held in Nashville, TN, where I learned to work with complex datasets to assess phenotypic traits of potential new plant varieties. Through this experience, I contributed to the development of an evaluation system designed to predict which plants will perform best in specific environments—even before they are planted. This hands-on program enhanced my skills in data analytics, predictive modeling, and plant breeding, enabling me to make informed decisions that support farmers in selecting resilient, high-performing crops, ultimately contributing to more efficient and sustainable agricultural systems.",
    category: "Training",
    presentation: undefined,
    achievement: undefined,
    images: ["/image/nashvile.jpg"],
  },
  {
    name: "Hemp Field Day",
    year: "2023",
    location: "Lincoln University, USA",
    type: "Participant",
    description:
      "I attended the 2023 Hemp Field Day organized by Lincoln University, which focused on the latest research, production practices, and market opportunities in industrial hemp cultivation. The event provided valuable insights into hemp genetics, agronomy, pest management, and post-harvest processing, and served as a platform for networking with researchers, extension specialists, and growers working to advance the hemp industry in the region.",
    category: "Workshop",
    presentation: undefined,
    achievement: undefined,
    images: ["/image/hemp_field_day.png"],
  },
];

const categories = ["All", "Conference", "Workshop", "Training"];

export default function Conferences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const allEngagements = [...conferences, ...workshops];
  const filteredEngagements =
    selectedCategory === "All"
      ? allEngagements
      : allEngagements.filter((item) => item.category === selectedCategory);

  const timelineData = allEngagements.sort((a, b) => {
    const yearA = parseInt(a.year.split(" ")[0]);
    const yearB = parseInt(b.year.split(" ")[0]);
    return yearB - yearA;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Presenter":
        return <Presentation className="w-4 h-4" />;
      case "Workshop Leader":
        return <Users className="w-4 h-4" />;
      case "Panel Discussion":
        return <Users className="w-4 h-4" />;
      case "Poster Session":
        return <Award className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Presenter":
        return "bg-green-100 text-green-800";
      case "Workshop Leader":
        return "bg-purple-100 text-purple-800";
      case "Panel Discussion":
        return "bg-blue-100 text-blue-800";
      case "Poster Session":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="conferences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Professional Engagements
          </h2>

          {/* Featured Highlights */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">
              Featured Highlights
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {featuredHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-sm text-center border-l-4 border-blue-500"
                >
                  <div className="text-2xl mb-2">{highlight.award}</div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {highlight.year} • {highlight.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View Toggle & Category Filter */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode("timeline")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === "timeline"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Timeline View
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-blue-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {filteredEngagements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(
                          item.type
                        )}`}
                      >
                        {item.type}
                      </span>
                      <span className="text-sm text-gray-600">{item.year}</span>
                      <span className="text-sm text-gray-600">•</span>
                      <span className="text-sm text-gray-600">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Images */}
                  {item.images && item.images.length > 0 ? (
                    <div
                      className={`mb-4 ${
                        item.images.length === 1
                          ? "grid grid-cols-1"
                          : "grid grid-cols-2 gap-4"
                      }`}
                    >
                      {item.images.map((img: string, imgIndex: number) => (
                        <div
                          key={imgIndex}
                          className="h-96 rounded-lg overflow-hidden"
                        >
                          <img
                            src={img}
                            alt={`${item.name} ${imgIndex + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full h-96 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Event Image</span>
                    </div>
                  )}

                  {item.achievement && (
                    <div className="mb-4">
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {item.achievement}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      {item.category}
                    </span>
                    <span className="text-blue-600 text-sm font-medium">
                      Click for details →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Timeline View */}
          {viewMode === "timeline" && (
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start mb-12"
                  >
                    <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div
                      className="ml-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 cursor-pointer flex-1"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="space-y-4">
                        {/* Header */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
                              {item.year}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                                item.type
                              )}`}
                            >
                              {item.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 mb-2">{item.location}</p>
                        </div>

                        {/* Image */}
                        {item.images && item.images.length > 0 ? (
                          <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-sm">
                              Event Image
                            </span>
                          </div>
                        )}

                        {/* Achievement and CTA */}
                        <div className="flex justify-between items-center">
                          {item.achievement && (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                              {item.achievement}
                            </span>
                          )}
                          <span className="text-blue-600 text-sm font-medium ml-auto">
                            Click for details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Modal */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                      {selectedItem.name}
                    </h2>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  {/* Images in modal */}
                  {selectedItem.images && selectedItem.images.length > 0 ? (
                    <div
                      className={`mb-8 ${
                        selectedItem.images.length === 1
                          ? "grid grid-cols-1"
                          : selectedItem.images.length === 2
                          ? "grid grid-cols-2 gap-6"
                          : "grid grid-cols-3 gap-4"
                      }`}
                    >
                      {selectedItem.images.map(
                        (img: string, imgIndex: number) => (
                          <div
                            key={imgIndex}
                            className="h-[500px] rounded-lg overflow-hidden bg-gray-100"
                          >
                            <img
                              src={img}
                              alt={`${selectedItem.name} ${imgIndex + 1}`}
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <div className="w-full h-96 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                      <span className="text-gray-500">Event Image</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold">{selectedItem.year}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>{selectedItem.location}</span>
                    </div>

                    {selectedItem.presentation && (
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Presentation:
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {selectedItem.presentation}
                        </p>
                      </div>
                    )}

                    {selectedItem.description && (
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Description:
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedItem.description}
                        </p>
                      </div>
                    )}

                    {selectedItem.achievement && (
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Achievement:
                        </h3>
                        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                          {selectedItem.achievement}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Engagement Stats
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
              Professional Impact
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {conferences.length}
                </div>
                <p className="text-gray-600">Conferences</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {workshops.length}
                </div>
                <p className="text-gray-600">Workshops & Trainings</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                <p className="text-gray-600">Awards Won</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
                <p className="text-gray-600">Years Active</p>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
