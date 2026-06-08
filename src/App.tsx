import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import ScreensSection from './components/ScreensSection';
import HowToSection from './components/HowToSection';
import PricingSection from './components/PricingSection';
import TrustSection from './components/TrustSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import EmailModal from './components/EmailModal';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen">
      <Header onCTAClick={openModal} />
      <main>
        <HeroSection onCTAClick={openModal} />
        <PainSection />
        <SolutionSection onCTAClick={openModal} />
        <FeaturesSection />
        <ScreensSection />
        <HowToSection />
        <PricingSection onCTAClick={openModal} />
        <TrustSection />
        <FAQSection />
        <CTASection onCTAClick={openModal} />
      </main>
      <Footer />
      <EmailModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
