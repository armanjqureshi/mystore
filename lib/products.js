import { sanityClient } from "@/lib/sanity";

export const CATEGORIES = [
  { slug: "crockery", label: "Crockery" },
  { slug: "gifts", label: "Gifts" },
  { slug: "toys", label: "Toys" },
  { slug: "home", label: "Home Items" },
];

// Sample catalog so the site is fully browsable before Sanity is connected.
// Replace with your real products once you're editing in Sanity Studio —
// this file is only the fallback.
// Your real catalog, generated from your uploaded product photos.
// Prices are placeholders (0) — update each before going live.
const SAMPLE_PRODUCTS = [
  {
    id: "p1",
    name: "Ribbed Pink Ceramic Mug",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/pink-ribbed-ceramic-mug.jpg"],
    description: "Ribbed pink ceramic mug with matching handle",
    inStock: true,
    tags: ["mug"],
    material: "Ceramic",
  },
  {
    id: "p2",
    name: "Strawberry Print Storage Bowl Set (3pc)",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/strawberry-print-ceramic-storage-bowls-set-of-3.jpg"],
    description: "Set of 3 nesting storage bowls with lids, strawberry and floral print, \"Always Fresh and Sweet\"",
    inStock: true,
    tags: ["storage", "kitchen"],
    material: "Plastic",
  },
  {
    id: "p3",
    name: "Embossed White Bowl Set with Pink Lids (3pc)",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/pink-embossed-ceramic-storage-bowls-set-of-3.jpg"],
    description: "Set of 3 embossed diamond-pattern white storage bowls with pink lids",
    inStock: true,
    tags: ["storage", "kitchen"],
    material: "Ceramic",
  },
  {
    id: "p4",
    name: "Floral Glass Beverage Dispenser with Wooden Stand",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/floral-glass-beverage-dispenser-with-wooden-stand-01.jpg", "/products/floral-glass-beverage-dispenser-with-wooden-stand-02.jpg"],
    description: "Glass drink dispenser with floral print, gold tap, and wooden stand",
    inStock: true,
    tags: ["dispenser", "festive"],
    material: "Glass & Wood",
  },
  {
    id: "p5",
    name: "3-Tier Glass Serving Stand",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/three-tier-glass-dessert-stand.jpg"],
    description: "3-tier textured glass serving stand with gold handle",
    inStock: true,
    tags: ["serveware", "party"],
    material: "Glass",
  },
  {
    id: "p6",
    name: "Ceramic Teapot with Lotus Print",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/lotus-print-ceramic-teapot.jpg"],
    description: "White ceramic teapot with lotus flower design and cane-wrapped handle",
    inStock: true,
    tags: ["teapot"],
    material: "Ceramic",
  },
  {
    id: "p7",
    name: "Twin Jar Dry Food Dispenser with Wooden Stand",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/triple-jar-glass-beverage-dispenser-with-wooden-stand.jpg"],
    description: "Rotating dual glass jar dispenser with gold taps on a wooden stand",
    inStock: true,
    tags: ["dispenser", "kitchen"],
    material: "Glass & Wood",
  },
  {
    id: "p8",
    name: "Crystal-Cut Glass Flower Vase (Slender)",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/crystal-glass-flower-vase-01.jpg", "/products/crystal-glass-flower-vase-02.jpg"],
    description: "Slender crystal-cut glass flower vase",
    inStock: true,
    tags: ["vase", "decor"],
    material: "Glass",
  },
  {
    id: "p9",
    name: "Glass Teapot with Wooden Knob",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/clear-glass-teapot-with-wooden-lid.jpg"],
    description: "Clear glass teapot with a wooden lid knob",
    inStock: true,
    tags: ["teapot"],
    material: "Glass",
  },
  {
    id: "p10",
    name: "Crystal-Cut Glass Vase (Tumbler Style)",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/crystal-cut-glass-vase-wide.jpg"],
    description: "Wide crystal-cut glass vase, tumbler style",
    inStock: true,
    tags: ["vase", "decor"],
    material: "Glass",
  },
  {
    id: "p11",
    name: "Square Ceramic Bowls with Wooden Handles (Pair)",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/pink-teal-square-serving-bowls-with-wooden-handles.jpg"],
    description: "Pair of square ceramic serving bowls (pink and dark green) with wooden handles",
    inStock: true,
    tags: ["serveware"],
    material: "Ceramic & Wood",
  },
  {
    id: "p12",
    name: "Glass Water Jug (Deli Glass)",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/glass-water-jug-deli-glass.jpg"],
    description: "Faceted glass water jug with handle and lid",
    inStock: true,
    tags: ["jug", "drinkware"],
    material: "Glass",
  },
  {
    id: "p13",
    name: "Black FASHION Lidded Mug",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/black-gold-fashion-ceramic-mug-with-lid-01.jpg", "/products/black-gold-fashion-ceramic-mug-with-lid-02.jpg"],
    description: "Black ceramic lidded mug with gold rim, \"FASHION\" text",
    inStock: true,
    tags: ["mug"],
    material: "Ceramic",
  },
  {
    id: "p14",
    name: "Glass Water Jug (Delisoga)",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/glass-water-jug-delisoga.jpg"],
    description: "Clear glass water jug with handle and lid, Delisoga brand",
    inStock: true,
    tags: ["jug", "drinkware"],
    material: "Glass",
  },
  {
    id: "p15",
    name: "Black Marble Nice Time Lidded Mug",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/black-marble-nice-time-mug.jpg"],
    description: "Black marble-pattern lidded mug, \"Nice time have a nice day\"",
    inStock: true,
    tags: ["mug"],
    material: "Ceramic",
  },
  {
    id: "p16",
    name: "Maroon Love at First Sight Lidded Mug",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/maroon-love-at-first-sight-ceramic-mug-with-spoon.jpg"],
    description: "Maroon faceted lidded mug with gold text \"Love at First Sight\"",
    inStock: true,
    tags: ["mug"],
    material: "Ceramic",
  },
  {
    id: "p17",
    name: "Ribbed Glass Jug and Tumbler Set (5pc)",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/ribbed-glass-jug-and-tumbler-set.jpg"],
    description: "Ribbed glass water jug with 4 matching tumblers",
    inStock: true,
    tags: ["jug", "glasses", "set"],
    material: "Glass",
  },
  {
    id: "p18",
    name: "Black Stainless Steel Water Bottle",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/black-stainless-steel-water-bottle-with-strap.jpg"],
    description: "Vacuum-insulated stainless steel water bottle, matte black",
    inStock: true,
    tags: ["bottle", "insulated"],
    material: "Steel",
  },
  {
    id: "p19",
    name: "Glass Snack Platter with Dip Bowl",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/clear-bubble-glass-serving-dish.jpg"],
    description: "Sectioned glass snack platter with a central dip bowl",
    inStock: true,
    tags: ["serveware", "party"],
    material: "Glass",
  },
  {
    id: "p20",
    name: "Glass Casserole with Lid",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/stainless-steel-casserole-with-lid.jpg"],
    description: "Ribbed glass casserole/serving bowl with lid and side handles",
    inStock: true,
    tags: ["serveware"],
    material: "Glass",
  },
  {
    id: "p21",
    name: "Glass 3-Section Snack Bowl",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/glass-3-section-snack-bowl.jpg"],
    description: "Glass sectioned snack/nut serving bowl, scalloped edge",
    inStock: true,
    tags: ["serveware", "party"],
    material: "Glass",
  },
  {
    id: "p22",
    name: "This Is My Drink Freezer Cup",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/this-is-my-drink-sipper-cup-blue.jpg"],
    description: "Blue novelty freezer cup with straw lid, \"This is my drink\"",
    inStock: true,
    tags: ["cup", "novelty"],
    material: "Plastic",
  },
  {
    id: "p23",
    name: "Look in the Mirror Shaker Bottle",
    category: "gifts",
    price: 0, // TODO: set real price
    images: ["/products/motivational-quote-sipper-bottle-green.jpg"],
    description: "Motivational quote gym shaker bottle, green and black",
    inStock: true,
    tags: ["bottle", "gym", "novelty"],
    material: "Plastic",
  },
  {
    id: "p24",
    name: "Black Steel Flask Thermos",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/black-slim-insulated-water-bottle.jpg"],
    description: "Sleek black stainless steel flask/thermos bottle",
    inStock: true,
    tags: ["bottle", "insulated"],
    material: "Steel",
  },
  {
    id: "p25",
    name: "Astronaut Print Sipper Cup",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/astronaut-print-sipper-cup-01.jpg", "/products/astronaut-print-sipper-cup-02.jpg"],
    description: "Astronaut-print sipper cup with straw and dome lid, figurine on top",
    inStock: true,
    tags: ["cup", "kids"],
    material: "Plastic",
  },
  {
    id: "p26",
    name: "Good Vacuum Travel Flask",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/gold-vacuum-insulated-water-bottle.jpg"],
    description: "Gold-tone insulated travel flask bottle with jewel-top lid",
    inStock: true,
    tags: ["bottle", "insulated"],
    material: "Steel",
  },
  {
    id: "p27",
    name: "Gorgeous Glass Tumbler with Sleeve",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/blue-glass-coffee-tumbler-with-sleeve.jpg"],
    description: "Glass tumbler with leather-look sleeve and sipper lid, \"Gorgeous\" branding",
    inStock: true,
    tags: ["tumbler"],
    material: "Glass",
  },
  {
    id: "p28",
    name: "Life is Full of Sunshine Sipper",
    category: "gifts",
    price: 0, // TODO: set real price
    images: ["/products/floral-glass-tumbler-with-pearl-strap.jpg"],
    description: "Glass sipper cup with pearl chain detail, \"Life is full of sunshine\"",
    inStock: true,
    tags: ["cup", "gift"],
    material: "Glass",
  },
  {
    id: "p29",
    name: "Steel Vacuum Flask Jug with Lotus Print",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/blue-steel-insulated-tea-flask.jpg"],
    description: "Steel vacuum flask jug with navy handle and lotus print",
    inStock: true,
    tags: ["jug", "insulated"],
    material: "Steel",
  },
  {
    id: "p30",
    name: "Milton Insulated Water Jug",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/milton-insulated-water-jug.jpg"],
    description: "Milton brand insulated water jug/carafe with floral print",
    inStock: true,
    tags: ["jug", "insulated"],
    material: "Plastic & Steel",
  },
  {
    id: "p31",
    name: "Tom and Jerry Print Mug",
    category: "gifts",
    price: 0, // TODO: set real price
    images: ["/products/cartoon-character-ceramic-mug-with-lid.jpg"],
    description: "White steel mug with lid, Tom and Jerry cartoon print",
    inStock: true,
    tags: ["mug", "licensed print"],
    material: "Steel",
  },
  {
    id: "p32",
    name: "Two-Tone Handle Tumbler (Pink/Mint)",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/pink-mint-insulated-tumbler-with-handle.jpg"],
    description: "Pink and mint two-tone insulated tumbler with handle",
    inStock: true,
    tags: ["tumbler", "insulated"],
    material: "Steel",
  },
  {
    id: "p33",
    name: "Sky Blue Handle Tumbler",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/blue-insulated-tumbler-with-handle.jpg"],
    description: "Sky blue insulated tumbler with handle and straw lid",
    inStock: true,
    tags: ["tumbler", "insulated"],
    material: "Steel",
  },
  {
    id: "p34",
    name: "Fashion Tumbler (Pink-Purple Ombre)",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/pink-ombre-insulated-tumbler-01.jpg", "/products/pink-ombre-insulated-tumbler-02.jpg"],
    description: "Stainless steel fashion tumbler with straw, pink-to-purple ombre finish",
    inStock: true,
    tags: ["tumbler", "insulated"],
    material: "Steel",
  },
  {
    id: "p35",
    name: "Glass Storage Box Set (800ml and 1030ml)",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/glass-food-storage-containers-set-of-2.jpg"],
    description: "Set of 2 glass airtight storage/lunch boxes, 800ml and 1030ml",
    inStock: true,
    tags: ["storage", "kitchen"],
    material: "Glass",
  },
  {
    id: "p36",
    name: "Glass Baking Tray Set (3pc)",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/glass-baking-tray-set.jpg"],
    description: "Set of 3 rectangular glass baking trays",
    inStock: true,
    tags: ["bakeware", "kitchen"],
    material: "Glass",
  },
  {
    id: "p37",
    name: "Yellow Branded Lidded Mug",
    category: "gifts",
    price: 0, // TODO: set real price
    images: ["/products/yellow-branded-lidded-mug.jpg"],
    description: "Yellow ceramic lidded mug with textured lid and printed logo",
    inStock: true,
    tags: ["mug", "licensed print"],
    material: "Ceramic",
  },
  {
    id: "p38",
    name: "Grey Ceramic Serving Bowl",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/grey-ceramic-serving-bowl.jpg"],
    description: "Grey ceramic serving bowl with side handle",
    inStock: true,
    tags: ["serveware"],
    material: "Ceramic",
  },
  {
    id: "p39",
    name: "Ribbed Glass Bowl with Handle",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/clear-glass-serving-bowl-with-handle.jpg"],
    description: "Ribbed glass serving bowl with a single handle",
    inStock: true,
    tags: ["serveware"],
    material: "Glass",
  },
  {
    id: "p40",
    name: "White Astronaut Print Insulated Bottle",
    category: "gifts",
    price: 0, // TODO: set real price
    images: ["/products/white-astronaut-print-bottle.jpg"],
    description: "White insulated steel water bottle with astronaut/space print, for kids",
    inStock: true,
    tags: ["bottle", "kids"],
    material: "Steel",
  },
  {
    id: "p41",
    name: "Round Glass Bowl with Handle",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/crystal-cut-glass-serving-bowl.jpg"],
    description: "Clear round glass serving bowl with side handle",
    inStock: true,
    tags: ["serveware"],
    material: "Glass",
  },
  {
    id: "p42",
    name: "Diamond-Cut Crystal Fruit Bowl",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/crystal-cut-glass-fruit-bowl.jpg"],
    description: "Diamond-cut crystal glass fruit/serving bowl",
    inStock: true,
    tags: ["bowl", "decor"],
    material: "Glass",
  },
  {
    id: "p43",
    name: "Star-Cut Crystal Fruit Bowl",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/star-cut-crystal-fruit-bowl.jpg"],
    description: "Star-cut crystal glass fruit bowl with scalloped rim",
    inStock: true,
    tags: ["bowl", "decor"],
    material: "Glass",
  },
  {
    id: "p44",
    name: "Bubble Texture Glass Cake Stand",
    category: "crockery",
    price: 0, // TODO: set real price
    images: ["/products/clear-bubble-glass-footed-serving-plate-01.jpg", "/products/clear-bubble-glass-footed-serving-plate-02.jpg"],
    description: "Bubble-textured glass footed cake/serving stand",
    inStock: true,
    tags: ["serveware", "party"],
    material: "Glass",
  },
  {
    id: "p45",
    name: "Grey Glass Footed Fruit Bowl",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/leaf-cut-glass-footed-cake-stand-gold-base.jpg"],
    description: "Smoke-grey glass footed fruit bowl with gold-tone base",
    inStock: true,
    tags: ["bowl", "decor"],
    material: "Glass",
  },
  {
    id: "p46",
    name: "Pink Bubble Glass Fruit Bowl",
    category: "home",
    price: 0, // TODO: set real price
    images: ["/products/pink-bubble-glass-serving-bowl.jpg"],
    description: "Pink-tinted bubble-textured glass fruit bowl",
    inStock: true,
    tags: ["bowl", "decor"],
    material: "Glass",
  },
]

// GROQ query used once a Sanity project is connected (see README.md).
const PRODUCTS_QUERY = `*[_type == "product"]{
  "id": _id,
  name,
  category,
  price,
  "images": images[].asset->url,
  description,
  inStock,
  tags,
  material
}`;

export async function getProducts() {
  if (sanityClient) {
    return sanityClient.fetch(PRODUCTS_QUERY);
  }
  return SAMPLE_PRODUCTS;
}

export async function getProductById(id) {
  const products = await getProducts();
  return products.find((p) => p.id === id) || null;
}
