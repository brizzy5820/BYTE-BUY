//ANIMATION INTRODUCTION
const main = document.getElementById('main-content');
window.addEventListener('load', () => {
    const intro = document.getElementById('book-intro');
    setTimeout(() => {
      // Start book opening
      intro.classList.add('open');
      // Reveal main content DURING book animation
      main.classList.remove('hidden');
      main.classList.add('show');
  
      // Optional: fade out the intro wrapper after animation finishes
      setTimeout(() => {
        intro.classList.add('fade-out');
      }, 2300); // book animation duration
    }, 1500); // initial delay
  },3000);
  
// Header dropdowns
  const head1 = document.getElementById('headlistI');
  const innerList1 = document.getElementById('innerlistI');
  const head2 = document.getElementById('headlistII');
  const innerList2 = document.getElementById('innerlistII');
  const body = document.querySelector('body');
  
  // First header dropdown
  head1.addEventListener('click', (e) => {
    e.stopPropagation();
    head1.classList.toggle('active');
    head2.classList.remove('active');
    innerList2.style.display = 'none'; // Hide the second dropdown
    innerList1.style.display = head1.classList.contains('active') ? 'block' : 'none';
  });
  
  // Second header dropdown
  head2.addEventListener('click', (e) => {
    e.stopPropagation();
    head2.classList.toggle('active');
    head1.classList.remove('active');
    innerList1.style.display = 'none'; // Hide the first dropdown
    innerList2.style.display = head2.classList.contains('active') ? 'block' : 'none';
  });
  
  // Optional: Close both dropdowns when clicking outside
  body.addEventListener('click', () => {
    head1.classList.remove('active');
    head2.classList.remove('active')
    innerList1.style.display = 'none';
    innerList2.style.display = 'none';
  });
// IMAGE SLIDE

const slidesWrapper = document.getElementById('slidesWrapper');
const radioContainer = document.getElementById('radioContainer');

const slidesData = [
{ image: "image/Artboard (1).png"},
{ image: 'image/712x384-copy-1.gif' },
{ image: 'image/Desktop_Homepage_Slider__712x384.jpg' },
{ image: 'image/maybelline (1).jpg' },
{ image: 'image/nivea-sun-712x384.jpg' }
];
// function
// Create slides and radio buttons
slidesData.forEach((item, index) => {
const slide = document.createElement("div");
slide.className = "slide";

const img = document.createElement("img");
img.src = item.image;
img.alt = "slide image";
img.style.width = "100%";
img.style.height = "100%";
img.style.objectFit = "cover";
img.style.borderRadius = "5px";


slide.appendChild(img);
slidesWrapper.appendChild(slide);

const radio = document.createElement("input");
radio.type = "radio";
radio.name = "slide";
radio.value = index;
radio.style.width = "8px";
radio.style.height = "8px";
radio.style.margin = "5px";

if (index === 0) radio.checked = true;
radio.addEventListener("change", () => {
  current = index;
  showSlide(current);
});

radioContainer.appendChild(radio);
});
const slides = document.querySelectorAll(".slide");
const radios = document.querySelectorAll('input[name="slide"]');
let current = 0;

function showSlide(index) {
const slideWidth = slides[0].offsetWidth;
slidesWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
radios[index].checked = true;
}

