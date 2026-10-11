export type Product = {
  slug: string;
  name: string;
  category: "coffee" | "bakery";
  price: number;
  description: string;
  ingredients: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "latte",
    name: "Латте",
    category: "coffee",
    price: 250,
    description: "Нежный кофейный напиток с молочной пеной.",
    ingredients: ["Эспрессо", "Молоко", "Молочная пена"],
    image: "/images/latte.jpg",
  },
  {
    slug: "cappuccino",
    name: "Капучино",
    category: "coffee",
    price: 220,
    description: "Крепкий кофе с воздушной молочной пеной.",
    ingredients: ["Эспрессо", "Молоко", "Молочная пена"],
    image: "/images/cappuccino.jpg",
  },
  {
    slug: "raf",
    name: "Раф-кофе",
    category: "coffee",
    price: 290,
    description: "Сливочный кофе с мягким ванильным вкусом.",
    ingredients: ["Эспрессо", "Сливки", "Ванильный сахар"],
    image: "/images/raf.jpg",
  },
  {
    slug: "croissant",
    name: "Круассан",
    category: "bakery",
    price: 180,
    description: "Слоёная выпечка с золотистой корочкой.",
    ingredients: ["Пшеничная мука", "Сливочное масло", "Молоко", "Дрожжи"],
    image: "/images/croissant.jpg",
  },
  {
    slug: "cheesecake",
    name: "Чизкейк",
    category: "bakery",
    price: 320,
    description: "Нежный сливочный десерт с песочной основой.",
    ingredients: ["Сливочный сыр", "Сахар", "Яйца", "Песочная основа"],
    image: "/images/cheesecake.jpg",
  },
  {
    slug: "tart",
    name: "Ягодный тарт",
    category: "bakery",
    price: 280,
    description: "Хрустящая основа, нежный крем и ягоды.",
    ingredients: ["Песочное тесто", "Крем", "Сезонные ягоды"],
    image: "/images/tart.jpg",
  },
];