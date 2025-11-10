
import React from 'react';
import { Language, Page } from '../types';
import { UI_TEXT } from '../constants';
import { UserIcon, ReceiptIcon, MapPinIcon, CogIcon, ChevronRightIcon, LogoutIcon, InfoIcon } from './icons/Icons';

interface AccountPageProps {
  language: Language;
  setActivePage: (page: Page) => void;
}

const AccountPage: React.FC<AccountPageProps> = ({ language, setActivePage }) => {
  const text = UI_TEXT[language];
  const isRtl = language === 'ar';

  const menuItems = [
    { label: text.accountEditProfile, icon: <UserIcon className="w-6 h-6 text-[var(--c-accent)]" />, page: null },
    { label: text.accountOrderHistory, icon: <ReceiptIcon className="w-6 h-6 text-[var(--c-accent)]" />, page: null },
    { label: text.accountAddresses, icon: <MapPinIcon className="w-6 h-6 text-[var(--c-accent)]" />, page: null },
    { label: text.accountSettings, icon: <CogIcon className="w-6 h-6 text-[var(--c-accent)]" />, page: null },
    { label: text.navInfo, icon: <InfoIcon className="w-6 h-6 text-[var(--c-accent)]" />, page: 'info' as Page },
  ];

  const userName = language === 'ar' ? 'زائر فضوة' : 'Fadhwa Guest';

  return (
    <div className="animate-fade animate-fade-in-up">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[var(--c-content)] mb-4">
            {text.accountPageTitle}
          </h1>
          <p className="text-center text-[var(--c-content)]/70 -mt-2 mb-10 max-w-md mx-auto">{text.accountPageSubtitle}</p>


          {/* User Info */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse p-6 bg-[var(--c-bg-alt)] rounded-xl mb-8 shadow-sm">
            <img 
              src="https://picsum.photos/seed/avatar/100/100" 
              alt="User Avatar"
              className="w-20 h-20 rounded-full object-cover border-4 border-[var(--c-bg)]"
            />
            <div>
              <h2 className="text-2xl font-bold text-[var(--c-content)]">{userName}</h2>
              <p className="text-[var(--c-content)]/80">fadhwa.store@example.com</p>
            </div>
          </div>

          {/* Menu */}
           <div className="bg-[var(--c-bg-alt)] rounded-lg shadow-sm">
            {menuItems.map((item, index) => (
                <React.Fragment key={item.label}>
                    <a
                        href="#"
                        onClick={e => {
                            e.preventDefault();
                            if (item.page) {
                                setActivePage(item.page);
                            }
                        }}
                        className={`flex items-center justify-between p-4 transition-colors duration-200 rounded-lg ${item.page ? 'hover:bg-[var(--c-content)]/5 cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}
                    >
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        {item.icon}
                        <span className="font-semibold">{item.label}</span>
                        </div>
                        <ChevronRightIcon className={`w-5 h-5 text-[var(--c-content)]/50 ${isRtl ? 'transform rotate-180' : ''}`} />
                    </a>
                    {index < menuItems.length - 1 && <hr className="border-[var(--c-bg)] mx-4" />}
                </React.Fragment>
            ))}
          </div>

          {/* Logout Button */}
          <div className="mt-8">
            <button className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse p-4 text-red-500 font-semibold bg-red-500/5 rounded-lg hover:bg-red-500/10 transition-colors duration-200">
                <LogoutIcon className="w-6 h-6"/>
                <span>{text.accountLogout}</span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AccountPage;