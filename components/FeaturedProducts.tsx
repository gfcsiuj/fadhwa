
import React from 'react';
import { Language } from '../types';
import { UI_TEXT, PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  language: Language;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ language }) => {
  const text = UI_TEXT[language];

  return (
    <section className="py-16 sm:py-20 bg-[var(--c-bg-alt)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--c-content)] mb-12">
          {text.featuredTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.slice(0, 8).map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              language={language}
              isFavorited={index < 2} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;