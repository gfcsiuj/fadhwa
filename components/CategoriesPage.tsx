
import React, { useState, useMemo } from 'react';
import { Language, Product } from '../types';
import { UI_TEXT, PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from './ProductCard';

interface CategoriesPageProps {
  language: Language;
  onProductClick: (product: Product) => void;
  addToast: (message: string) => void;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ language, onProductClick, addToast }) => {
  const text = UI_TEXT[language];
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  const displayedProducts = useMemo(() => {
    let products = [...PRODUCTS];

    if (activeCategory !== 'all') {
      const categoryEnName = CATEGORIES.find(c => c.id === activeCategory)?.name.en;
      products = products.filter(p => p.category.en === categoryEnName);
    }

    switch (sortOrder) {
      case 'price_asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        products.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return products;
  }, [activeCategory, sortOrder]);

  const categoryFilters = [{ id: 'all', name: { ar: text.allCategories, en: text.allCategories }}, ...CATEGORIES];

  return (
    <div className="animate-fade animate-fade-in-up">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[var(--c-content)] mb-4">
            {text.categoriesPageTitle}
          </h1>
          
          {/* Filters and Sorting */}
          <div className="mb-10">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
              {categoryFilters.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${activeCategory === cat.id ? 'bg-[var(--c-accent)] text-white shadow-md' : 'bg-[var(--c-bg-alt)] hover:bg-[var(--c-content)]/10'}`}
                >
                  {cat.name[language]}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-center sm:justify-end">
                <div className="relative">
                    <select 
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="appearance-none bg-[var(--c-bg-alt)] border border-[var(--c-content)]/10 rounded-full py-2 pl-4 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--c-action)]"
                        aria-label={text.sortBy}
                    >
                        <option value="default" disabled>{text.sortBy}</option>
                        <option value="price_asc">{text.priceLowHigh}</option>
                        <option value="price_desc">{text.priceHighLow}</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[var(--c-content)]/70">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                language={language}
                onProductClick={onProductClick}
                addToast={addToast}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
