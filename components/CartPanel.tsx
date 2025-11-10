
import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { useAppContext } from '../context/AppContext';
import { XIcon, PlusIcon, MinusIcon, TrashIcon, CartIcon } from './icons/Icons';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const CartPanel: React.FC<CartPanelProps> = ({ isOpen, onClose, language }) => {
  const { cart, updateQuantity, removeFromCart } = useAppContext();
  const text = UI_TEXT[language];
  const isRtl = language === 'ar';
  const panelRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
        setIsClosing(false);
        onClose();
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  const animationClass = isRtl
    ? (isClosing ? 'cart-exit-rtl' : 'cart-enter-rtl')
    : (isClosing ? 'cart-exit-ltr' : 'cart-enter-ltr');
  
  const backdropAnimation = isClosing ? 'modal-exit' : 'modal-enter';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
      className="fixed inset-0 z-50 flex"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 ${backdropAnimation}`}
        onClick={handleClose}
      ></div>

      {/* Panel */}
      <div
        ref={panelRef}
        className={`relative z-10 w-full max-w-md h-full bg-[var(--c-bg)] shadow-2xl ml-auto rtl:ml-0 rtl:mr-auto flex flex-col ${animationClass}`}
      >
        <header className="flex items-center justify-between p-4 border-b border-[var(--c-content)]/10">
          <h2 id="cart-title" className="text-xl font-bold">{text.cartTitle}</h2>
          <button onClick={handleClose} className="p-2 rounded-full hover:bg-[var(--c-content)]/10">
            <XIcon className="w-6 h-6" />
          </button>
        </header>

        {cart.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center p-8">
            <CartIcon className="w-20 h-20 text-[var(--c-content)]/20 mb-4" />
            <p className="text-lg font-semibold">{text.cartEmpty}</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center space-x-4 rtl:space-x-reverse">
                <img src={item.imageUrl} alt={item.name[language]} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name[language]}</h3>
                  <p className="text-sm text-[var(--c-content)]/70">{item.price.toLocaleString(isRtl ? 'ar-SA' : 'en-US')} {text.currency}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="p-1 border border-[var(--c-content)]/20 rounded-md hover:bg-[var(--c-bg-alt)]"><MinusIcon /></button>
                    <span className="w-10 text-center font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 border border-[var(--c-content)]/20 rounded-md hover:bg-[var(--c-bg-alt)]"><PlusIcon /></button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500/70 hover:text-red-500 hover:bg-red-500/10 rounded-full">
                  <TrashIcon />
                </button>
              </div>
            ))}
          </div>
        )}

        <footer className="p-4 border-t border-[var(--c-content)]/10 space-y-4">
            <div className="flex justify-between font-bold text-lg">
                <span>{text.subtotal}</span>
                <span>{subtotal.toLocaleString(isRtl ? 'ar-SA' : 'en-US')} {text.currency}</span>
            </div>
            <button 
              disabled={cart.length === 0}
              className="w-full bg-[var(--c-content)] text-[var(--c-bg)] py-3 px-4 rounded-md font-semibold hover:bg-[var(--c-accent)] transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
              {text.checkout}
            </button>
        </footer>
      </div>
    </div>
  );
};

export default CartPanel;