// Auto-change every 10 seconds
setInterval(() => {
current = (current + 1) % slides.length;
showSlide(current);
}, 3500);  

  // Header Search 
 // Header Search 
 const find= document.getElementById('searchInput')
 const searchBtn= document.getElementById('searchBtn')
 searchBtn.addEventListener("input", () => {
 const filter = searchInput.value.toLowerCase();
 const cards = productList.querySelectorAll(".product-card");
 cards.forEach(card => {
   const text = card.textContent.toLowerCase();
   card.style.display = text.includes(filter) ? "" : "none";
 });
 })
 const find4Me=()=>{
 const val = find.value.trim().toLowerCase();
 // Category → { keywords, page }
 const categories = {
 phones: {
   keywords: ["phone", "phones",
 "android", "androids", "andriod", "andriods",
 "iphone", "iphones",
 "mobile phone", "mobile phones",
 "android phone", "android phones",
 "samsung phone", "samsung phones",
 "tecno phone", "tecno phones",
 "infinix phone", "infinix phones",
 "xiaomi phone", "xiaomi phones",
 "oppo phone", "oppo phones",
 "itel phone", "itel phones",
 "nokia phone", "nokia phones",
 "latest phone", "latest phones",
 "cheap phone", "cheap phones",
 "budget phone", "budget phones",
 "flagship phone", "flagship phones",
 "5G phone", "5G phones",
 "dual sim phone", "dual sim phones",
 "camera phone", "camera phones",
 "gaming phone", "gaming phones",
 "tablet", "tablets",
 "android tablet", "android tablets",
 "iPad", "iPads",
 "kids tablet", "kids tablets",
 "smartwatch", "smartwatches",
 "Apple Watch", "Apple Watches",
 "fitness tracker", "fitness trackers",
 "wearable", "wearables",
 "phone accessory", "phone accessories",
 "phone charger", "phone chargers",
 "powerbank", "powerbanks",
 "power bank", "power banks",
 "earbud", "earbuds",
 "headphone", "headphones",
 "bluetooth speaker", "bluetooth speakers",
 "USB cable", "USB cables",
 "screen protector", "screen protectors",
 "phone case", "phone cases",
 "memory card", "memory cards",
 "laptop", "laptops",
 "notebook", "notebooks",
 "MacBook", "MacBooks",
 "student laptop", "student laptops",
 "business laptop", "business laptops",
 "best phone deal", "best phone deals",
 "limited stock phone", "limited stock phones",
 "discount phone", "discount phones",
 "affordable gadget", "affordable gadgets",
 "latest tech", "latest technologies",
 "Byte-Buy deal", "Byte-Buy deals"],
   page: "phone&laptops.html"
 },
 appliances: {
   keywords: [
     "home appliance", "home appliances",
     "household appliance", "household appliances",
     "washing machine", "washing machines",
     "dryer", "dryers",
     "refrigerator", "refrigerators",
     "freezer", "freezers",
     "microwave", "microwaves",
     "oven", "ovens",
     "cooker", "cookers",
     "dishwasher", "dishwashers",
     "vacuum cleaner", "vacuum cleaners",
     "iron", "irons",
     "electric kettle", "electric kettles",
     "blender", "blenders",
     "juicer", "juicers",
     "coffee maker", "coffee makers",
     "toaster", "toasters",
     "rice cooker", "rice cookers",
     "air fryer", "air fryers",
 
     // Kitchen appliances
     "kitchen appliance", "kitchen appliances",
     "cooking appliance", "cooking appliances",
     "gas cooker", "gas cookers",
     "electric cooker", "electric cookers",
     "stove", "stoves",
     "hot plate", "hot plates",
     "pressure cooker", "pressure cookers",
     "food processor", "food processors",
     "grinder", "grinders",
     "mixer", "mixers",
     "water dispenser", "water dispensers",
 
     // Heating & cooling
     "fan", "fans",
     "standing fan", "standing fans",
     "ceiling fan", "ceiling fans",
     "wall fan", "wall fans",
     "table fan", "table fans",
     "air conditioner", "air conditioners",
     "AC", "ACs",
     "heater", "heaters",
     "cooler", "coolers",
 
     // Power & energy
     "generator", "generators",
     "inverter", "inverters",
     "stabilizer", "stabilizers",
     "extension cord", "extension cords",
     "surge protector", "surge protectors",
 
     // Store & deals
     "best appliance deal", "best appliance deals",
     "cheap home appliance", "cheap home appliances",
     "discount appliance", "discount appliances",
     "affordable appliance", "affordable appliances",
     "latest appliance", "latest appliances",
     "Byte-Buy appliance deal", "Byte-Buy appliance deals"
   ],
   page: "appliances.html"
 },
 // 👉 you can add more categories here easily
 HealthBeauty: {
   keywords: ["clothes", "dress", "shoes", "tshirt",
     // General
     "health product", "health products",
     "beauty product", "beauty products",
     "personal care product", "personal care products",
     "skincare product", "skincare products",
     "hair care product", "hair care products",
     "body care product", "body care products",
     "cosmetic", "cosmetics",
     "fragrance", "fragrances",
     "perfume", "perfumes",
     "deodorant", "deodorants",
     "body spray", "body sprays",
 
     // Skin Care
     "face cream", "face creams",
     "moisturizer", "moisturizers",
     "body cream", "body creams",
     "sunscreen", "sunscreens",
     "lotion", "lotions",
     "skin oil", "skin oils",
     "face mask", "face masks",
     "serum", "serums",
     "cleanser", "cleansers",
     "toner", "toners",
     "soap", "soaps",
     "body wash", "body washes",
     "exfoliator", "exfoliators",
     "whitening cream", "whitening creams",
     "anti-aging cream", "anti-aging creams",
 
     // Hair Care
     "shampoo", "shampoos",
     "conditioner", "conditioners",
     "hair oil", "hair oils",
     "hair cream", "hair creams",
     "hair gel", "hair gels",
     "hair spray", "hair sprays",
     "edge control", "edge controls",
     "wig", "wigs",
     "hair extension", "hair extensions",
     "weave", "weaves",
 
     // Personal Care
     "toothpaste", "toothpastes",
     "toothbrush", "toothbrushes",
     "mouthwash", "mouthwashes",
     "razor", "razors",
     "shaving stick", "shaving sticks",
     "shaving cream", "shaving creams",
     "deodorant", "deodorants",
     "sanitary pad", "sanitary pads",
     "menstrual product", "menstrual products",
     "health supplement", "health supplements",
     "vitamin", "vitamins",
 
     // Store/Deals
     "cheap beauty product", "cheap beauty products",
     "discount skincare", "discount skin care",
     "affordable cosmetics", "affordable cosmetic",
     "latest health products", "latest beauty products",
     "Byte-Buy health product", "Byte-Buy health products",
     "best beauty deal", "best beauty deals",
     "limited stock beauty product", "limited stock beauty products"],
   page: "health&beauty.html"
 },
 HomeOffice: {
   keywords: ["home office product", "home office products",
 "uninterrupted power supply", "uninterrupted power supplies",
 "office equipment", "office equipments",
 "home decor", "home decors",
 "office furniture", "office furnitures",
 "power backup", "power backups",
 "eco-friendly product", "eco-friendly products",
 "office supply", "office supplies",
 "home appliance", "home appliances",
 "desk accessory", "desk accessories",
 "lamp", "lamps",
 "humidifier", "humidifiers",
 "vacuum cleaner", "vacuum cleaners",
 "sofa", "sofas",
 "desk", "desks",
 "chair", "chairs",
 "rug", "rugs",
 "generator", "generators",
 "printer", "printers",
 "scanner", "scanners",
 "monitor", "monitors",
 "keyboard", "keyboards",
 "mouse", "mice",
 "pen", "pens",
 "notebook", "notebooks",
 "file cabinet", "file cabinets",
 "shelf", "shelves"],
   page: "home&office.html"
 },
 };
 
 // Find matching category
 let matched = null;
 for (const key in categories) {
 if (categories[key].keywords.some(keyword => val.includes(keyword))) {
   matched = categories[key];
   break;
 }
 }
 // Redirect or alert
 if (matched) {
 location.href = matched.page;
 } else {
 alert("no related content");
 }
 find.innerHTML=''
 }
 searchBtn.addEventListener('click',event=>{
 find4Me()
 })
 find.addEventListener('keydown',(e)=>{
 if(e.key==='Enter'){
 find4Me()
 }
 })
 
//  function startFlashCountdown(endTime) {
//   const tml = document.getElementById("tml");

//   function updateCountdown() {
//     const now = new Date().getTime();
//     const distance = endTime - now;

//     if (distance <= 0) {
//       clearInterval(timer);
//       tml.innerHTML = "Time Left: <b>Expired</b>";
//       return;
//     }

//     // Calculate time left
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Update DOM
//     tml.innerHTML = `Time Left: <b>${hours}h : ${minutes}m : ${seconds}s</b>`;
//   }

//   updateCountdown(); // run once immediately
//   const timer = setInterval(updateCountdown, 1000);
// }

// // Example: sale ends today at midnight
// const flashSaleEnd = new Date();
// flashSaleEnd.setHours(23, 59, 59, 999);
// startFlashCountdown(flashSaleEnd.getTime());

    const fadeElements = document.querySelectorAll('.fadeup');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

fadeElements.forEach(el => observer.observe(el));
