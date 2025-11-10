
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';
import FavoritesPage from './components/FavoritesPage';
import AccountPage from './components/AccountPage';
import { Language, Page } from './types';

export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('light');
  const [activePage, setActivePage] = useState<Page>('home');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);


  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const renderPage = () => {
    switch(activePage) {
      case 'home':
        return <HomePage language={language} />;
      case 'categories':
        return <CategoriesPage language={language} />;
      case 'favorites':
        return <FavoritesPage language={language} />;
      case 'account':
        return <AccountPage language={language} />;
      default:
        return <HomePage language={language} />;
    }
  }

  return (
    <div className="bg-[var(--c-bg)] text-[var(--c-content)] min-h-screen">
      <Header 
        language={language} 
        toggleLanguage={toggleLanguage} 
        theme={theme}
        onThemeChange={setTheme}
        />
      <main className="overflow-x-hidden" key={activePage}>
        {renderPage()}
      </main>
      <Footer language={language} />
      <BottomNav language={language} activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export default App;