
import React from 'react';
import { Product, Language } from '../types';
import { UI_TEXT } from '../constants';
import { HeartIcon } from './icons/Icons';
import { useAppContext } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
  language: Language;
  onProductClick: (product: Product) => void;
  addToast: (message: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, language, onProductClick, addToast }) => {
  const text = UI_TEXT[language];
  const { favorites, toggleFavorite, addToCart } = useAppContext();
  const isFavorited = favorites.includes(product.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleFavorite(product.id);
    addToast(isFavorited ? text.removedFromFavorites : text.addedToFavorites);
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
    addToast(text.addedToCart);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onProductClick(product);
  };

  return (
    <div className="bg-[var(--c-bg)] rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col relative">
      <a 
        href="#"
        onClick={handleCardClick}
        className="absolute inset-0 z-0"
        aria-label={`View details for ${product.name[language]}`}
      ></a>
      <div className="relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name[language]} 
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 rtl:right-auto rtl:left-3 bg-white/80 backdrop-blur-sm rounded-full p-2 text-[var(--c-action)] hover:text-red-500 transition-colors z-10"
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          <HeartIcon className={`w-6 h-6 ${isFavorited ? 'fill-current text-red-500' : 'fill-none'}`} />
        </button>
      </div>
      <div className="p-5 flex flex-col flex-grow relative z-10">
        <p className="text-sm text-[var(--c-content)]/70 mb-1">{product.category[language]}</p>
        <h3 className="text-lg font-bold text-[var(--c-content)] mb-2 flex-grow">
          {product.name[language]}
        </h3>
        <p className="text-xl font-semibold text-[var(--c-content)] mb-4">
          {product.price.toLocaleString(language === 'ar' ? 'ar-SA' : 'en-US')} {text.currency}
        </p>
        <button 
          onClick={handleAddToCartClick}
          className="w-full mt-auto bg-[var(--c-content)] text-[var(--c-bg)] py-2 px-4 rounded-md font-semibold hover:bg-[var(--c-accent)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--c-content)] focus:ring-opacity-50"
        >
          {text.addToCart}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
