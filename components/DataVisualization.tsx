'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

export default function DataVisualization() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeChart, setActiveChart] = useState('publications')

  // Publications over time data
  const publicationsData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Publications',
        data: [1, 3, 5, 4, 2],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Citations',
        data: [2, 8, 15, 28, 35],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      },
    ],
  }

  // Research areas data
  const researchAreasData = {
    labels: ['Soil Health', 'Data Science', 'Climate Agriculture', 'Sustainability', 'Finance'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  }

  // Skills proficiency data
  const skillsData = {
    labels: ['Statistical Analysis', 'Python/R', 'Machine Learning', 'Soil Testing', 'Research Design'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [95, 90, 85, 92, 94],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  }

  return (
    <section id="data-viz" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Research Impact Dashboard</h2>
          
          {/* Chart Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveChart('publications')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeChart === 'publications'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50'
              }`}
            >
              Publications & Citations
            </button>
            <button
              onClick={() => setActiveChart('areas')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeChart === 'areas'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50'
              }`}
            >
              Research Areas
            </button>
            <button
              onClick={() => setActiveChart('skills')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeChart === 'skills'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50'
              }`}
            >
              Skills Proficiency
            </button>
          </div>

          {/* Chart Display */}
          <motion.div
            key={activeChart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg"
          >
            {activeChart === 'publications' && (
              <div>
                <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
                  Publications and Citations Over Time
                </h3>
                <Line data={publicationsData} options={chartOptions} />
              </div>
            )}

            {activeChart === 'areas' && (
              <div>
                <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
                  Research Focus Distribution
                </h3>
                <div className="max-w-md mx-auto">
                  <Doughnut data={researchAreasData} options={doughnutOptions} />
                </div>
              </div>
            )}

            {activeChart === 'skills' && (
              <div>
                <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
                  Technical Skills Proficiency
                </h3>
                <Bar data={skillsData} options={chartOptions} />
              </div>
            )}
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Total Publications</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">88</div>
              <p className="text-green-100">Total Citations</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">3.2</div>
              <p className="text-purple-100">H-Index</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">12</div>
              <p className="text-orange-100">Collaborations</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}