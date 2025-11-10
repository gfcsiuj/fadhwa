
import React from 'react';
import Hero from './Hero';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import { Language, Product } from '../types';

interface HomePageProps {
    language: Language;
    onProductClick: (product: Product) => void;
    addToast: (message: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ language, onProductClick, addToast }) => {
    return (
        <>
            <div className="animate-fade animate-fade-in-up">
                <Hero language={language} />
            </div>
            <div className="animate-fade animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <Categories language={language} />
            </div>
            <div className="animate-fade animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <FeaturedProducts language={language} onProductClick={onProductClick} addToast={addToast} />
            </div>
        </>
    );
};

export default HomePage;
