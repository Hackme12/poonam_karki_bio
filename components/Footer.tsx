"use client";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Poonam Karki</h3>
            <p className="text-gray-300 mb-4">
              Soil Health Research Specialist at Lincoln University, focusing on
              microbial ecology and sustainable agricultural solutions for
              small- and mid-scale farmers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/poonam-karki-56585b1b4/"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:karkip@lincolnu.edu"
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
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="hover:text-white transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#conferences"
                  className="hover:text-white transition-colors"
                >
                  Conferences
                </a>
              </li>
              <li>
                <a
                  href="/resume/CV_PoonamKarki.pdf"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Poonam
            Karki © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
