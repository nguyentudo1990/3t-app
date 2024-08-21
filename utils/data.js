const cartData = [
  {
    url: require('../assets/products/item1.png'),
    name: 'Wireless Headphone',
    category: 'Electronics',
    price: '$70.00',
  },
  {
    url: require('../assets/products/item2.png'),
    name: 'Smart Watch',
    category: 'Watches',
    price: '$55.00',
  },
  {
    url: require('../assets/products/item3.png'),
    name: 'Mens Sweter',
    category: "Men's",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item4.png'),
    name: 'Wireless Headphone',
    category: 'Electronics',
    price: '$70.00',
  },
  {
    url: require('../assets/products/item5.png'),
    name: 'Wireless Headphone',
    category: 'Electronics',
    price: '$55.00',
  },
  {
    url: require('../assets/products/item6.png'),
    name: 'Air Buds',
    category: 'Electronics',
    price: '$120.00',
  },
  {
    url: require('../assets/products/item7.png'),
    name: 'Air Buds',
    category: 'Electronics',
    price: '$120.00',
  },
  {
    url: require('../assets/products/item8.png'),
    name: 'Smart Watch',
    category: 'Watches',
    price: '$120.00',
  },
  {
    url: require('../assets/products/item9.png'),
    name: 'Mens Shirt',
    category: "Men's",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item10.png'),
    name: 'Wireless Headphone',
    category: 'Electronics',
    price: '$120.00',
  },
  {
    url: require('../assets/products/item11.png'),
    name: 'Nike Shoes',
    category: 'Shoes',
    price: '$120.00',
  },
  {
    url: require('../assets/products/item12.png'),
    name: 'Smart Watch',
    category: 'Watches',
    price: '$120.00',
  },
  {
    url: require('../assets/products/item13.png'),
    name: 'Wireless Headphone',
    category: 'Shoes',
    price: '$120.00',
  },
  {
    url: require('../assets/products/item14.png'),
    name: 'Jorden Shoes',
    category: 'Shoes',
    price: '$120.00',
  },
  {
    url: require('../assets/products/item15.png'),
    name: 'Mens T Shirt',
    category: "Men's",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item16.png'),
    name: 'Mens Jacket',
    category: "Men's",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item17.png'),
    name: 'Mens Jacket',
    category: "Men's",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item18.png'),
    name: 'Mens Jacket',
    category: "Men's",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item19.png'),
    name: 'Mens Jacket',
    category: "Men's",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item20.png'),
    name: 'Mens Jacket',
    category: "Men's",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item21.png'),
    name: 'Mens Jacket',
    category: "Men's",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item22.png'),
    name: 'Mens Jacket',
    category: "Men's",
    price: '$120.00',
  },
];

const sliderImages = [
  'https://img.freepik.com/free-psd/create-fashion-style-psd-presentation-template-small-business_53876-145331.jpg',
  'https://img.freepik.com/free-psd/fashion-online-shopping-template-psd-blog-banner_53876-123526.jpg',
  'https://img.freepik.com/free-psd/fashion-template-design_23-2151198058.jpg',
  'https://img.freepik.com/free-psd/fashion-business-presentation-template-psd_53876-129196.jpg',
  'https://img.freepik.com/free-psd/women-rsquo-s-earth-tone-fashion-template-psd-blog-banner_53876-145335.jpg',
  'https://img.freepik.com/free-psd/flat-design-teacher-s-day-template_23-2150267294.jpg',
];

const categories = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQSPw1y7xS9sruQyTYEOjSdRYLeiDMKip7g&s',
    name: 'All',
  },
  {
    url: 'https://img.drz.lazcdn.com/static/pk/p/0fc4c971f23271ba24a78727c43b5c3a.jpg_720x720q80.jpg_.webp',
    name: 'Shoes',
  },
  {
    url: 'https://img.drz.lazcdn.com/g/kf/S63b5c3bc2a9c4b00b482aa200e818bdfx.jpg_720x720q80.jpg_.webp',
    name: "Men's",
  },
  {
    url: 'https://img.drz.lazcdn.com/static/pk/p/cdb510fc63e62388a2d3401b93b0b067.jpg_720x720q80.jpg_.webp',
    name: 'Watches',
  },
  {
    url: 'https://img.drz.lazcdn.com/static/pk/p/a5f36a1785bb6ef899ed8bb9677df9c1.png_720x720q80.png_.webp',
    name: 'Electronics',
  },
  {
    url: 'https://img.drz.lazcdn.com/static/pk/p/619cb9366e65bcc2f7884e5c27b05cbc.jpg_720x720q80.jpg_.webp',
    name: 'Beauty',
  },
  {
    url: 'https://img.drz.lazcdn.com/static/pk/p/85e0c2c246e36099f11cddac1aead44f.jpg_720x720q80.jpg_.webp',
    name: "Women's",
  },
  {
    url: 'https://img.drz.lazcdn.com/g/kf/S3183a5a028be4539a9e391c3f902b625S.jpg_720x720q80.jpg_.webp',
    name: 'Jewelry',
  },
];

