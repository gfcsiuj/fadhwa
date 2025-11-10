
import React, { useEffect, useRef, useState } from 'react';
import { Product, Language } from '../types';
import { UI_TEXT } from '../constants';
import { XIcon } from './icons/Icons';
import { useAppContext } from '../context/AppContext';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  language: Language;
  addToast: (message: string) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, language, addToast }) => {
  const text = UI_TEXT[language];
  const { addToCart } = useAppContext();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Focus trapping
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };
    modalRef.current?.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      modalRef.current?.removeEventListener('keydown', handleTabKey);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
        onClose();
    }, 300);
  };
  
  const handleAddToCart = () => {
    addToCart(product);
    addToast(text.addedToCart);
    handleClose();
  };

  const backdropAnimation = isClosing ? 'modal-exit' : 'modal-enter';
  const contentAnimation = isClosing ? 'modal-content-exit' : 'modal-content-enter';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm ${backdropAnimation}`}
        onClick={handleClose}
      ></div>
      <div
        ref={modalRef}
        className={`relative bg-[var(--c-bg)] rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden ${contentAnimation}`}
      >
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name[language]}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
          <div className="flex-grow overflow-y-auto">
            <button
                onClick={handleClose}
                className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 text-[var(--c-content)]/70 hover:text-[var(--c-content)] rounded-full hover:bg-[var(--c-content)]/10 transition-colors"
                aria-label={text.close}
            >
                <XIcon />
            </button>
            <p className="text-sm text-[var(--c-content)]/70 mb-1">{product.category[language]}</p>
            <h2 id="product-modal-title" className="text-2xl md:text-3xl font-bold mb-4">{product.name[language]}</h2>
            <p className="text-2xl font-semibold text-[var(--c-accent)] mb-4">
              {product.price.toLocaleString(language === 'ar' ? 'ar-SA' : 'en-US')} {text.currency}
            </p>
            <p className="text-[var(--c-content)]/90 leading-relaxed">
              {product.description[language]}
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-[var(--c-content)]/10">
            <button
              onClick={handleAddToCart}
              className="w-full glass-btn justify-center text-[var(--c-content)] py-3 px-4 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--c-content)] focus:ring-opacity-50"
            >
              {text.addToCart}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
