'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Calendar, Briefcase } from 'lucide-react'

const experiences = [
  {
    title: "Research Specialist",
    company: "Lincoln University of Missouri",
    location: "Missouri, USA",
    duration: "2022 - Present",
    type: "Full-time",
    description: "Leading soil health research projects focusing on climate-resilient agriculture and sustainable farming practices.",
    achievements: [
      "Developed ML models for soil health prediction with 92% accuracy",
      "Published 3 peer-reviewed articles on soil carbon sequestration",
      "Secured $150K in research funding for perennial cover crop studies",
      "Collaborated with 5+ agricultural partners across Missouri"
    ]
  },
  {
    title: "Data Scientist",
    company: "QMetry",
    location: "Remote",
    duration: "2021 - 2022",
    type: "Full-time",
    description: "Applied machine learning and statistical analysis to improve software testing processes and quality assurance metrics.",
    achievements: [
      "Built predictive models using logistic regression and random forest",
      "Improved test case prioritization efficiency by 35%",
      "Developed automated reporting dashboards using Python and R",
      "Trained team members on statistical analysis techniques"
    ]
  },
  {
    title: "Research Assistant",
    company: "Lincoln University of Missouri",
    location: "Missouri, USA",
    duration: "2020 - 2022",
    type: "Part-time",
    description: "Supported faculty research in soil science and agricultural sustainability while completing MSc degree.",
    achievements: [
      "Conducted field experiments on 15+ agricultural plots",
      "Analyzed soil samples using spectroscopic methods",
      "Presented research findings at 3 regional conferences",
      "Mentored 2 undergraduate research students"
    ]
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Professional Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-20 pb-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg card-hover">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-medium mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}