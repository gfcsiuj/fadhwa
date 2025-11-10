
import React from 'react';
import { Language, Page } from '../types';
import { UI_TEXT } from '../constants';
import { FacebookIcon, InstagramIcon, TelegramIcon } from './icons/Icons';

interface InfoPageProps {
  language: Language;
  setActivePage: (page: Page) => void;
}

const InfoPage: React.FC<InfoPageProps> = ({ language, setActivePage }) => {
  const text = UI_TEXT[language];
  
  const navLinks = [
    { page: 'home' as Page, label: text.navHome },
    { page: 'categories' as Page, label: text.navShop },
    { page: 'favorites' as Page, label: text.bottomNavFavorites },
    { page: 'account' as Page, label: text.bottomNavAccount },
  ];

  return (
    <div className="animate-fade animate-fade-in-up">
        <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[var(--c-accent)] text-[var(--c-bg)] p-8 rounded-xl shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* About */}
                        <div className="space-y-4 md:col-span-1">
                            <img className="h-20 w-auto bg-white/20 p-2 rounded-md" src="https://up6.cc/2025/10/176278484489081.png" alt="Fadhwa Logo" />
                            <p className="text-sm text-[var(--c-bg)]/80 leading-relaxed">
                            {text.footerDescription}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-semibold mb-4 opacity-90">{text.footerLinks}</h3>
                            <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.label}>
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    if(link.page) setActivePage(link.page);
                                }} className="text-[var(--c-bg)]/80 hover:text-[var(--c-bg)] transition-colors duration-200">{link.label}</a>
                                </li>
                            ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-semibold mb-4 opacity-90">{text.footerContact}</h3>
                            <ul className="space-y-2 text-[var(--c-bg)]/80">
                            <li>Email: contact@fadhwa.com</li>
                            <li>Phone: +966 12 345 6789</li>
                            </ul>
                            <div className="flex space-x-4 rtl:space-x-reverse mt-4">
                            <a href="https://www.facebook.com/profile.php?id=61583318562877" target="_blank" rel="noopener noreferrer" className="text-[var(--c-bg)]/80 hover:text-[var(--c-bg)] transition-colors duration-200">
                                <FacebookIcon />
                            </a>
                            <a href="https://www.instagram.com/fa_dhwa" target="_blank" rel="noopener noreferrer" className="text-[var(--c-bg)]/80 hover:text-[var(--c-bg)] transition-colors duration-200">
                                <InstagramIcon />
                            </a>
                            <a href="https://t.me/dagg_iq" target="_blank" rel="noopener noreferrer" className="text-[var(--c-bg)]/80 hover:text-[var(--c-bg)] transition-colors duration-200">
                                <TelegramIcon />
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-[var(--c-content)]/60">
                    <p>&copy; {new Date().getFullYear()} Fadhwa Store. All rights reserved.</p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default InfoPage;
