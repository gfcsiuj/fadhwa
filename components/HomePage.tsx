
import React from 'react';
import Hero from './Hero';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import { Language } from '../types';

interface HomePageProps {
    language: Language;
}

const HomePage: React.FC<HomePageProps> = ({ language }) => {
    return (
        <>
            <div className="animate-fade animate-fade-in-up">
                <Hero language={language} />
            </div>
            <div className="animate-fade animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <Categories language={language} />
            </div>
            <div className="animate-fade animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <FeaturedProducts language={language} />
            </div>
        </>
    );
};

export default HomePage;
