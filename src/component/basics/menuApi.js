const Menu = [
  {
    id: 1,
    image: "./images/buttertoast.jpg",
    name: "Butter Toast",
    category: "Breakfast",
    price: "₹30",
    description: "Crunchy outside, buttery inside—your perfect morning bite!"
  },
  {
    id: 2,
    image: "./images/luchi.png",
    name: "Luchi with Aloo Dum (4 pieces)",
    category: "Breakfast",
    price: "₹30",
    description: "Fluffy luchi with spicy aloo dum—pure Bengali comfort on a plate!"
  },
  {
    id: 3,
    image: "./images/vegsandwich.jpg",
    name: "Veg Sandwich",
    category: "Breakfast",
    price: "₹25",
    description: "Fresh, crunchy, and packed with flavor—your perfect light bite!"
  },
  {
    id: 4,
    image: "./images/eggtoast.jpg",
    name: "Egg Toast",
    category: "Breakfast",
    price: "₹40",
    description: "Crispy toast with perfectly cooked egg—simple, filling, and delicious!"
  },
  {
    id: 5,
    image: "./images/chickensandwich.jpg",
    name: "Chicken Sandwich",
    category: "Breakfast",
    price: "₹50",
    description: "Loaded with flavor, grilled to perfection—your ultimate chicken craving solved!"
  },
  {
    id: 6,
    image: "./images/porota.png",
    name: "Porota with Ghugni (2 pieces)",
    category: "Breakfast",
    price: "₹30",
    description: "Crispy porota with spicy ghugni—street-style flavor you can’t resist!"
  },
  {
    id: 7,
    image: "./images/vegthali.png",
    name: "Veg Thali",
    category: "Lunch",
    price: "₹100",
    description: "A wholesome platter of flavors—simple, pure, and soul-satisfying!"
  },
  {
    id: 8,
    image: "./images/eggthali.png",
    name: "Egg Thali",
    category: "Lunch",
    price: "₹120",
    description: "Comfort food at its best—flavorful egg curry with a complete meal!"
  },
  {
    id: 9,
    image: "./images/fishthali.png",
    name: "Fish Thali",
    category: "Lunch",
    price: "₹140",
    description: "Authentic Bengali delight—fresh fish curry with a homely touch!"
  },
  {
    id: 10,
    image: "./images/chickenthali.png",
    name: "Chicken Thali",
    category: "Lunch",
    price: "₹180",
    description: "Rich, spicy chicken curry paired with a hearty meal—pure satisfaction!"
  },
  {
    id: 11,
    image: "./images/muttonthali.png",
    name: "Mutton Thali",
    category: "Lunch",
    price: "₹280",
    description: "Indulge in royal flavors—tender mutton curry for a grand feast!"
  },
  {
    id: 12,
    image: "./images/vegbiryani.png",
    name: "Aalu Biriyani",
    category: "Biryani",
    price: "₹100",
    description: "Fragrant rice with perfectly spiced aloo—simple yet irresistibly satisfying!"
  },
  {
    id: 13,
    image: "./images/chickenbiryani.png",
    name: "Chicken Biryani",
    category: "Biryani",
    price: "₹150",
    description: "Juicy chicken layered with aromatic rice—every bite is a celebration!"
  },
  {
    id: 14,
    image: "./images/muttonbiryani.png",
    name: "Mutton Biryani",
    category: "Biryani",
    price: "₹200",
    description: "Tender mutton slow-cooked with rich spices—fit for a royal feast!"
  },
  {
    id: 15,
    image: "./images/rosogolla.png",
    name: "Rosogolla(2 pcs)",
    category: "Dessert",
    price: "₹30",
    description: "Soft, spongy, and soaked in sweetness—an iconic Bengali delight!"
  },
  {
    id: 16,
    image: "./images/mistidoi.png",
    name: "Mishti Doi (250gm)",
    category: "Dessert",
    price: "₹50",
    description: "Warm, juicy dumplings dipped in sugar syrup—pure indulgence!"
  },
  {
    id: 17,
    image: "./images/gulabjamun.png",
    name: "Gulab Jamun (2 pcs)",
    category: "Dessert",
    price: "₹30",
    description: "Sweet, syrupy dessert with a rich, floral flavor."
  },
  {
    id: 18,
    image: "./images/sandesh.png",
    name: "Sandesh (2pcs)",
    category: "Dessert",
    price: "₹40",
    description: "Light, fresh, and delicately sweet—crafted to perfection!"
  },
  {
    id: 19,
    image: "./images/icevanilla.png",
    name: "Ice Cream (Vanilla)",
    category: "Dessert",
    price: "₹60",
    description: "Creamy, refreshing ice cream with a rich vanilla flavor."
  },
  {
    id: 20,
    image: "./images/chocobrownie.png",
    name: "Chocolate Brownie",
    category: "Dessert",
    price: "₹80",
    description: "Rich, fudgy brownie with a decadent chocolate flavor."
  },
  {
    id: 21,
    image: "./images/rabri.png",
    name: "Rabri",
    category: "Dessert",
    price: "₹80",
    description: "Rich, fudgy dessert with a creamy texture and sweet flavor."
  },
  {
    id: 22,
    image: "./images/chickenpokora.png",
    name: "Chicken Pakora (6 pcs)",
    category: "Snacks",
    price: "₹100",
    description: "Crispy, flavorful chicken pieces coated in a spiced batter."
  },
  {
    id: 23,
    image: "./images/frenchfries.png",
    name: "French Fries",
    category: "Snacks",
    price: "₹80",
    description: "Crispy, golden fries with a perfect seasoning."
  },
  {
    id: 24,
    image: "./images/eggdevil.png",
    name: "Egg Devil (Dim’er Devil) (2 pcs)",
    category: "Snacks",
    price: "₹50",
    description: "Spiced egg coated in crispy crumbs—Bengali classic delight!"
  },
  {
    id: 25,
    image: "./images/legpiece.png",
    name: "Chicken Leg Piece",
    category: "Snacks",
    price: "₹100",
    description: "Juicy, tender leg piece packed with bold spices—every bite is pure satisfaction!"
  },
  {
    id: 26,
    image: "./images/steammomos.png",
    name: "Chicken Steam Momos (6 pcs)",
    category: "Snacks",
    price: "₹100",
    description: "Juicy chicken filling wrapped in soft dumplings—served with spicy chutney!"
  },
  {
    id: 27,
    image: "./images/panfriedmomo.png",
    name: "Chicken Pan Fried Momos (6 pcs)",
    category: "Snacks",
    price: "₹120",
    description: "Crispy outside, juicy inside—double the flavor, double the fun!"
  },
  {
    id: 28,
    image: "./images/springrolls.png",
    name: "Spring Rolls (3 pcs)",
    category: "Snacks",
    price: "₹60",
    description: "Crispy rolls filled with veggies/chicken—light and delicious!"
  },
   {
    id: 29,
    image: "./images/paneertikka.png",
    name: "Paneer Tikka (4 pcs)",
    category: "Snacks",
    price: "₹80",
    description: "Smoky, spicy, and grilled to perfection—paneer at its best!"
  },
  {
    id: 30,
    image: "./images/friedrice.png",
    name: "Fried Rice + Chilli Chicken (4 pcs) Combo",
    category: "Combo",
    price: "₹200",
    description: "Classic desi-Chinese combo—spicy, saucy, and super satisfying!"
  },
  {
    id: 31,
    image: "./images/polao.png",
    name: "Polao + Chicken Kasha (2 pcs) Combo",
    category: "Combo",
    price: "₹150",
    description: "A royal Bengali pairing—sweet aromatic polao with spicy, rich chicken kasha!"
  },
  {
    id: 32,
    image: "./images/vegfriedrice.png",
    name: "Veg Fried Rice + Chilli Paneer (4 pcs) Combo",
    category: "Combo",
    price: "₹200",
    description: "Desi-Chinese delight—spicy paneer with flavorful fried rice!"
  },
  {
    id: 33,
    image: "./images/rollmeal.png",
    name: "Chicken Roll Meal Combo",
    category: "Combo",
    price: "₹180",
    description: "Chicken Roll + Fries + Cold Drink\nThe ultimate combo—crispy, juicy, and refreshing in one perfect meal!"
  },
  {
    id: 34,
    image: "./images/pizzaburger.png",
    name: "Pizza + Burger + Fries Combo",
    category: "Combo",
    price: "₹200",
    description: "Triple the fun, double the taste—perfect for cheat day cravings!”"
  },
   {
    id: 35,
    image: "./images/coldcoffee.png",
    name: "Cold Coffee",
    category: "Drinks",
    price: "₹80",
    description: "Chilled, creamy, and refreshing—perfect for hot days!"
  },
  {
    id: 36,
    image: "./images/mangoshake.png",
    name: "Mango Shake",
    category: "Drinks",
    price: "₹50",
    description: "Creamy, refreshing mango shake—perfect for a sweet treat!"
  },
  {
    id: 37,
    image: "./images/chocolateshake.png",
    name: "Chocolate Shake",
    category: "Drinks",
    price: "₹100",
    description: "Rich, creamy, and indulgent—perfect for chocolate lovers!"
  },
  {
    id: 38,
    image: "./images/limeshoda.png",
    name: "Fresh Lime Soda",
    category: "Drinks",
    price: "₹40",
    description: "Zesty, refreshing lime soda—perfect for a zingy treat!"
  },
  {
    id: 39,
    image: "./images/lassi.png",
    name: "Lassi (Sweet/Salted)",
    category: "Drinks",
    price: "₹60",
    description: "Creamy, refreshing lassi—perfect for a cool treat!"
  },
  {
    id: 40,
    image: "./images/faluda.png",
    name: "Falooda Drink",
    category: "Drinks",
    price: "₹120",
    description: "Creamy, refreshing falooda—perfect for a cool treat!"
  },
   {
    id: 41,
    image: "./images/softdrinks.png",
    name: "Soft Drinks (Coke/Sprite/Fanta)",
    category: "Drinks",
    price: "₹40",
    description: "Zesty, refreshing soft drinks—perfect for a zingy treat!"
  }
];

export default Menu;