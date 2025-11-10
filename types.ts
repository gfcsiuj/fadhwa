
export type Language = 'ar' | 'en';

export type Page = 'home' | 'categories' | 'favorites' | 'account';

export interface Product {
  id: number;
  name: {
    ar: string;
    en: string;
  };
  category: {
    ar: string;
    en: string;
  };
  price: number;
  imageUrl: string;
}

export interface Category {
    id: string;
    name: {
        ar: string;
        en: string;
    };
    imageUrl: string;
}