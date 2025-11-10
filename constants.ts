
import { Product, Category } from './types';

export const UI_TEXT = {
  ar: {
    navHome: 'الرئيسية',
    navShop: 'المتجر',
    navAbout: 'من نحن',
    navContact: 'تواصل معنا',
    heroTitle: 'اكتشف الأناقة في كل زاوية',
    heroSubtitle: 'مجموعة مختارة من أفضل المنتجات المنزلية والإلكترونية لترقية مساحتك.',
    heroButton: 'تسوق الآن',
    featuredTitle: 'منتجات مميزة',
    categoriesTitle: 'تصفح حسب الفئة',
    addToCart: 'أضف للسلة',
    footerDescription: 'فضوة هو وجهتك الأولى لكل ما هو أنيق وعصري. نقدم منتجات عالية الجودة لإثراء حياتك اليومية.',
    footerLinks: 'روابط سريعة',
    footerContact: 'تواصل معنا',
    currency: 'ر.س',
    language: 'English',
    bottomNavHome: 'الرئيسية',
    bottomNavCategories: 'التصنيفات',
    bottomNavFavorites: 'المفضلة',
    bottomNavAccount: 'حسابي',
    categoriesPageTitle: 'تصفح جميع التصنيفات',
    favoritesPageTitle: 'قائمة المفضلات',
    favoritesEmpty: 'قائمة المفضلات فارغة.',
    favoritesEmptyAction: 'ابدأ التسوق',
    accountPageTitle: 'حسابي',
    accountEditProfile: 'تعديل الملف الشخصي',
    accountOrderHistory: 'سجل الطلبات',
    accountAddresses: 'عناويني',
    accountSettings: 'الإعدادات',
    accountLogout: 'تسجيل الخروج',
    favoritesEmptySubtitle: 'يبدو أنك لم تقم بإضافة أي منتجات إلى قائمة المفضلات بعد. ابدأ التصفح واحفظ منتجاتك المفضلة!',
    accountPageSubtitle: 'إدارة ملفك الشخصي، طلباتك، وإعداداتك.',
    addedToCart: 'تمت إضافة المنتج إلى السلة!',
    addedToFavorites: 'تمت الإضافة إلى المفضلة!',
    removedFromFavorites: 'تمت الإزالة من المفضلة!',
    cartTitle: 'سلة التسوق',
    cartEmpty: 'سلتك فارغة.',
    subtotal: 'المجموع الفرعي',
    checkout: 'إتمام الشراء',
    productDetails: 'تفاصيل المنتج',
    close: 'إغلاق',
  },
  en: {
    navHome: 'Home',
    navShop: 'Shop',
    navAbout: 'About Us',
    navContact: 'Contact',
    heroTitle: 'Discover Elegance in Every Corner',
    heroSubtitle: 'A curated collection of the finest home and electronic goods to elevate your space.',
    heroButton: 'Shop Now',
    featuredTitle: 'Featured Products',
    categoriesTitle: 'Browse by Category',
    addToCart: 'Add to Cart',
    footerDescription: 'Fadhwa is your premier destination for everything elegant and modern. We offer high-quality products to enrich your daily life.',
    footerLinks: 'Quick Links',
    footerContact: 'Contact Us',
    currency: 'SAR',
    language: 'العربية',
    bottomNavHome: 'Home',
    bottomNavCategories: 'Categories',
    bottomNavFavorites: 'Favorites',
    bottomNavAccount: 'Account',
    categoriesPageTitle: 'Browse All Categories',
    favoritesPageTitle: 'My Wishlist',
    favoritesEmpty: 'Your wishlist is empty.',
    favoritesEmptyAction: 'Start Shopping',
    accountPageTitle: 'My Account',
    accountEditProfile: 'Edit Profile',
    accountOrderHistory: 'Order History',
    accountAddresses: 'My Addresses',
    accountSettings: 'Settings',
    accountLogout: 'Logout',
    favoritesEmptySubtitle: "Looks like you haven't added any items to your wishlist yet. Start exploring and save your favorite products!",
    accountPageSubtitle: 'Manage your profile, orders, and settings.',
    addedToCart: 'Product added to cart!',
    addedToFavorites: 'Added to favorites!',
    removedFromFavorites: 'Removed from favorites!',
    cartTitle: 'Shopping Cart',
    cartEmpty: 'Your cart is empty.',
    subtotal: 'Subtotal',
    checkout: 'Checkout',
    productDetails: 'Product Details',
    close: 'Close',
  },
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: { ar: 'مصباح طاولة سيراميك', en: 'Ceramic Table Lamp' },
    category: { ar: 'ديكور منزلي', en: 'Home Decor' },
    price: 250,
    imageUrl: 'https://picsum.photos/seed/lamp/400/400',
    description: {
      ar: 'مصباح طاولة أنيق مصنوع من السيراميك عالي الجودة، يضيف لمسة من الدفء والإضاءة الهادئة إلى أي غرفة. مثالي لغرف النوم والمعيشة.',
      en: 'An elegant table lamp made of high-quality ceramic, adding a touch of warmth and soft lighting to any room. Perfect for bedrooms and living rooms.'
    }
  },
  {
    id: 2,
    name: { ar: 'سماعات بلوتوث لاسلكية', en: 'Wireless Bluetooth Headphones' },
    category: { ar: 'إلكترونيات', en: 'Electronics' },
    price: 499,
    imageUrl: 'https://picsum.photos/seed/headphones/400/400',
    description: {
      ar: 'استمتع بصوت نقي وغامر مع سماعات البلوتوث اللاسلكية. تصميم مريح، عمر بطارية طويل، ومثالية للموسيقى والمكالمات.',
      en: 'Enjoy pure and immersive sound with these wireless Bluetooth headphones. Ergonomic design, long battery life, and perfect for music and calls.'
    }
  },
  {
    id: 3,
    name: { ar: 'طقم أواني طهي', en: 'Cookware Set' },
    category: { ar: 'مطبخ', en: 'Kitchen' },
    price: 750,
    imageUrl: 'https://picsum.photos/seed/cookware/400/400',
    description: {
      ar: 'طقم أواني طهي متكامل غير لاصق، مصنوع من مواد متينة لتوزيع حرارة متساوٍ ونتائج طهي مثالية في كل مرة.',
      en: 'A complete non-stick cookware set, made from durable materials for even heat distribution and perfect cooking results every time.'
    }
  },
  {
    id: 4,
    name: { ar: 'كرسي استرخاء مخملي', en: 'Velvet Accent Chair' },
    category: { ar: 'أثاث', en: 'Furniture' },
    price: 1200,
    imageUrl: 'https://picsum.photos/seed/chair/400/400',
    description: {
      ar: 'أضف قطعة مميزة إلى ديكورك مع هذا الكرسي المخملي الفاخر. يوفر راحة فائقة وتصميمًا عصريًا يلفت الأنظار.',
      en: 'Add a statement piece to your decor with this luxurious velvet accent chair. It offers superior comfort and a modern design that catches the eye.'
    }
  },
   {
    id: 5,
    name: { ar: 'ساعة حائط ذكية', en: 'Smart Wall Clock' },
    category: { ar: 'إلكترونيات', en: 'Electronics' },
    price: 350,
    imageUrl: 'https://picsum.photos/seed/clock/400/400',
    description: {
        ar: 'أكثر من مجرد ساعة، تعرض درجة الحرارة والتاريخ. تصميم بسيط وأنيق يناسب أي جدار في منزلك أو مكتبك.',
        en: 'More than just a clock, it displays temperature and date. A simple and elegant design that fits any wall in your home or office.'
    }
  },
  {
    id: 6,
    name: { ar: 'مجموعة مناشف قطنية فاخرة', en: 'Luxury Cotton Towel Set' },
    category: { ar: 'حمام', en: 'Bathroom' },
    price: 180,
    imageUrl: 'https://picsum.photos/seed/towels/400/400',
    description: {
        ar: 'دلل نفسك مع مجموعة المناشف القطنية الفاخرة. فائقة النعومة والامتصاص لتجربة استحمام تشبه السبا.',
        en: 'Pamper yourself with this luxury cotton towel set. Ultra-soft and absorbent for a spa-like bathing experience.'
    }
  },
  {
    id: 7,
    name: { ar: 'نظام صوتي منزلي', en: 'Home Sound System' },
    category: { ar: 'إلكترونيات', en: 'Electronics' },
    price: 1500,
    imageUrl: 'https://picsum.photos/seed/sound/400/400',
    description: {
        ar: 'ارتقِ بتجربة الترفيه المنزلي مع هذا النظام الصوتي القوي. مثالي للأفلام والموسيقى، يوفر صوتًا محيطيًا سينمائيًا.',
        en: 'Elevate your home entertainment with this powerful sound system. Ideal for movies and music, providing cinematic surround sound.'
    }
  },
  {
    id: 8,
    name: { ar: 'مجموعة شموع عطرية', en: 'Scented Candle Set' },
    category: { ar: 'ديكور منزلي', en: 'Home Decor' },
    price: 120,
    imageUrl: 'https://picsum.photos/seed/candles/400/400',
    description: {
        ar: 'خلق أجواء من الاسترخاء والهدوء مع مجموعة الشموع العطرية. روائح متنوعة تدوم طويلاً لتعطير منزلك.',
        en: 'Create an atmosphere of relaxation and tranquility with this scented candle set. A variety of long-lasting scents to perfume your home.'
    }
  },
];

export const CATEGORIES: Category[] = [
    {
        id: 'electronics',
        name: { ar: 'إلكترونيات', en: 'Electronics' },
        imageUrl: 'https://picsum.photos/seed/category_electronics/400/400'
    },
    {
        id: 'home-decor',
        name: { ar: 'ديكور منزلي', en: 'Home Decor' },
        imageUrl: 'https://picsum.photos/seed/category_decor/400/400'
    },
    {
        id: 'kitchen',
        name: { ar: 'مطبخ', en: 'Kitchen' },
        imageUrl: 'https://picsum.photos/seed/category_kitchen/400/400'
    },
    {
        id: 'furniture',
        name: { ar: 'أثاث', en: 'Furniture' },
        imageUrl: 'https://picsum.photos/seed/category_furniture/400/400'
    }
];
