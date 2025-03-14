const products = [
  {
    url: require('../assets/products/banhbao.jpg'),
    name: 'Bánh bao',
    category: 'Đồ ăn',
    price: 'đ 70.000',
  },
  {
    url: require('../assets/products/dauhu.jpg'),
    name: 'Đậu hủ',
    category: 'Đồ ăn',
    price: 'đ 35.000',
  },
  {
    url: require('../assets/products/cahop.jpg'),
    name: 'Cá hộp',
    category: 'Đồ ăn',
    price: 'đ 65.000',
  },
  {
    url: require('../assets/products/lapxuong.jpg'),
    name: 'Lạp xưởng',
    category: 'Đồ ăn',
    price: 'đ 59.000',
  },
  {
    url: require('../assets/products/rongbien.jpg'),
    name: 'Rong biển',
    category: 'Đồ ăn',
    price: 'đ 155.000',
  },
  {
    url: require('../assets/products/botngot.jpg'),
    name: 'Bột ngọt',
    category: 'Gia vị',
    price: 'đ 53.000',
  },
  {
    url: require('../assets/products/duong.jpg'),
    name: 'Đường',
    category: 'Gia vị',
    price: 'đ 15.000',
  },
  {
    url: require('../assets/products/muoi.jpg'),
    name: 'Muối',
    category: 'Gia vị',
    price: 'đ 25.000',
  },
  {
    url: require('../assets/products/nuocmam.jpg'),
    name: 'Nước mắm',
    category: 'Gia vị',
    price: 'đ 35.000',
  },
  {
    url: require('../assets/products/sate.jpg'),
    name: 'Sa tế',
    category: 'Gia vị',
    price: 'đ 23.000',
  },
  {
    url: require('../assets/products/item16.png'),
    name: 'Áo thun',
    category: "Quần áo",
    price: 'đ 350.000',
  },
  {
    url: require('../assets/products/item17.png'),
    name: 'Áo len',
    category: 'Quần áo',
    price: 'đ 455.000',
  },

  {
    url: require('../assets/products/item18.png'),
    name: 'Áo khoác da',
    category: 'Quần áo',
    price: 'đ 555.000',
  },
  {
    url: require('../assets/products/item19.png'),
    name: 'Áo khoác vải',
    category: 'Quần áo',
    price: 'đ 655.000',
  },
  {
    url: require('../assets/products/item20.png'),
    name: 'Áo jean',
    category: 'Quần áo',
    price: 'đ 855.000',
  },
];

const sliderImages = [
  require('../assets/products/banhbao.jpg'),
  require('../assets/products/nuocmam.jpg'),
  require('../assets/products/banhbao.jpg'),
  require('../assets/products/nuocmam.jpg'),
];

