
import React from 'react';
import { Language } from '../types';
import { UI_TEXT, PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { HeartIcon } from './icons/Icons';

interface FavoritesPageProps {
  language: Language;
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ language }) => {
  const text = UI_TEXT[language];
  const favoritedProducts = PRODUCTS.slice(0, 3); // Mock data

  return (
    <div className="animate-fade animate-fade-in-up">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[var(--c-content)] mb-12">
            {text.favoritesPageTitle}
          </h1>
          
          {favoritedProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="flex justify-center items-center mb-6">
                <div className="w-32 h-32 bg-[var(--c-bg-alt)] rounded-full flex items-center justify-center">
                  <HeartIcon className="w-16 h-16 text-[var(--c-content)]/50" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-[var(--c-content)] mb-3">{text.favoritesEmpty}</h2>
              <p className="text-[var(--c-content)]/70 max-w-sm mx-auto mb-6">{text.favoritesEmptySubtitle}</p>
              <button className="bg-[var(--c-content)] text-[var(--c-bg)] py-2 px-6 rounded-md font-semibold hover:bg-[var(--c-accent)] transition-colors duration-300">
                {text.favoritesEmptyAction}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {favoritedProducts.map((product) => (
                <ProductCard key={product.id} product={product} language={language} isFavorited={true} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FavoritesPage;