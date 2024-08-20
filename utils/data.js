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
    category: 'Smart Watches',
    price: '$55.00',
  },
  {
    url: require('../assets/products/item3.png'),
    name: 'Mens Sweter',
    category: "Men's Fashion",
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
    category: 'Smart Watches',
    price: '$120.00',
  },
  {
    url: require('../assets/products/item9.png'),
    name: 'Mens Shirt',
    category: "Men's Fashion",
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
    category: 'Smart Watches',
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
    category: "Men's Fashion",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item16.png'),
    name: 'Mens Jacket',
    category: "Men's Fashion",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item17.png'),
    name: 'Mens Jacket',
    category: "Men's Fashion",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item18.png'),
    name: 'Mens Jacket',
    category: "Men's Fashion",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item19.png'),
    name: 'Mens Jacket',
    category: "Men's Fashion",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item20.png'),
    name: 'Mens Jacket',
    category: "Men's Fashion",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item21.png'),
    name: 'Mens Jacket',
    category: "Men's Fashion",
    price: '$120.00',
  },
  {
    url: require('../assets/products/item22.png'),
    name: 'Mens Jacket',
    category: "Men's Fashion",
    price: '$120.00',
  },
];

const sliderImages = [
  'https://img.lazcdn.com/us/domino/c6680226-6323-494b-a735-d6bf988084f4_PK-1976-688.jpg_2200x2200q80.jpg_.webp',
  'https://img.lazcdn.com/us/domino/d1d14315-a030-4760-a8ff-41e96b338b35_PK-1976-688.jpg_2200x2200q80.jpg_.webp',
  'https://img.lazcdn.com/us/domino/db4a786c-c94c-453e-9fa5-02e1500a5fae_PK-1976-688.jpg_2200x2200q80.jpg_.webp',
  'https://img.lazcdn.com/us/domino/ef615108-196a-435c-bcf1-6e69fff2dbd3_PK-1976-688.jpg_2200x2200q80.jpg_.webp',
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
    name: "Men's Fashion",
  },
  {
    url: 'https://img.drz.lazcdn.com/static/pk/p/cdb510fc63e62388a2d3401b93b0b067.jpg_720x720q80.jpg_.webp',
    name: 'Smart Watches',
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
    name: "Women's Fashion",
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
export { cartData, sliderImages, categories, CATEGORIES, STYLES, BRANDS, COLORS, SIZES };
