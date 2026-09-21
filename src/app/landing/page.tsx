import React from 'react';
import { LandingNavbar } from './landing_components/LandingNavbar';
import { LandingHero } from './landing_components/LandingHero';
import { LandingFeatures } from './landing_components/LandingFeatures';
import { LandingBenefits } from './landing_components/LandingBenefits';
import { LandingModules } from './landing_components/LandingModules';
import { LandingFooter } from './landing_components/LandingFooter';
import './landing.css';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-page flex flex-col font-sans">
      <LandingNavbar />
      <main className="flex-1">
        <LandingHero />
        <LandingFeatures />
        <LandingBenefits />
        <LandingModules />
      </main>
      <LandingFooter />
    </div>
  );
}
