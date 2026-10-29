export const fmt = (n) => "$" + n.toLocaleString();

export const PAL = {
  
  sea: ["#efe3cf", "#c4d3da", "#9bb1bd", "#6f8b9b", "#4b6676"],
  mountain: ["#ecdcc6", "#d9cdb6", "#aba68f", "#7f8c7a", "#56685b"],
  pool: ["#dde6e9", "#f4efe6", "#c9b79c", "#86a8b5", "#5d8493"],
  room: ["#ece4d6", "#d9cdb8", "#fbf8f2", "#b59b72", "#8b7a60"],
  spa: ["#c8a577", "#a67f50", "#8b6a40", "#e8dcc6", "#6e5233"],
  gym: ["#e6e6e3", "#cfd1cf", "#3b3f42", "#8a8f93", "#b59b72"],
  food: ["#efe8dc", "#e1d6c3", "#fffdf8", "#c98b5a", "#6f8f5b"],
  lobby: ["#e9e3d6", "#cfc3ab", "#b59b72", "#8b7a60", "#f7f3ea"],
};

for (let i = 1; i <= 6; i++) PAL[`room${i}`] = PAL.room;
export const ROOMS = [
  { id: "std", n: "Standard Room", k: "room1", p: 95, t: "Standard", sz: 28, g: 2, d: "Calm, compact comfort with city views, rainfall shower and fast Wi-Fi.", f: ["Queen bed", "City view", "Work desk"] },
  { id: "dlx", n: "Deluxe Room", k: "room2", p: 140, t: "Deluxe", sz: 36, g: 3, d: "A generous room with a private balcony overlooking the lake.", f: ["King bed", "Balcony", "Mini bar"] },
  { id: "fam", n: "Family Suite", k: "room3", p: 210, t: "Suite", sz: 62, g: 5, d: "Two bedrooms, a lounge and a kids’ corner, designed for families.", f: ["2 bedrooms", "Lounge", "Kids’ corner"] },
  { id: "jr", n: "Junior Suite", k: "room4", p: 260, t: "Suite", sz: 48, g: 3, d: "Separate sitting area, soaking tub and evening canapés.", f: ["King bed", "Soaking tub", "Lounge access"] },
  { id: "ocn", n: "Lake Villa", k: "room5", p: 380, t: "Villa", sz: 85, g: 4, d: "Private plunge pool, garden deck and dedicated butler service.", f: ["Plunge pool", "Butler", "Garden deck"] },
  { id: "pres", n: "Presidential Suite", k: "room6", p: 650, t: "Villa", sz: 140, g: 6, d: "A panoramic penthouse with private steam room, dining room and chauffeur.", f: ["Private steam", "Dining room", "Chauffeur"] },
];

PAL.sauna = PAL.spa;
PAL.steam = PAL.spa;
PAL.meditation = PAL.sea;
export const AMENITIES = [
  ["sauna", "Sauna", "Finnish cedar sauna at 80–90°C. Open daily 6 AM – 10 PM, towels and herbal tea included."],
  ["steam", "Steam room", "Eucalyptus-infused steam for deep relaxation, available alongside the sauna."],
  ["gym", "Fitness gym", "Technogym equipment, free weights and personal trainers. Open 24 hours."],
  ["pool", "Infinity pool", "A heated rooftop pool with a swim-up bar and sunset views across the lake."],
  ["spa", "Spa & treatments", "Ayurvedic massage, aromatherapy, facials and couples’ treatment rooms."],
  ["meditation", "Yoga & meditation", "Sunrise classes on the terrace led by experienced teachers."],
];

for (let i = 1; i <= 6; i++) PAL[`food${i}`] = PAL.food;
export const MENU = {
  Indian: [["Butter Chicken", "Charcoal-grilled chicken, tomato-cream gravy", 16, 0], ["Paneer Tikka Masala", "Smoky cottage cheese, peppers, spiced gravy", 14, 1], ["Lamb Rogan Josh", "Kashmiri slow-cooked lamb curry", 19, 0], ["Dal Makhani", "Overnight black lentils, butter and cream", 11, 1]],
  Chinese: [["Kung Pao Chicken", "Wok-tossed chicken, peanuts, dried chilli", 15, 0], ["Veg Hakka Noodles", "Stir-fried noodles with crunchy vegetables", 11, 1], ["Sweet & Sour Prawns", "Crispy prawns, pineapple sauce", 20, 0], ["Mapo Tofu", "Silken tofu in Sichuan pepper sauce", 12, 1]],
  Italian: [["Margherita Pizza", "San Marzano tomato, buffalo mozzarella, basil", 14, 1], ["Spaghetti Carbonara", "Guanciale, egg yolk, pecorino", 16, 0], ["Wild Mushroom Risotto", "Arborio rice, porcini, parmesan", 17, 1], ["Lasagna al Forno", "Layered beef ragù and béchamel", 18, 0]],
  Continental: [["Grilled Salmon", "Lemon butter, asparagus, baby potatoes", 26, 0], ["Beef Tenderloin", "200 g, peppercorn jus, truffle mash", 32, 0], ["Caesar Salad", "Romaine, parmesan, sourdough croutons", 12, 1], ["Club Sandwich", "Triple-decker with fries", 13, 0]],
  "Thai & Asian": [["Pad Thai", "Rice noodles, tamarind, peanuts, lime", 14, 0], ["Green Curry", "Coconut curry, Thai basil, vegetables", 15, 1], ["Tom Yum Soup", "Hot-and-sour lemongrass broth with prawns", 13, 0], ["Salmon Sushi Platter", "12 pieces, wasabi, pickled ginger", 24, 0]],
  "Desserts & Drinks": [["Gulab Jamun", "Warm milk dumplings in rose syrup", 7, 1], ["Tiramisu", "Mascarpone, espresso, cocoa", 9, 1], ["Molten Chocolate Cake", "Vanilla ice cream, berry coulis", 10, 1], ["Tropical Mocktail", "Passion fruit, mint, lime, soda", 8, 1]],
};

export const REVIEWS = [
  ["Sarah M.", "London", "The lake villa was extraordinary. The sauna and steam room after a long flight were exactly what we needed."],
  ["Rajesh K.", "Mumbai", "The butter chicken rivals home cooking and the Italian menu surprised us. The children loved the pool."],
  ["Mei L.", "Singapore", "Impeccable service, spotless rooms and a beautiful rooftop. We will return."],
];

export const ADDONS = [
  { id: "bf", n: "Daily breakfast", p: 25, perNight: true, label: "Daily breakfast · $25 / night" },
  { id: "tr", n: "Airport transfer", p: 60, label: "Airport transfer · $60" },
  { id: "sp", n: "Spa day pass", p: 90, label: "Spa day pass · $90" },
  { id: "dn", n: "Candlelight dinner", p: 45, label: "Candlelight dinner · $45" },
];
