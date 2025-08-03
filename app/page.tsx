"use client";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Research from "../components/Research";
import Conferences from "../components/Conferences";
import DataVisualization from "../components/DataVisualization";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ExperienceModal from "../components/ExperienceModal";

export default function Home() {
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navigation onExperienceClick={() => setIsExperienceModalOpen(true)} />
      <Hero />
      <Research />
      <Conferences />
      <Footer />
      <ExperienceModal
        isOpen={isExperienceModalOpen}
        onClose={() => setIsExperienceModalOpen(false)}
      />
    </main>
  );
}
