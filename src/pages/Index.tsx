import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeSection />;
      case 'ueber-mich':
        return <AboutSection />;
      case 'mein-angebot':
        return <ServicesSection />;
      case 'kontakt':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
