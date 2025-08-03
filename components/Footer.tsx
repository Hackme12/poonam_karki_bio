'use client'
import { Mail, Linkedin, Github, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Poonam Karki</h3>
            <p className="text-gray-300 mb-4">
              Research Specialist bridging finance analytics and soil science research 
              for sustainable agricultural solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/poonam-karki-56585b1b4/" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:poonam.karki@lincolnu.edu" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#conferences" className="hover:text-white transition-colors">Conferences</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/resume.pdf" className="hover:text-white transition-colors">Resume</a></li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Research Focus</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Soil Health & Carbon Sequestration</li>
              <li>Climate-Resilient Agriculture</li>
              <li>Machine Learning in Agriculture</li>
              <li>Sustainable Farming Practices</li>
              <li>Agricultural Data Science</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Poonam Karki © 2024
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}