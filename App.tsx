
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';
import FavoritesPage from './components/FavoritesPage';
import AccountPage from './components/AccountPage';
import InfoPage from './components/InfoPage';
import { AppProvider } from './context/AppContext';
import { Language, Page, Product } from './types';
import ProductDetailModal from './components/ProductDetailModal';
import CartPanel from './components/CartPanel';
import ToastContainer from './components/ToastContainer';
import SearchOverlay from './components/SearchOverlay';

export type Theme = 'light' | 'dark';
export type ToastMessage = {
  id: number;
  message: string;
  type: 'success' | 'error';
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('light');
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  
  const addToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };


  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
  };
  
  const handlePageChange = (page: Page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch(activePage) {
      case 'home':
        return <HomePage language={language} onProductClick={setSelectedProduct} addToast={addToast} />;
      case 'categories':
        return <CategoriesPage language={language} onProductClick={setSelectedProduct} addToast={addToast} />;
      case 'favorites':
        return <FavoritesPage language={language} onProductClick={setSelectedProduct} setActivePage={handlePageChange} addToast={addToast} />;
      case 'account':
        return <AccountPage language={language} setActivePage={handlePageChange} />;
      case 'info':
        return <InfoPage language={language} setActivePage={handlePageChange} />;
      default:
        return <HomePage language={language} onProductClick={setSelectedProduct} addToast={addToast} />;
    }
  }

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsSearchOpen(false); // Close search when a product is selected
  };

  return (
    <AppProvider>
      <div className="bg-[var(--c-bg)] text-[var(--c-content)] min-h-screen">
        <Header 
          language={language} 
          toggleLanguage={toggleLanguage} 
          theme={theme}
          onThemeChange={setTheme}
          setActivePage={handlePageChange}
          onCartClick={() => setIsCartOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
          activePage={activePage}
          />
        <main className="pb-28 md:pb-0 overflow-x-hidden" key={activePage}>
          {renderPage()}
        </main>
        <BottomNav language={language} activePage={activePage} setActivePage={handlePageChange} />

        {selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
            language={language}
            addToast={addToast}
          />
        )}
        <CartPanel 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          language={language}
        />
        <SearchOverlay 
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          language={language}
          onProductClick={handleProductClick}
          addToast={addToast}
        />
        <ToastContainer toasts={toasts} removeToast={removeToast} />
      </div>
    </AppProvider>
  );
};

export default App;