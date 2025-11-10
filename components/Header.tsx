
import React, { useState } from 'react';
import { Language, Page } from '../types';
import { Theme } from '../App';
import { UI_TEXT } from '../constants';
import { MenuIcon, SearchIcon, UserIcon, CartIcon, GlobeIcon, XIcon } from './icons/Icons';
import ThemeSwitcher from './ThemeSwitcher';
import { useAppContext } from '../context/AppContext';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  setActivePage: (page: Page) => void;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, theme, onThemeChange, setActivePage, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { cart } = useAppContext();
  const text = UI_TEXT[language];

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const navLinks = [
    { page: 'home' as Page, label: text.navHome },
    { page: 'categories' as Page, label: text.navShop },
    { page: null, label: text.navAbout },
    { page: null, label: text.navContact },
  ];
  
  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
        setIsClosing(false);
        setIsMenuOpen(false);
    }, 300);
  };
  
  const handleNavLinkClick = (page: Page | null) => {
    if (page) {
      setActivePage(page);
    }
    handleMenuClose();
  };

  const isRtl = language === 'ar';
  const menuAnimationClass = isRtl
    ? (isClosing ? 'cart-exit-rtl' : 'cart-enter-rtl')
    : (isClosing ? 'cart-exit-ltr' : 'cart-enter-ltr');
  const backdropAnimation = isClosing ? 'modal-exit' : 'modal-enter';


  return (
    <>
      <header className="bg-[var(--c-bg)]/80 backdrop-blur-lg sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8 rtl:space-x-reverse">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('home'); }} className="flex items-center">
                  <img className="h-16 w-auto" src="https://up6.cc/2025/10/176278484497082.png" alt="Fadhwa Logo" />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex md:space-x-8 rtl:md:space-x-reverse">
                {navLinks.map((link) => (
                  <a key={link.label} href="#" onClick={(e) => {
                    e.preventDefault();
                    if(link.page) setActivePage(link.page);
                  }} className="text-lg font-medium text-[var(--c-content)] hover:text-opacity-75 transition-colors duration-200">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Icons & Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse">
              <div className="hidden md:block">
                <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
              </div>
              <button className="hidden md:flex items-center justify-center h-11 w-11 glass-btn text-[var(--c-content)] rounded-full">
                <SearchIcon />
              </button>
              <button onClick={() => setActivePage('account')} className="hidden md:flex items-center justify-center h-11 w-11 glass-btn text-[var(--c-content)] rounded-full">
                <UserIcon />
              </button>

              <div className="md:hidden">
                <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
              </div>

              <button onClick={onCartClick} className="relative flex items-center justify-center h-11 w-11 glass-btn text-[var(--c-content)] rounded-full">
                <CartIcon />
                {cartItemCount > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 bg-[var(--c-action)] text-white text-xs rounded-full flex items-center justify-center animate-pulse-badge">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <button onClick={toggleLanguage} className="hidden md:flex items-center space-x-1 rtl:space-x-reverse p-2 text-[var(--c-content)] hover:text-opacity-75 rounded-full text-sm font-medium">
                <GlobeIcon />
                <span>{text.language}</span>
              </button>
              <button className="md:hidden flex items-center justify-center h-11 w-11 glass-btn text-[var(--c-content)] rounded-full" onClick={() => setIsMenuOpen(true)}>
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Side Panel */}
      {(isMenuOpen || isClosing) && (
        <div 
            role="dialog" 
            aria-modal="true" 
            className="md:hidden fixed inset-0 z-50 flex" 
            dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div 
            className={`fixed inset-0 bg-black/50 ${backdropAnimation}`} 
            onClick={handleMenuClose}
          ></div>

          <div className={`relative z-10 w-4/5 max-w-sm h-full bg-[var(--c-bg)] shadow-2xl flex flex-col ${menuAnimationClass} ${isRtl ? 'ml-0 mr-auto' : 'mr-0 ml-auto'}`}>
            <div className="flex items-center justify-between p-4 border-b border-[var(--c-content)]/10">
              <h2 className="font-bold text-lg">{text.menu}</h2>
              <button onClick={handleMenuClose} className="p-2 -m-2">
                <XIcon />
              </button>
            </div>

            <nav className="flex-grow p-4">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.page);
                    }} className="block p-3 rounded-md text-lg font-medium text-[var(--c-content)] hover:bg-[var(--c-content)]/10">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-[var(--c-content)]/10">
                <button onClick={() => { toggleLanguage(); handleMenuClose(); }} className="w-full flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-md text-lg font-medium text-[var(--c-content)] hover:bg-[var(--c-content)]/10">
                  <GlobeIcon />
                  <span>{text.language}</span>
                </button>
                <div className="flex items-center space-x-4 rtl:space-x-reverse mt-4 p-3">
                    <button className="p-2 text-[var(--c-content)] hover:text-opacity-75 rounded-full">
                      <SearchIcon />
                    </button>
                    <button onClick={() => handleNavLinkClick('account')} className="p-2 text-[var(--c-content)] hover:text-opacity-75 rounded-full">
                      <UserIcon />
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