const categories = [
  {
    image: require('../assets/categories/all.png'),
    name: 'Tất cả',
  },
  {
    image: require('../assets/categories/cate_doan.jpg'),
    name: 'Đồ ăn',
  },
  {
    image: require('../assets/categories/cate_giavi.jpg'),
    name: "Gia vị",
  },
  {
    image: require('../assets/categories/cate_quanao.jpg'),
    name: 'Quần áo',
  }
  // {
  //   image: require('../assets/categories/headphone.png'),
  //   name: 'Electronics',
  // },
  // {
  //   image: require('../assets/categories/beauty.png'),
  //   name: 'Beauty',
  // },
  // {
  //   image: require('../assets/categories/women.png'),
  //   name: "Women's",
  // },
  // {
  //   image: require('../assets/categories/jewelry.png'),
  //   name: 'Jewelry',
  // },
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
    title: "Mật khẩu đã được thay đổi",
    body: "Mật khẩu của bạn đã được thay đổi thành công vào ngày 20-08-2024.",
    date: "2024-08-20",
    isRead: true,
  },
  {
    id: 2,
    title: "Đăng nhập từ thiết bị mới",
    body: "Tài khoản của bạn đã được truy cập từ một thiết bị mới. Nếu không phải bạn, vui lòng bảo vệ tài khoản của mình.",
    date: "2024-08-19",
    isRead: true,
  },
  {
    id: 3,
    title: "Phương thức thanh toán đã được cập nhật",
    body: "Phương thức thanh toán của bạn đã được cập nhật thành công.",
    date: "2024-08-18",
    isRead: true,
  },
  {
    id: 4,
    title: "Mã giảm giá mới có sẵn",
    body: "Sử dụng mã SAVE20 để được giảm 20% cho đơn hàng tiếp theo. Có hiệu lực đến 31-08-2024.",
    date: "2024-08-17",
    isRead: true,
  },
  {
    id: 5,
    title: "Điểm thưởng từ đơn hàng của bạn",
    body: "Bạn đã nhận được 150 điểm từ đơn hàng gần đây. Tiếp tục mua sắm để tích lũy thêm!",
    date: "2024-08-16",
    isRead: false,
  },
  {
    id: 6,
    title: "Ưu đãi miễn phí vận chuyển sắp hết hạn",
    body: "Ưu đãi miễn phí vận chuyển của bạn sẽ hết hạn vào ngày 22-08-2024. Đừng bỏ lỡ!",
    date: "2024-08-15",
    isRead: false,
  },
  {
    id: 7,
    title: "Đơn hàng #12345 đã được gửi đi",
    body: "Đơn hàng #12345 của bạn đã được gửi đi và đang trên đường vận chuyển.",
    date: "2024-08-14",
    isRead: false,
  },
  {
    id: 8,
    title: "Đơn hàng #12345 đã được giao",
    body: "Đơn hàng #12345 của bạn đã được giao thành công. Cảm ơn bạn đã mua sắm với chúng tôi!",
    date: "2024-08-13",
    isRead: false,
  },
  {
    id: 9,
    title: "Sản phẩm trong danh sách yêu thích có hàng trở lại",
    body: "Một sản phẩm trong danh sách yêu thích của bạn đã có hàng trở lại. Mua ngay trước khi hết!",
    date: "2024-08-12",
    isRead: false,
  },
  {
    id: 10,
    title: "Ưu đãi độc quyền dành riêng cho bạn!",
    body: "Tận hưởng ưu đãi đặc biệt cho đơn hàng tiếp theo của bạn. Kiểm tra ứng dụng để biết thêm chi tiết.",
    date: "2024-08-11",
    isRead: false,
  },
  {
    id: 11,
    title: "Thưởng giới thiệu đã được ghi nhận",
    body: "Phần thưởng giới thiệu của bạn đã được ghi nhận vào tài khoản. Tiếp tục chia sẻ để nhận thêm!",
    date: "2024-08-10",
    isRead: false,
  },
  {
    id: 12,
    title: "Ra mắt sản phẩm mới",
    body: "Chúng tôi vừa ra mắt một sản phẩm mới. Xem ngay và trở thành người sở hữu đầu tiên!",
    date: "2024-08-09",
    isRead: false,
  },
  {
    id: 13,
    title: "Đơn hàng #12346 sẵn sàng để nhận",
    body: "Đơn hàng #12346 của bạn đã sẵn sàng để nhận. Vui lòng đến cửa hàng để lấy hàng.",
    date: "2024-08-08",
    isRead: false,
  },
  {
    id: 14,
    title: "Thông tin hồ sơ đã được cập nhật",
    body: "Thông tin hồ sơ của bạn đã được cập nhật thành công.",
    date: "2024-08-07",
    isRead: false,
  },
  {
    id: 15,
    title: "Giảm giá đặc biệt cho sản phẩm yêu thích của bạn",
    body: "Nhận ưu đãi đặc biệt cho các sản phẩm bạn đang quan tâm. Chỉ có trong thời gian giới hạn!",
    date: "2024-08-06",
    isRead: false,
  },
  {
    id: 16,
    title: "Thanh toán thất bại",
    body: "Giao dịch thanh toán gần đây của bạn không thành công. Vui lòng cập nhật thông tin thanh toán để hoàn tất đơn hàng.",
    date: "2024-08-05",
    isRead: false,
  },
  {
    id: 17,
    title: "Giỏ hàng bị bỏ quên",
    body: "Bạn đã để lại một số sản phẩm trong giỏ hàng. Chúng vẫn còn sẵn có, nhưng không lâu đâu!",
    date: "2024-08-04",
    isRead: false,
  },
  {
    id: 18,
    title: "Siêu giảm giá mùa mới bắt đầu!",
    body: "Chương trình giảm giá theo mùa của chúng tôi đã bắt đầu. Mua ngay với ưu đãi hấp dẫn!",
    date: "2024-08-03",
    isRead: false,
  },
  {
    id: 19,
    title: "Đơn hàng #12347 đã bị hủy",
    body: "Đơn hàng #12347 của bạn đã bị hủy theo yêu cầu.",
    date: "2024-08-02",
    isRead: false,
  },
  {
    id: 20,
    title: "Điểm thưởng sắp hết hạn",
    body: "Một số điểm thưởng của bạn sắp hết hạn. Hãy đổi ngay trước khi mất!",
    date: "2024-08-01",
    isRead: false,
  },
];


export {
  products,
  sliderImages,
  categories,
  CATEGORIES,
  STYLES,
  BRANDS,
  COLORS,
  SIZES,
  notifications,
};
