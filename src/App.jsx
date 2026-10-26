import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ObjectivesSection from './components/ObjectivesSection';
import MethodologySection from './components/MethodologySection';
import ResultsSection from './components/ResultsSection';
import SignificanceSection from './components/SignificanceSection';
import TeamAndContactSection from './components/TeamAndContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <ObjectivesSection />
        <MethodologySection />
        <ResultsSection />
        <SignificanceSection />
        <TeamAndContactSection />
      </main>
      <Footer />
    </div>
  );
}
