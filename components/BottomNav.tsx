
import React, { useMemo } from 'react';
import { Language, Page } from '../types';
import { UI_TEXT } from '../constants';
import { HomeIcon, GridIcon, HeartIcon, UserIcon } from './icons/Icons';

interface BottomNavProps {
  language: Language;
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ language, activePage, setActivePage }) => {
  const text = UI_TEXT[language];

  const navItems = useMemo(() => [
    { id: 'home', label: text.bottomNavHome, icon: <HomeIcon /> },
    { id: 'categories', label: text.bottomNavCategories, icon: <GridIcon /> },
    { id: 'favorites', label: text.bottomNavFavorites, icon: <HeartIcon /> },
    { id: 'account', label: text.bottomNavAccount, icon: <UserIcon /> },
  ], [text]);
  
  const activeTabIndex = navItems.findIndex(item => item.id === activePage);

  const sliderWidth = 100 / navItems.length;
  const isRtl = language === 'ar';

  const sliderPosition = isRtl
    ? (navItems.length - 1 - activeTabIndex) * 100
    : activeTabIndex * 100;

  return (
    <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] h-16 z-50 glass-bar rounded-full p-1">
      <div
        className="glass-bar-slider"
        style={{
          width: `${sliderWidth}%`,
          transform: `translateX(${sliderPosition}%)`,
        }}
      />
      <div className="grid grid-cols-4 items-center h-full w-full">
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActivePage(item.id as Page);
            }}
            className={`relative z-10 flex flex-col items-center justify-center space-y-1 w-full h-full text-center transition-colors duration-300 ${
              activePage === item.id ? 'text-[var(--c-action)]' : 'text-[var(--c-content)]/70'
            } hover:text-[var(--c-action)]`}
            aria-current={activePage === item.id ? 'page' : undefined}
          >
            {React.cloneElement(item.icon, { 'aria-hidden': true, className: `h-6 w-6 ${activePage === item.id ? 'text-[var(--c-action)]' : ''}` })}
            <span className="text-xs font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
