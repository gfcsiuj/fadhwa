
import React, { useState, useEffect, useMemo } from 'react';
import { Language, Product } from '../types';
import { UI_TEXT, PRODUCTS } from '../constants';
import { XIcon, SearchIcon } from './icons/Icons';
import ProductCard from './ProductCard';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onProductClick: (product: Product) => void;
  addToast: (message: string) => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, language, onProductClick, addToast }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [query, setQuery] = useState('');
  const text = UI_TEXT[language];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Auto-focus the input when the overlay opens
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 300);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
      setQuery(''); // Reset query on close
    }, 300);
  };

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowerCaseQuery = query.toLowerCase();
    return PRODUCTS.filter(p => 
      p.name.en.toLowerCase().includes(lowerCaseQuery) ||
      p.name.ar.toLowerCase().includes(lowerCaseQuery)
    );
  }, [query]);

  if (!isOpen && !isClosing) return null;

  const overlayAnimation = isClosing ? 'search-overlay-exit' : 'search-overlay-enter';
  const contentAnimation = isClosing ? 'search-content-exit' : 'search-content-enter';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 bg-[var(--c-bg)]/80 backdrop-blur-lg ${overlayAnimation}`}
    >
      <div className={`w-full h-full flex flex-col ${contentAnimation}`}>
        <header className="flex-shrink-0 container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
             <div className="flex-grow relative">
                <input
                    id="search-input"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={text.searchPlaceholder}
                    className="w-full h-14 bg-[var(--c-bg-alt)] rounded-full pl-14 pr-6 text-lg border-2 border-transparent focus:border-[var(--c-action)] focus:ring-0 focus:outline-none transition-colors"
                />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--c-content)]/50">
                    <SearchIcon className="w-6 h-6" />
                </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 ml-4 text-[var(--c-content)]/70 hover:text-[var(--c-content)]"
              aria-label={text.close}
            >
              <XIcon className="w-8 h-8" />
            </button>
          </div>
        </header>

        <main className="flex-grow overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {query.trim() && searchResults.length > 0 && (
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {searchResults.map(product => (
                  <ProductCard 
                    key={product.id}
                    product={product}
                    language={language}
                    onProductClick={onProductClick}
                    addToast={addToast}
                  />
                ))}
               </div>
            )}
            {query.trim() && searchResults.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-xl text-[var(--c-content)]/80">{text.noResults} "{query}"</p>
                </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchOverlay;
