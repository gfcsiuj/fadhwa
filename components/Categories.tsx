
import React from 'react';
import { Language } from '../types';
import { UI_TEXT, CATEGORIES } from '../constants';

interface CategoriesProps {
  language: Language;
}

const Categories: React.FC<CategoriesProps> = ({ language }) => {
  const text = UI_TEXT[language];

  return (
    <section className="py-16 sm:py-20 bg-[var(--c-bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--c-content)] mb-12">
          {text.categoriesTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {CATEGORIES.map((category) => (
            <a href="#" key={category.id} className="group text-center">
              <div className="relative overflow-hidden rounded-full aspect-square shadow-md transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={category.imageUrl} 
                  alt={category.name[language]}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-[var(--c-content)]/20 group-hover:bg-[var(--c-content)]/10 transition-colors duration-300"></div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--c-content)] group-hover:text-opacity-80 transition-colors duration-300">
                {category.name[language]}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
