
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
  description: {
    ar: string;
    en: string;
  };
}

export interface Category {
    id: string;
    name: {
        ar: string;
        en: string;
    };
    imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AppContextType {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}
