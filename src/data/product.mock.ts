export const productMock = {
  id: "1",
  category: "T-Shirt",
  name: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue",
  price: 300,
  originalPrice: 360,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  types: ["Cotton", "Polyester", "Blend"],
  sizes: ["S", "M", "L", "XL", "2XI"],
  colors: [
    { name: "Blue", hex: "#3B82F6" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Grey", hex: "#9CA3AF" },
    { name: "Black", hex: "#1F2937" },
    { name: "Dark Blue", hex: "#1E3A8A" },
  ],
  images: [
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
  ],
};

export const ratingMock = {
  average: 4.5,
  totalReviews: 3000,
  distribution: [
    { stars: 5, percentage: 57 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 15 },
    { stars: 2, percentage: 5 },
    { stars: 1, percentage: 3 },
  ],
};

export const reviewsMock = [
  {
    id: "1",
    author: "Alex Dezwan",
    rating: 5,
    date: "4 months ago",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
  },
  {
    id: "2",
    author: "Alex Dezwan",
    rating: 5,
    date: "4 months ago",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
  },
  {
    id: "3",
    author: "Alex Dezwan",
    rating: 5,
    date: "4 months ago",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
  },
];

export const similarProductsMock = [
  {
    id: "2",
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello...",
    category: "Dresses",
    price: 900,
    originalPrice: 1300,
    discount: 20,
    rating: 4.5,
    reviewCount: 2510,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "J.VER Women's Casual Shirts Long Sleeve Pattern",
    category: "Shirts",
    price: 450,
    originalPrice: 550,
    discount: null,
    rating: 4.2,
    reviewCount: 890,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "J.VER Men's Formal Shirt Solid Stretch",
    category: "Shirts",
    price: 380,
    originalPrice: 420,
    discount: 10,
    rating: 4.8,
    reviewCount: 1520,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "J.VER Women's Blouse Floral Print",
    category: "Blouses",
    price: 520,
    originalPrice: 650,
    discount: 20,
    rating: 4.6,
    reviewCount: 2100,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
  },
];
