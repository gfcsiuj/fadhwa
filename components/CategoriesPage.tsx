
import React from 'react';
import { Language } from '../types';
import { UI_TEXT, CATEGORIES } from '../constants';

interface CategoriesPageProps {
  language: Language;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ language }) => {
  const text = UI_TEXT[language];

  return (
    <div className="animate-fade animate-fade-in-up">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[var(--c-content)] mb-12">
            {text.categoriesPageTitle}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {CATEGORIES.map((category) => (
              <a href="#" key={category.id} className="group aspect-square block relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                <img 
                  src={category.imageUrl} 
                  alt={category.name[language]}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <h3 className="text-white text-lg font-bold transition-transform duration-300 group-hover:-translate-y-1">
                    {category.name[language]}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;