const CATEGORIES = [
  'T-shirts',
  'Jackets',
  'Shirts',
  'Hoodies',
  'Jumpers',
  'Trousers',
  'Jeans',
  'Joggers',
  'Vests',
  'Sweatshirts',
  'Socks',
  'Shorts',
];

const STYLES = ['Regular', 'Oversized', 'Slim', 'Relaxed', 'Skinny', 'Muscie'];
const BRANDS = [
  'Nike',
  'Adidas',
  'Yeezy',
  'New Balance',
  'Supreme',
  'Gap',
  'Balenciaga',
  'Off White',
  'Vans',
  'Carhartt',
  'Asics',
  'Burberry',
];
const COLORS = [
  'Blue',
  'Red',
  'Green',
  'Yellow',
  'Brown',
  'Pink',
  'Purple',
  'Black',
  'White',
  'Gray',
];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '36', '38', '40', '42', '44', '46'];
const notifications = [
  {
    id: 1,
    title: 'Password changed',
    body: 'Your password was successfully changed on 2024-08-20.',
    date: '2024-08-20',
  },
  {
    id: 2,
    title: 'Login from a new device',
    body: "Your account was accessed from a new device. If this wasn't you, please secure your account.",
    date: '2024-08-19',
  },
  {
    id: 3,
    title: 'Payment method updated',
    body: 'Your payment method was successfully updated.',
    date: '2024-08-18',
  },
  {
    id: 4,
    title: 'New coupon code available',
    body: 'Use code SAVE20 to get 20% off on your next purchase. Valid till 2024-08-31.',
    date: '2024-08-17',
  },
  {
    id: 5,
    title: 'Points earned from your purchase',
    body: 'You earned 150 points from your recent purchase. Keep shopping to earn more!',
    date: '2024-08-16',
  },
  {
    id: 6,
    title: 'Free shipping offer expiring soon',
    body: "Your free shipping offer expires on 2024-08-22. Don't miss out!",
    date: '2024-08-15',
  },
  {
    id: 7,
    title: 'Order #12345 has been shipped',
    body: 'Your order #12345 has been shipped and is on its way.',
    date: '2024-08-14',
  },
  {
    id: 8,
    title: 'Order #12345 has been delivered',
    body: 'Your order #12345 has been delivered. Thank you for shopping with us!',
    date: '2024-08-13',
  },
  {
    id: 9,
    title: 'Wishlist item back in stock',
    body: "An item in your wishlist is back in stock. Grab it before it's gone!",
    date: '2024-08-12',
  },
  {
    id: 10,
    title: 'Exclusive offer just for you!',
    body: 'Enjoy an exclusive offer on your next purchase. Check the app for details.',
    date: '2024-08-11',
  },
  {
    id: 11,
    title: 'Referral reward credited',
    body: 'Your referral reward has been credited to your account. Keep sharing!',
    date: '2024-08-10',
  },
  {
    id: 12,
    title: 'New product launch',
    body: 'We’ve just launched a new product. Take a look and be the first to own it!',
    date: '2024-08-09',
  },
  {
    id: 13,
    title: 'Order #12346 is ready for pickup',
    body: 'Your order #12346 is ready for pickup. Visit the store to collect.',
    date: '2024-08-08',
  },
  {
    id: 14,
    title: 'Profile information updated',
    body: 'Your profile information was successfully updated.',
    date: '2024-08-07',
  },
  {
    id: 15,
    title: 'Special discount on your favorite items',
    body: "Get a special discount on the items you've been eyeing. Limited time only!",
    date: '2024-08-06',
  },
  {
    id: 16,
    title: 'Payment failed',
    body: 'Your recent payment attempt failed. Please update your payment details to complete the purchase.',
    date: '2024-08-05',
  },
  {
    id: 17,
    title: 'Cart abandoned',
    body: 'You left items in your cart. They are still available, but not for long!',
    date: '2024-08-04',
  },
  {
    id: 18,
    title: 'Seasonal sale starts now!',
    body: 'Our seasonal sale has begun. Enjoy huge discounts on your favorite items!',
    date: '2024-08-03',
  },
  {
    id: 19,
    title: 'Order #12347 has been canceled',
    body: 'Your order #12347 has been canceled as per your request.',
    date: '2024-08-02',
  },
  {
    id: 20,
    title: 'Points expiring soon',
    body: 'Some of your reward points are expiring soon. Redeem them before they’re gone!',
    date: '2024-08-01',
  },
];

export {
  cartData,
  sliderImages,
  categories,
  CATEGORIES,
  STYLES,
  BRANDS,
  COLORS,
  SIZES,
  notifications,
};
