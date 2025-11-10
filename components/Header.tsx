
import React, { useState } from 'react';
import { Language } from '../types';
import { Theme } from '../App';
import { UI_TEXT } from '../constants';
import { MenuIcon, SearchIcon, UserIcon, CartIcon, GlobeIcon, XIcon } from './icons/Icons';
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, theme, onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const text = UI_TEXT[language];
  const navLinks = [
    { href: '#', label: text.navHome },
    { href: '#', label: text.navShop },
    { href: '#', label: text.navAbout },
    { href: '#', label: text.navContact },
  ];

  return (
    <header className="bg-[var(--c-bg)]/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img className="h-16 w-auto" src="https://up6.cc/2025/10/176278484497082.png" alt="Fadhwa Logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8 rtl:md:space-x-reverse">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-lg font-medium text-[var(--c-content)] hover:text-opacity-75 transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Icons & Actions */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
             <div className="hidden md:block">
              <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
             </div>
            <button className="hidden md:block p-2 text-[var(--c-content)] hover:text-opacity-75 rounded-full">
              <SearchIcon />
            </button>
            <button className="hidden md:block p-2 text-[var(--c-content)] hover:text-opacity-75 rounded-full">
              <UserIcon />
            </button>
            <button className="relative p-2 text-[var(--c-content)] hover:text-opacity-75 rounded-full">
              <CartIcon />
              <span className="absolute top-0 right-0 h-4 w-4 bg-[var(--c-action)] text-white text-xs rounded-full flex items-center justify-center animate-pulse-badge">2</span>
            </button>
            <button onClick={toggleLanguage} className="flex items-center space-x-1 rtl:space-x-reverse p-2 text-[var(--c-content)] hover:text-opacity-75 rounded-full text-sm font-medium">
              <GlobeIcon />
              <span className="hidden sm:inline">{text.language}</span>
            </button>
            <button className="md:hidden p-2 text-[var(--c-content)]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--c-bg)] shadow-lg">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-[var(--c-content)] hover:bg-[var(--c-content)]/10">
                {link.label}
              </a>
            ))}
             <div className="border-t border-[var(--c-content)]/20 pt-4 mt-4 px-3 flex items-center justify-between">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <button className="p-2 text-[var(--c-content)] hover:text-opacity-75 rounded-full">
                    <SearchIcon />
                    </button>
                    <button className="p-2 text-[var(--c-content)] hover:text-opacity-75 rounded-full">
                    <UserIcon />
                    </button>
                </div>
                <div>
                    <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
                </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
