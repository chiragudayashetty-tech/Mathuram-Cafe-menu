import os

os.makedirs('pages', exist_ok=True)

template = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title} | Mathuram Cafe</title>
<meta name="description" content="{description}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rozha+One&family=Mukta:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../style.css">
<style>
  .seo-content {{
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    line-height: 1.8;
    color: var(--fg, #f4e9d8);
    font-size: 1.05rem;
  }}
  .seo-content h2 {{
    color: var(--accent, #f29f05);
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }}
  .seo-content p {{
    margin-bottom: 20px;
  }}
  .seo-content img {{
    width: 100%;
    border-radius: 12px;
    margin: 20px 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  }}
  .seo-content a {{
    color: var(--accent, #f29f05);
    text-decoration: none;
    font-weight: 600;
  }}
  .seo-content a:hover {{
    text-decoration: underline;
  }}
</style>
</head>
<body>

<!-- TOPBAR -->
<header class="topbar">
  <a href="../index.html" class="brandmark" style="text-decoration:none;">
    <svg class="cup" viewBox="0 0 24 24" fill="none"><path d="M6 10h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6v-3z" stroke="#f29f05" stroke-width="1.4"/><path d="M18 11h1.5a2.2 2.2 0 0 1 0 4.4H18" stroke="#f29f05" stroke-width="1.4"/><path d="M9 4c.5.8-.5 1.2 0 2M12 4c.5.8-.5 1.2 0 2M15 4c.5.8-.5 1.2 0 2" stroke="#f29f05" stroke-width="1.2" stroke-linecap="round"/></svg>
    <div class="word">Mathuram<small>Pure Veg Cafe</small></div>
  </a>
</header>

<!-- HERO -->
<section class="hero" style="padding: 60px 20px;">
  <h1 style="font-size: 3rem;">{title}</h1>
  <p class="tagline">Opposite Krishi Kendra, Brahmavara</p>
  <div class="cta-row" style="margin-top: 30px;">
    <a href="../index.html" class="btn btn-solid">Back to Menu</a>
    <a href="https://maps.app.goo.gl/N9XR9wsEtZH2UNVz8" target="_blank" rel="noopener" class="btn btn-line">Get Directions</a>
  </div>
</section>

<!-- CONTENT -->
<main class="seo-content">
  {content}
</main>

<!-- FOOTER -->
<footer>
  <img class="logo" src="../assets/footer-logo.png" alt="Mathuram Cafe">
  <h3>Mathuram Cafe</h3>
  <p class="addr">Laxmi Empire, Opposite Krishi Kendra, Brahmavara<br>Pure Veg · AC &amp; Non-AC Fine Dine · Drive-Thru Available</p>
  
  <div style="margin-top:40px; font-size: 0.8rem; color: #a0937d; display:flex; gap:15px; justify-content:center; flex-wrap:wrap;">
    <a href="best-pure-veg-restaurant-brahmavara.html" style="color:inherit;">Best Pure Veg</a>
    <a href="south-indian-restaurant-brahmavara.html" style="color:inherit;">South Indian</a>
    <a href="family-restaurant-brahmavara.html" style="color:inherit;">Family Restaurant</a>
    <a href="breakfast-brahmavara.html" style="color:inherit;">Breakfast</a>
    <a href="lunch-brahmavara.html" style="color:inherit;">Lunch</a>
  </div>
</footer>

</body>
</html>
"""

pages_data = [
    {
        "filename": "best-pure-veg-restaurant-brahmavara.html",
        "title": "Best Pure Veg Restaurant in Brahmavara",
        "description": "Looking for the best pure vegetarian food in Brahmavara? Visit Mathuram Cafe opposite Krishi Kendra for hygienic, delicious, and 100% pure veg dining.",
        "content": f"""
        <p>If you are on a quest to find the <strong>best pure veg restaurant in Brahmavara</strong>, look no further than Mathuram Cafe. Located conveniently at Laxmi Empire, exactly <strong>Opposite Krishi Kendra</strong>, we offer an unparalleled culinary experience dedicated entirely to 100% pure vegetarian cuisine.</p>
        <p>Our philosophy is simple: serve high-quality, delicious, and hygienic vegetarian food that comforts the soul. Whether you are a local resident, a family passing through, or a food enthusiast looking for authentic flavors, Mathuram Cafe guarantees a meal that you will remember.</p>
        <img src="../assets/food-1.jpeg" alt="Pure veg food at Mathuram Cafe">
        <h2>Uncompromising Quality and Hygiene</h2>
        <p>In today's fast-paced world, finding a restaurant that maintains strict hygiene standards while serving mouth-watering dishes can be challenging. As the premier pure veg destination in Brahmavara, we pride ourselves on our immaculate kitchen standards. We source only the freshest vegetables, highest quality spices, and pure ghee to ensure every dish meets our golden standard.</p>
        <p>When you dine with us, you aren't just eating a meal; you are experiencing the rich heritage of Indian vegetarian cooking, prepared in a kitchen that respects the purity of veg-only preparation.</p>
        <h2>A Diverse Menu to Satisfy Every Craving</h2>
        <p>While we are deeply rooted in South Indian traditions, our menu is a celebration of vegetarian diversity. From crispy dosas and fluffy idlis to robust North Indian curries and tantalizing Indo-Chinese delicacies, there is something for everyone.</p>
        <p>Check out our <a href="../index.html#dosa">Dosa varieties</a> which are a crowd favorite. Every batter is freshly ground, naturally fermented, and cooked to golden perfection on our sizzling tawas.</p>
        <img src="../assets/food-2.jpeg" alt="Delicious vegetarian spread">
        <h2>Perfect for Every Occasion</h2>
        <p>Whether it is a quick solo breakfast, a casual lunch with colleagues, or a grand family dinner, Mathuram Cafe provides the perfect setting. We offer both AC fine-dine and Non-AC sections to suit your comfort and budget. For those on the move, our convenient Drive-Thru facility ensures you never have to miss out on the best pure veg food in Brahmavara.</p>
        <p>Our commitment to quality, combined with our warm hospitality and serene ambiance, has made us a beloved landmark opposite Krishi Kendra. We believe that vegetarian food should never be boring, and our chefs work tirelessly to innovate while staying true to traditional roots.</p>
        <h2>Visit Us Today</h2>
        <p>Join us at Mathuram Cafe and discover why we are celebrated as the best pure veg restaurant in Brahmavara. Experience the magic of spices, the warmth of great service, and the joy of a perfectly cooked vegetarian meal.</p>
        <img src="../assets/food-3.jpeg" alt="Mathuram Cafe ambiance">
        <p>Don't forget to explore our <a href="../index.html">full menu</a> online before you arrive, or simply drop in and let our friendly staff recommend the day's special!</p>
        """
    },
    {
        "filename": "south-indian-restaurant-brahmavara.html",
        "title": "Authentic South Indian Restaurant in Brahmavara",
        "description": "Craving authentic South Indian food? Mathuram Cafe in Brahmavara serves the best dosas, idlis, and filter coffee. Located opposite Krishi Kendra.",
        "content": f"""
        <p>When it comes to experiencing the true flavors of the South, authenticity is everything. Mathuram Cafe stands proudly as the most authentic <strong>South Indian restaurant in Brahmavara</strong>, bringing you traditional recipes passed down through generations. Located <strong>Opposite Krishi Kendra</strong>, we are a haven for lovers of classic South Indian cuisine.</p>
        <img src="../assets/food-4.jpeg" alt="Authentic South Indian Dosa">
        <h2>The Art of the Perfect Dosa</h2>
        <p>A true South Indian meal often revolves around the dosa. At Mathuram Cafe, dosa preparation is an art form. We use a precise blend of rice and lentils, fermented perfectly to achieve the iconic golden-brown crispness and soft interior. From the classic Masala Dosa to the rich Neer Dosa and the indulgent Ghee Roast, our <a href="../index.html#dosa">Dosa selection</a> is unrivaled in Brahmavara.</p>
        <p>Served with our signature coconut chutney and piping hot, flavorful sambar, every bite transports you to the heart of South Indian culinary tradition.</p>
        <h2>Beyond Dosas: Idlis, Vadas, and More</h2>
        <p>But our expertise doesn't stop at dosas. Our morning menu features the softest, fluffiest idlis that melt in your mouth, and crispy, savory Medu Vadas that provide the perfect crunch. These staples are prepared fresh every morning, making us a top destination for breakfast.</p>
        <img src="../assets/food-5.jpeg" alt="South Indian meals">
        <h2>The Essential Filter Coffee</h2>
        <p>No South Indian meal is complete without the quintessential Filter Coffee. Brewed strong with a perfect blend of chicory and premium coffee beans, our filter coffee is aerated to a frothy perfection. It’s the perfect way to start your day or conclude a hearty meal.</p>
        <h2>A Cultural Culinary Journey</h2>
        <p>At Mathuram Cafe, we believe in preserving the cultural heritage of South Indian dining. The aroma of curry leaves, the sizzle of mustard seeds, and the vibrant colors of our dishes are a testament to our dedication. We use traditional cooking methods and locally sourced ingredients to maintain the authenticity that our patrons expect and love.</p>
        <p>Whether you are craving a light snack or a full South Indian Thali, our restaurant offers a comfortable, air-conditioned environment to enjoy your meal. Located right opposite Krishi Kendra, we are easily accessible for both locals and travelers on the highway.</p>
        <img src="../assets/food-6.jpeg" alt="Filter Coffee at Mathuram Cafe">
        <p>Explore our <a href="../index.html">South Indian menu</a> today and embark on a flavorful journey at Brahmavara's premier South Indian restaurant.</p>
        """
    },
    {
        "filename": "family-restaurant-brahmavara.html",
        "title": "Top Family Restaurant in Brahmavara",
        "description": "Looking for a family-friendly dining experience? Mathuram Cafe is the premier family restaurant in Brahmavara, offering AC fine-dine and a diverse veg menu.",
        "content": f"""
        <p>Dining out with family is about more than just food; it's about creating memories in a welcoming environment. Mathuram Cafe is celebrated as the top <strong>family restaurant in Brahmavara</strong>, offering a spacious, comfortable, and elegant setting for families of all sizes. Located prominently <strong>Opposite Krishi Kendra</strong>, we provide the perfect backdrop for your family gatherings.</p>
        <img src="../assets/food-7.jpeg" alt="Family dining at Mathuram Cafe">
        <h2>Ambiance Designed for Families</h2>
        <p>We understand that family dining requires comfort and convenience. Our restaurant features both an AC Fine-Dine section for a more premium experience and a relaxed Non-AC seating area. The spacious seating arrangements ensure that large families can sit together comfortably without feeling crowded.</p>
        <p>The interior is designed with a warm, South Indian aesthetic that feels both premium and inviting, making it an excellent choice for celebrating birthdays, anniversaries, or simply enjoying a weekend family lunch.</p>
        <h2>A Menu for Every Generation</h2>
        <p>One of the biggest challenges of dining out with family is catering to different tastes. At Mathuram Cafe, our extensive 100% pure veg menu solves this problem. Grandparents can enjoy our traditional, easy-to-digest <a href="../index.html#south-indian">South Indian meals</a>, while the younger generation might prefer our exciting <a href="../index.html#indo-chinese">Indo-Chinese</a> or Chats options.</p>
        <p>From rich paneer gravies for the main course to sweet traditional Mithai for dessert, our menu bridges the generational gap, ensuring everyone leaves with a smile.</p>
        <img src="../assets/food-8.jpeg" alt="Diverse vegetarian dishes">
        <h2>Hygiene and Safety First</h2>
        <p>When dining with children and elderly family members, hygiene is a top priority. As a premier family restaurant in Brahmavara, we maintain impeccable cleanliness in our dining areas, restrooms, and kitchen. You can dine with peace of mind knowing that your family's health and safety are our utmost concern.</p>
        <h2>Convenient Location and Parking</h2>
        <p>Located right opposite Krishi Kendra at Laxmi Empire, we are incredibly easy to find. We offer ample parking space, which is a crucial factor for family outings. For families on the go, our unique Drive-Thru service offers a convenient way to pick up high-quality food without leaving the comfort of your car.</p>
        <p>Make your next family meal special. <a href="../index.html">View our menu</a> and plan your visit to Mathuram Cafe, where great food and family come together.</p>
        <img src="../assets/food-9.jpeg" alt="Mathuram Cafe exterior">
        """
    },
    {
        "filename": "breakfast-brahmavara.html",
        "title": "Best Breakfast in Brahmavara",
        "description": "Start your day right with the best breakfast in Brahmavara at Mathuram Cafe. Enjoy fresh idlis, crispy dosas, and hot filter coffee opposite Krishi Kendra.",
        "content": f"""
        <p>They say breakfast is the most important meal of the day, and at Mathuram Cafe, we take that very seriously. If you are searching for the <strong>best breakfast in Brahmavara</strong>, look no further. Conveniently situated <strong>Opposite Krishi Kendra</strong>, we open our doors early to serve you fresh, piping hot, and nutritious morning meals.</p>
        <img src="../assets/food-10.jpeg" alt="Hot South Indian Breakfast">
        <h2>Fresh, Hot, and Wholesome</h2>
        <p>A good breakfast should energize you for the day ahead. Our morning kitchen is a hub of activity, grinding fresh batters and preparing aromatic chutneys. We specialize in classic South Indian breakfast items that are light on the stomach yet incredibly satisfying.</p>
        <p>Start your morning with our pillowy-soft Idlis, which pair perfectly with our mildly spiced sambar and fresh coconut chutney. If you prefer a bit of crunch, our Medu Vadas are fried to a golden crispness, offering the perfect textural contrast.</p>
        <h2>The Dosa Experience</h2>
        <p>Breakfast at Mathuram Cafe is synonymous with dosas. Our <a href="../index.html#dosa">Dosa menu</a> features everything from the humble Plain Dosa to the rich and flavorful Masala Dosa, packed with a perfectly seasoned potato filling. Each dosa is made to order, ensuring it reaches your table hot and crispy.</p>
        <img src="../assets/food-11.jpeg" alt="Freshly made Dosa">
        <h2>Quick Service for Busy Mornings</h2>
        <p>We know that mornings can be rushed. Whether you are heading to work or starting a long journey, our efficient staff ensures quick service without compromising on quality. For the ultimate convenience, you can even use our Drive-Thru facility to grab a delicious breakfast on the go.</p>
        <h2>The Perfect Cup of Coffee</h2>
        <p>No Brahmavara breakfast is complete without a strong cup of filter coffee. Our coffee is brewed fresh continuously throughout the morning. The rich aroma of chicory and coffee beans is exactly what you need to awaken your senses.</p>
        <p>Join the locals who have made Mathuram Cafe their daily morning ritual. Experience the best breakfast in Brahmavara and kickstart your day with authentic flavors and warm hospitality.</p>
        <p>Check out our full <a href="../index.html">breakfast offerings</a> and visit us tomorrow morning!</p>
        """
    },
    {
        "filename": "lunch-brahmavara.html",
        "title": "Delicious Lunch in Brahmavara",
        "description": "Enjoy a hearty and fulfilling lunch in Brahmavara at Mathuram Cafe. From South Indian meals to North Indian curries, dine opposite Krishi Kendra.",
        "content": f"""
        <p>Midday hunger calls for a meal that is both satisfying and delicious. Mathuram Cafe is the premier destination for a wholesome <strong>lunch in Brahmavara</strong>. Located right <strong>Opposite Krishi Kendra</strong> at Laxmi Empire, we offer a diverse lunch menu that caters to all appetites, from light snacks to grand, multi-course feasts.</p>
        <img src="../assets/food-12.jpeg" alt="Elaborate Lunch Thali">
        <h2>The Traditional South Indian Meal</h2>
        <p>For those who love tradition, our South Indian lunch offerings are a must-try. Experience the comforting flavors of home-style cooking with our rice preparations, flavorful sambars, tangy rasam, and fresh vegetable palyas. Our traditional meals are balanced, nutritious, and incredibly flavorful, making them the perfect midday fuel.</p>
        <h2>Robust North Indian Curries</h2>
        <p>If you are in the mood for something richer, our North Indian lunch menu will not disappoint. We serve a variety of deeply flavorful gravies, from creamy Paneer Butter Masala to robust Dal Makhani. Pair these with our freshly baked, soft, and buttery <a href="../index.html#tandoor">Tandoori breads</a> (Roti, Naan, Kulcha) for a truly satisfying lunch experience.</p>
        <img src="../assets/food-13.jpeg" alt="North Indian Lunch Spread">
        <h2>Flavorful Biryanis and Rice Dishes</h2>
        <p>For a complete meal in one dish, explore our range of vegetarian Biryanis and Pulaos. Cooked with fragrant Basmati rice, premium whole spices, and fresh vegetables, our Biryanis offer a burst of flavor in every bite. Served with cooling raita, it's a lunch favorite among our patrons in Brahmavara.</p>
        <h2>A Cool and Comfortable Escape</h2>
        <p>The afternoon heat in Brahmavara can be intense. Escape into our fully air-conditioned fine-dine section and enjoy your lunch in cool, serene comfort. Our attentive staff ensures that your water glass is always full and your needs are promptly met, allowing you to relax and recharge.</p>
        <p>Whether you are taking a quick lunch break from work or enjoying a leisurely afternoon meal with friends, Mathuram Cafe provides the ideal environment and menu. </p>
        <p>Browse our extensive <a href="../index.html">lunch menu</a> and join us today for the most satisfying lunch in Brahmavara!</p>
        """
    }
]

for page in pages_data:
    filepath = os.path.join('pages', page['filename'])
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(template.format(
            title=page['title'],
            description=page['description'],
            content=page['content']
        ))
    print(f"Created {{filepath}}")

