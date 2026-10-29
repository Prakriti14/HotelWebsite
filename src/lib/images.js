const set = (kind, n) =>
  Array.from({ length: n }, (_, i) => `/images/${kind}-${i + 1}.jpg`);

export const IMAGES = {
  room1: ["/room1.webp"],
  room2: ["/room2.webp"],
  room3: ["/room3.webp"],
  room4: ["/room4.webp"],
  room5: ["/room6.webp"],
  room6: ["/room5.webp"],
  food1: ["/indian.webp"],
  food2: ["/chinese.webp"],
  food3: ["/continental.webp"],
  food4: ["/asian.webp"],
  food5: ["/dessert.webp"],
  food6: ["/italian.webp"],
  pool: ["/swimmingpool.webp"],
  spa: ["/spa.webp"],
  gym: ["/gym.webp"],
  lobby1: ["/lobby1.webp"],
  lobby2: ["/lobby2.webp"],
  lobby3: ["/lobby3.webp"],
  lobby4: ["/lobby4.webp"],
  lobby5: ["/lobby5.webp"],
  balcony: ["/balcony.webp"],
  bar: ["/bar.webp"],
  corridors: ["/corridors.webp"],
  dining: ["/dining.webp"],
  lakeview: ["/lakeview.webp"],
  parkarea: ["/parkarea.webp"],
  sauna: ["/sauna.webp"],
  steam: ["/steam.webp"],
  meditation:["/meditation.webp"]
};

export default IMAGES;