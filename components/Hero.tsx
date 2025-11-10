
import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const text = UI_TEXT[language];

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/hero-bg/1920/1080" 
          alt="Elegant living room" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight" style={{ fontFamily: language === 'ar' ? 'Tajawal' : 'Poppins, sans-serif' }}>
          {text.heroTitle}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
          {text.heroSubtitle}
        </p>
        <a 
          href="#" 
          className="bg-[var(--c-content)] text-[var(--c-bg)] py-3 px-8 rounded-full text-lg font-semibold hover:bg-[var(--c-accent)] transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          {text.heroButton}
        </a>
      </div>
    </section>
  );
};

export default Hero;
