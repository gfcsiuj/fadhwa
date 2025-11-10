
import React from 'react';
import { Language, Page } from '../types';
import { UI_TEXT } from '../constants';
import { FacebookIcon, InstagramIcon, TelegramIcon } from './icons/Icons';

interface FooterProps {
  language: Language;
  setActivePage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ language, setActivePage }) => {
  const text = UI_TEXT[language];
  
  const navLinks = [
    { page: 'home' as Page, label: text.navHome },
    { page: 'categories' as Page, label: text.navShop },
    { page: null, label: text.navAbout },
    { page: null, label: text.navContact },
  ];

  return (
    <footer className="bg-[var(--c-content)] text-[var(--c-bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <img className="h-20 w-auto bg-white/20 p-2 rounded-md" src="https://up6.cc/2025/10/176278484489081.png" alt="Fadhwa Logo" />
            <p className="text-sm text-[var(--c-bg)]/80 leading-relaxed">
              {text.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{text.footerLinks}</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    if(link.page) setActivePage(link.page);
                  }} className="text-[var(--c-bg)]/80 hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{text.footerContact}</h3>
            <ul className="space-y-2 text-[var(--c-bg)]/80">
              <li>Email: contact@fadhwa.com</li>
              <li>Phone: +966 12 345 6789</li>
            </ul>
            <div className="flex space-x-4 rtl:space-x-reverse mt-4">
              <a href="https://www.facebook.com/profile.php?id=61583318562877" target="_blank" rel="noopener noreferrer" className="text-[var(--c-bg)]/80 hover:text-white transition-colors duration-200">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/fa_dhwa" target="_blank" rel="noopener noreferrer" className="text-[var(--c-bg)]/80 hover:text-white transition-colors duration-200">
                <InstagramIcon />
              </a>
               <a href="https://t.me/dagg_iq" target="_blank" rel="noopener noreferrer" className="text-[var(--c-bg)]/80 hover:text-white transition-colors duration-200">
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--c-bg)]/20 pt-8 text-center text-sm text-[var(--c-bg)]/60">
          <p>&copy; {new Date().getFullYear()} Fadhwa Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
