import bien from '../assets/images/bien.jpg';
import nui from '../assets/images/nui.jpg';
import amthuc from '../assets/images/amthuc.jpg';
import vanhoa from '../assets/images/vanhoa.jpg';
import bana1 from '../assets/images/bana1.jpg';
import bandao from '../assets/images/bandao.jpg';

 const categoriesData = [
  { id:0,name: "Tất cả",img:bana1 },
  { id:1,name: "Biển",img:bien },
  { id:2,name: "Văn hóa",img:vanhoa },
  { id:3,name: "Ẩm thực",img:amthuc },
  { id:4,name: "Giải trí", img: bana1 },
];

 const districtsData = [
  {id:1,name:"Tất cả quận"},
  {id:2,name:"Hải Châu"},
  {id:3,name:"Sơn Trà"},
  {id:4,name:"Thanh Khê"},
  {id:5,name:"Ngũ Hành Sơn"},
  {id:6,name:"Liên Chiểu"},
  {id:7,name:"Hòa Vang"},
];

 const placesData = [
  {
    id: 1,
    name: "Bà Nà Hills",
    img: bana1,
    des: "Khu du lịch trên đỉnh núi cao với khí hậu 4 mùa trong 1 ngày, nổi tiếng với Cầu Vàng huyền thoại và Làng Pháp.",
    stars: 4.8,
    price: 900000,
    priceDisplay: "900.000 đ",
    category: "Giải trí",
    address: "Hòa Vang",
  },
  {
    id: 2,
    name: "Cầu Vàng (Golden Bridge)",
    img: bandao,
    des: "Biểu tượng kiến trúc độc đáo với đôi bàn tay khổng lồ nâng đỡ cây cầu nổi tiếng thế giới.",
    stars: 4.9,
    price: 0,
    priceDisplay: "Miễn phí",
    category: "Giải trí",
    address: "Hòa Vang",
  },
  {
    id: 3,
    name: "Biển Mỹ Khê",
    img: bien,
    des: "Một trong những bãi biển quyến rũ nhất hành tinh với bờ cát trắng mịn và làn nước trong xanh.",
    stars: 4.7,
    price: 0,
    priceDisplay: "Miễn phí",
    category: "Biển",
    address: "Sơn Trà",
  },
  {
    id: 4,
    name: "Bán đảo Sơn Trà",
    img: nui,
    des: "Lá phổi xanh của thành phố Đà Nẵng với hệ sinh thái phong phú và cảnh quan núi rừng hùng vĩ sát biển.",
    stars: 4.6,
    price: 0,
    priceDisplay: "Miễn phí",
    category: "Biển",
    address: "Sơn Trà",
  },
  {
    id: 5,
    name: "Chợ Đêm Sơn Trà & Ẩm Thực Đà Thành",
    img: amthuc,
    des: "Thiên đường ẩm thực đường phố sầm uất với các món đặc sản hải sản tươi sống, mì Quảng, bánh xèo.",
    stars: 4.5,
    price: 150000,
    priceDisplay: "Từ 150.000 đ",
    category: "Ẩm thực",
    address: "Sơn Trà",
  },
  {
    id: 6,
    name: "Bảo tàng Điêu khắc Chăm",
    img: vanhoa,
    des: "Nơi lưu giữ bộ sưu tập nghệ thuật điêu khắc Champa quy mô và độc đáo nhất trên thế giới.",
    stars: 4.4,
    price: 60000,
    priceDisplay: "60.000 đ",
    category: "Văn hóa",
    address: "Hải Châu",
  },
  {
    id: 7,
    name: "Danh thắng Ngũ Hành Sơn",
    img: nui,
    des: "Quần thể 5 ngọn núi đá vôi hội tụ vẻ đẹp tâm linh với nhiều hang động huyền bí và chùa cổ.",
    stars: 4.6,
    price: 40000,
    priceDisplay: "40.000 đ",
    category: "Văn hóa",
    address: "Ngũ Hành Sơn",
  },
  {
    id: 8,
    name: "Cầu Rồng Phun Lửa & Phun Nước",
    img: bandao,
    des: "Cây cầu mang hình dáng con rồng thép vươn ra biển Đông, phun lửa và nước vào cuối tuần.",
    stars: 4.8,
    price: 0,
    priceDisplay: "Miễn phí",
    category: "Giải trí",
    address: "Hải Châu",
  },
];
export {categoriesData,placesData,districtsData};
