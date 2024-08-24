const menuItems = {
  Men: {
    Topwear: [
      { name: "T-Shirts", path: "t-shirts" },
      { name: "Casual Shirts", path: "casual-shirts" },
      { name: "Formal Shirts", path: "formal-shirts" },
      { name: "Sweatshirts", path: "sweatshirts" },
    ],
    Bottomwear: [
      { name: "Jeans", path: "jeans" },
      { name: "Casual Trousers", path: "casual-trousers" },
      { name: "Formal Trousers", path: "formal-trousers" },
      { name: "Shorts", path: "shorts" },
    ],
    Footwear: [
      { name: "Casual Shoes", path: "casual-shoes" },
      { name: "Sports Shoes", path: "sports-shoes" },
      { name: "Formal Shoes", path: "formal-shoes" },
      { name: "Sneakers", path: "sneakers" },
    ],
    Sports: [
      { name: "Sports Shoes", path: "sports-shoes" },
      { name: "Sports Sandals", path: "sports-sandals" },
      { name: "Active T-Shirts", path: "active-tshirts" },
      { name: "Track Pants & Shorts", path: "track-pants-shorts" },
    ],
    Accessories: [
      { name: "Wallets", path: "wallets" },
      { name: "Belts", path: "belts" },
      { name: "Perfumes & Body Mists", path: "perfumes-body-mists" },
      { name: "Trimmers", path: "trimmers" },
    ],
    Gadgets: [
      { name: "Smart Wearables", path: "smart-wearables" },
      { name: "Fitness Gadgets", path: "fitness-gadgets" },
      { name: "Headphones", path: "headphones" },
      { name: "Speakers", path: "speakers" },
    ],
  },
  Women: {
    Indian: [
      { name: "Kurtas & Suits", path: "kurtas-suits" },
      { name: "Kurtis, Tunics & Tops", path: "kurtis-tunics-tops" },
      { name: "Sarees", path: "sarees" },
      { name: "Ethnic Wear", path: "ethnic-wear" },
    ],
    Western: [
      { name: "Dresses", path: "dresses" },
      { name: "Tops", path: "tops" },
      { name: "Tshirts", path: "tshirts" },
      { name: "Jeans", path: "jeans" },
    ],
    Footwear: [
      { name: "Flats", path: "flats" },
      { name: "Casual Shoes", path: "casual-shoes" },
      { name: "Heels", path: "heels" },
      { name: "Boots", path: "boots" },
    ],
    Lingerie: [
      { name: "Shapewear", path: "shapewear" },
      { name: "Sleepwear & Loungewear", path: "sleepwear-loungewear" },
      { name: "Swimwear", path: "swimwear" },
      { name: "Camisoles & Thermals", path: "camisoles-thermals" },
    ],
    Beauty: [
      { name: "Makeup", path: "makeup" },
      { name: "Premium Beauty", path: "premium-beauty" },
      { name: "Lipsticks", path: "lipsticks" },
      { name: "Fragrances", path: "fragrances" },
    ],
    Gadgets: [
      { name: "Smart Wearables", path: "smart-wearables" },
      { name: "Fitness Gadgets", path: "fitness-gadgets" },
      { name: "Headphones", path: "headphones" },
      { name: "Speakers", path: "speakers" },
    ],
    Jewellery: [
      { name: "Fashion Jewellery", path: "fashion-jewellery" },
      { name: "Fine Jewellery", path: "fine-jewellery" },
      { name: "Earrings", path: "earrings" },
    ],
    Accessories: [
      { name: "Belts, Scarves & More", path: "belts-scarves-more" },
      { name: "Watches & Wearables", path: "watches-wearables" },
      { name: "Backpacks", path: "backpacks" },
    ],
  },
  Kids: {
    Boys: [
      { name: "T-Shirts", path: "t-shirts" },
      { name: "Shirts", path: "shirts" },
      { name: "Shorts", path: "shorts" },
      { name: "Jeans", path: "jeans" },
    ],
    Girls: [
      { name: "Dresses", path: "dresses" },
      { name: "Lehenga Choli", path: "lehenga-choli" },
      { name: "Kurta Sets", path: "kurta-sets" },
    ],
    Footwear: [
      { name: "Flipflops", path: "flipflops" },
      { name: "Sports Shoes", path: "sports-shoes" },
      { name: "School Shoes", path: "school-shoes" },
      { name: "Socks", path: "socks" },
    ],
    Toys: [
      { name: "Learning & Development", path: "learning-development" },
      { name: "Activity Toys", path: "activity-toys" },
      { name: "Soft Toys", path: "soft-toys" },
      { name: "Action Figure / Play set", path: "action-figure-play-set" },
    ],
    Infants: [
      { name: "Bodysuits", path: "bodysuits" },
      { name: "Rompers & Sleepsuits", path: "rompers-sleepsuits" },
      { name: "Innerwear & Sleepwear", path: "innerwear-sleepwear" },
      { name: "Infant Care", path: "infant-care" },
    ],
    Accessories: [
      { name: "Bags & Backpacks", path: "bags-backpacks" },
      { name: "Watches", path: "watches" },

      { name: "Masks & Protective Gears", path: "masks-protective-gears" },
      { name: "Caps & Hats", path: "caps-hats" },
    ],
    Brands: [
      { name: "H&M", path: "hm" },
      { name: "Max Kids", path: "max-kids" },

      { name: "HRX", path: "hrx" },
    ],
  },
  Beauty: {
    Makeup: [
      { name: "Lipstick", path: "lipstick" },
      { name: "Mascara", path: "mascara" },
      { name: "Eyeliner", path: "eyeliner" },
    ],
    Skincare: [
      { name: "Face Moisturiser", path: "face-moisturiser" },
      { name: "Cleanser", path: "cleanser" },
      { name: "Masks & Peel", path: "masks-peel" },
    ],
    Haircare: [
      { name: "Shampoo", path: "shampoo" },
      { name: "Conditioner", path: "conditioner" },
      { name: "Hair Cream", path: "hair-cream" },
    ],
    Appliances: [
      { name: "Hair Straightener", path: "hair-straightener" },
      { name: "Hair Dryer", path: "hair-dryer" },
      { name: "Epilator", path: "epilator" },
    ],
    Grooming: [
      { name: "Trimmers", path: "trimmers" },
      { name: "Beard Oil", path: "beard-oil" },
      { name: "Hair Wax", path: "hair-wax" },
    ],
    Fragrances: [
      { name: "Perfume", path: "perfume" },
      { name: "Deodorant", path: "deodorant" },
      { name: "Body Mist", path: "body-mist" },
    ],
    Beauty: [
      { name: "Beauty Gift", path: "beauty-gift" },
      { name: "Makeup Kit", path: "makeup-kit" },
    ],

    Brands: [
      { name: "Lakme", path: "lakme" },
      { name: "Maybelline", path: "maybelline" },

      { name: "Nivea", path: "nivea" },
    ],
  },
};
export default menuItems;
