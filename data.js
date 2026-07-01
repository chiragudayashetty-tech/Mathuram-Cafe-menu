/* =====================================================
   MENU DATA
===================================================== */
const MENU = [
{key:'dosa', theme:'roast', title:'Mathuram Dosa', kicker:'Straight off the tawa', sub:'Crisp-edged, ghee-roasted, served hot with chutney & sambar.',
 groups:[{items:[
  ["Masala Dosa",90],["Benne Masala Dosa",130],["Ghee Pudi Masala Dosa",120],["Open Butter Masala Dosa",125],
  ["Butter Onion Dosa",90],["Butter Plain Dosa",90],["Ghee Onion Dosa",115],["Ghee Plain Dosa",90],
  ["Ghee Pudi Plain Dosa",110],["Ghee Masala Dosa",120],["Ghee Sagu Dosa",120],["Ghee Khali Dosa (2)",100],
  ["Ghee Set Dosa (3)",115],["Ghee Garlic Roast Dosa",120],["Ghee Ragi Dosa (2)",90]
 ]}],
 note:"Served with chutney & sambar · Extra charges for parcel · GST extra as applicable"},

{key:'idli', theme:'steam', title:'Idli &amp; Vada', kicker:'Soft, steamed, everyday classics', sub:'Thatte idli and vada, the way it\u2019s meant to be — soft, light and steaming hot.',
 groups:[{items:[
  ["Ghee Pudi Thatte Idli",65],["Idli Vada",65],["Ghee / Butter Thatte Idli",40],["Ghee / Butter Ragi Thatte Idli",70],
  ["Thatte Idli",40],["Vada Sambar Dip",40],["Idli Sambar",40]
 ]}]},

{key:'beverages', theme:'coffee', title:'Hot Beverages', kicker:'From the filter', sub:'Filter coffee brewed the traditional way, plus tea, kashaya and warm milk favourites.',
 groups:[{items:[
  ["Filter Coffee",35],["Tea",35],["Masala Tea / Ginger Tea",45],["Lemon Tea",35],["Jaggery Coffee",40],
  ["Badam Milk",35],["Horlicks",50],["Boost",50],["Kashaya",40],["Black Tea",35]
 ]}]},

{key:'snacks', theme:'monsoon', title:'Snacks &amp; Soups', kicker:'Evening bites &amp; warm bowls', sub:'Bajji, bonda and pakoda for the rains, and soups to start a meal right.',
 groups:[
  {name:'Evening Snacks', items:[
    ["BaaleKai (Banana) Bajji (4)",50],["Bonda Soup",60],["Onion Pakoda",60],["Golibajje",60]
  ]},
  {name:'Soups', items:[
    ["Cream Of Tomato Soup",90],["Sweet Corn Soup",100],["Sweet Corn Veg Soup",110],["Veg Clear Soup",100],
    ["Veg Manchow Soup",100],["Cream Of Mushroom Soup",100],["Hot & Sour Soup",115],["Veg Noodles Soup",115],
    ["Lemon Coriander Soup",115],["Spinach Soup",115],["Mushroom Soup",120]
  ]}
 ]},

{key:'tiffins', theme:'leaf', title:'Tiffins &amp; Meals', kicker:'On a banana leaf', sub:'Traditional tiffins and full-course meals — the heart of the Mathuram table.',
 groups:[
  {name:'Tiffins', items:[
    ["Ghee Ven Pongal",75],["Poori Sagu (3)",100],["Kharabath",60],["Kesaribath",60],["Dahi Vada",65]
  ]},
  {name:'Meals', items:[
    ["South Indian Meals",135],["North Indian Meals",145],["Extra Meals Rice",35],["Dum Rice Special",95],
    ["Puliyogare",70],["Curd Rice",100]
  ]}
 ]},

{key:'starters', theme:'sizzle', title:'Starters', kicker:'Wok-tossed, fresh fried', sub:'Manchurian, chilly, pepper dry and 65 — every classic starter across gobi, paneer, mushroom and baby corn.',
 groups:[{items:[
  ["Finger Chips",120],["Gobi Manchurian",130],["Gobi 65",150],["Gobi Chilly",150],["Gobi Pepper Dry",160],
  ["Baby Corn Manchurian",160],["Baby Corn Chilly",190],["Baby Corn 65",190],["Baby Corn Pepper Dry",200],
  ["Baby Corn Schezwan",200],["Paneer Manchurian",220],["Paneer 65",220],["Paneer Chilly",220],
  ["Paneer Pepper Dry",220],["Paneer Schezwan",220],["Paneer Ghee Roast",220],["Mushroom Manchurian",210],
  ["Mushroom 65",190],["Mushroom Chilly",200],["Mushroom Pepper Dry",200],["Mushroom Schezwan",200],
  ["Mushroom Ghee Roast",230],["Veg Ball Manchurian",200],["Veg Ball Chilly",200],["Veg Ball 65",200],
  ["Plain Papad",35],["Masala Papad",60],["Mathuram Special",260]
 ]}]},

{key:'tandoori', theme:'tandoor', title:'Tandoori Starters', kicker:'From the clay oven', sub:'Smoky tikkas and kababs, char-grilled to order.',
 groups:[{items:[
  ["Paneer Tikka",220],["Paneer Achari Tikka",240],["Paneer Hariyali Tikka",240],["Mushroom Tikka",225],
  ["Veg Platter",510],["Paneer Malai Tikka",250],["Mushroom Achari Tikka",240],["Mushroom Hariyali Tikka",240],
  ["Harabara Kabab",240],["Paneer Chandini Tikka",290],["Veg Seekh Kabab",210],["Mathuram Special",260]
 ]}]},

{key:'gravy', theme:'kadai', title:'Indian Gravy', kicker:'Simmered in the kadai', sub:'Everyday curries, rich paneer gravies, house specials and mushroom favourites.',
 groups:[
  {name:'Basic Veg Curries', items:[
    ["Channa Masala",170],["Dal Fry",150],["Dal Tadka",170],["Green Peas Masala",170],["Plain Palak",170],
    ["Peas Palak",195],["Aloo Gobi",190],["Aloo Jeera Dry",160],["Aloo Palak",180],["Aloo Channa",180],
    ["Stuffed Aloo",210],["Aloo Mutter",180],["Mix Veg Curry",190],["Veg Kadai",230]
  ]},
  {name:'Paneer Gravies', items:[
    ["Paneer Butter Masala",230],["Kadai Paneer",220],["Mutter Paneer",230],["Palak Paneer",230],
    ["Paneer Burji",230],["Shahi Paneer",290],["Paneer Tikka Masala",260],["Paneer Kurma",260]
  ]},
  {name:'Veg Special Gravies', items:[
    ["Veg Malai Kofta",240],["Veg Kolhapuri",240],["Veg Hyderabadi",240],["Veg Pepper Masala",240],
    ["Veg Kofta",240],["Veg Shahi Kurma",240],["Veg Malvani",265],["Kaju Masala",300],["Kaju Mutter",280],
    ["Matka Mix Veg Masala",250]
  ]},
  {name:'Mushroom &amp; Other Veg', items:[
    ["Mushroom Masala",210],["Kadai Mushroom",230],["Mushroom Mutter",230],["Gobi Masala",200],
    ["Methi Hariyali",250],["Baby Corn Green Masala",230],["Capsicum Masala",210]
  ]}
 ]},

{key:'breads', theme:'wheat', title:'Breads &amp; Biryani', kicker:'Tandoor breads, dum rice', sub:'Naan, kulcha and paratha alongside biryanis and pulao, cooked North Indian style.',
 groups:[
  {name:'Indian Breads', items:[
    ["Roti",40],["Butter Roti",55],["Methi Roti",50],["Pudina Roti",50],["Naan",55],["Butter Naan",65],
    ["Stuffed Naan",100],["Mughalai Naan",100],["Onion Parotta",100],["Mix Parotta",110],["Gobi Parotta",100],
    ["Chapati (2)",60],["Garlic Naan",100],["Kulcha",50],["Butter Kulcha",65],["Stuffed Kulcha",100],
    ["Pudina Paratha",80],["Aloo Paratha",90],["Cheese Naan with Garlic",120]
  ]},
  {name:'Biryani &amp; Pulao', items:[
    ["Veg Biriyani",190],["Kashmiri Biriyani",240],["Mushroom Biriyani",230],["Paneer Biriyani",240],
    ["Handi Biriyani",240],["Mughalai Biriyani",240],["Veg Hyderabadi Biriyani",240],["Veg Pulao",180],
    ["Peas Pulao",200],["Shahjani Pulao",240],["Dal Khichdi",170],["Palak Khichdi",180],["Kashmiri Pulav",230]
  ]}
 ]},

{key:'chinese', theme:'wok', title:'Chinese', kicker:'Indo-Chinese, wok hot', sub:'Fried rice and noodles across veg, paneer, mushroom, baby corn and schezwan.',
 groups:[
  {name:'Fried Rice', items:[
    ["Veg Fried Rice",160],["Gobi Fried Rice",180],["Veg Schezwan Fried Rice",200],["Paneer Fried Rice",200],
    ["Baby Corn Fried Rice",180],["Mushroom Fried Rice",185],["Ghee Rice",190],["Jeera Rice",175]
  ]},
  {name:'Noodles', items:[
    ["Veg Noodles",180],["Veg Schezwan Noodles",190],["Veg Hakka Noodles",180],["Veg Hongkong Noodles",200],
    ["Paneer Noodles",200],["Mushroom Noodles",190],["Manchow Noodles",210],["Gobi Noodles",170],
    ["Veg Singapore Noodles",210]
  ]}
 ]},

{key:'chats', theme:'street', title:'Chats', kicker:'Tangy, quick, street-style', sub:'Puri chats for a light, tangy bite any time of day.',
 groups:[
  {items:[
    ["Masala Puri",60],["Pani Puri",60],["Bhel Puri",70],["Sev Puri",80],["Dahi Puri",80],["Aloo Puri",65],
    ["Papadi Chat",80],["Sev Dahi Puri",85],["Special Sev Puri",90],["Special Bhel Puri",90]
  ]}
 ]},

{key:'sweets', theme:'mithai', title:'Sweets &amp; Ice Cream', kicker:'To finish on a sweet note', sub:'Classic Indian mithai, scoop ice creams, shakes, sundaes and falooda.',
 groups:[
  {name:'Sweets', items:[
    ["Gulab Jamoon",60]
  ]},
  {name:'Ice Cream (Scoop)', items:[
    ["Vanilla",60],["Strawberry",60],["Mango",60],["Chocolate",60],["Pista",70],["Butter Scotch",70],
    ["Tutti Fruity",90],["Anjeer",90]
  ]},
  {name:'Ice Cream Milk Shakes', items:[
    ["Vanilla Milk Shake",120],["Strawberry Milk Shake",120],["Chocolate Milk Shake",120],["Pista Milk Shake",130],
    ["Butter Scotch Milk Shake",130],["Mango Milk Shake",130],["Anjeer Milk Shake",160]
  ]},
  {name:'Special Ice Cream &amp; Falooda', items:[
    ["Gud Bud",160],["Chocolate Sundae",175],["Vanilla Sundae",175],["Nut Sundae",175],["Double Sundae",175],
    ["Triple Sundae",200],["Dry Fruit Special",185],["Banana Split",175]
  ]}
 ]},

{key:'juices', theme:'orchard', title:'Juices &amp; Shakes', kicker:'Fresh-pressed, fruit-forward', sub:'Seasonal fresh juices, classic milkshakes and rich dry-fruit shakes.',
 groups:[
  {name:'Fresh Juices', items:[
    ["Lemon",50],["Mint Lime",65],["Fresh Lime Soda (Sweet / Salt)",65],["Mosambi",80],["Water Melon",80],
    ["Pineapple",80],["Musk Melon",90],["Apple",110],["Mango",100],["Orange",90],["Grape",110],
    ["Pomegranate",110],["Mix Fruit Juice",110],["Papaya",90],["Mosambi Orange Solid",110],["Butter Milk",45],
    ["Plain Soda",35]
  ]},
  {name:'Milk Shakes', items:[
    ["Apple Milk Shake",120],["Chikku Milk Shake",120],["Strawberry Milk Shake",120],["Mango Milk Shake",120],
    ["Banana Milk Shake",120],["Oreo Milk Shake",120],["Papaya Milk Shake",120],["Pomegranate Milk Shake",120],
    ["Butter Fruit Milk Shake",120],["Musk Melon Milk Shake",120],["Cold Badam Milk",90],["Cold Coffee",120]
  ]},
  {name:'Dry Fruit Milk Shakes', items:[
    ["Dry Fruit Milk Shake",200],["Dry Fruit Pista Milk Shake",200],["Dry Fruit Anjoora Milk Shake",200],
    ["Dry Fruit Badam Milk Shake",200],["Dry Fruit Kaju Anjoora Milkshake",215]
  ]}
 ],
 note:"Mineral Water ₹15 / ₹25"}
];

const NAV_LABELS = {
  dosa:'Dosa', idli:'Idli &amp; Vada', beverages:'Beverages', snacks:'Snacks &amp; Soups',
  tiffins:'Tiffins &amp; Meals', starters:'Starters', tandoori:'Tandoori', gravy:'Curries',
  breads:'Breads &amp; Biryani', chinese:'Chinese', chats:'Chats',
  sweets:'Sweets &amp; Ice Cream', juices:'Juices &amp; Shakes'
};