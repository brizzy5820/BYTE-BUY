const firebaseConfig = {
    apiKey: "AIzaSyByNiud6xGiCo7_7SDzdeQ8Ij2_h5P_RFs",
    authDomain: "bytebuy-app-546b1.firebaseapp.com",
    projectId: "bytebuy-app-546b1",
    storageBucket: "bytebuy-app-546b1.appspot.com",
    messagingSenderId: "604573096583",
    appId: "1:604573096583:web:ac924bd0d28c71f30df622"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // 
  async function loadSection(sectionId, collectionName) {
  const container = document.querySelector(`#${sectionId}`);
  
  let containerBucket=""
  
  const snapshot = await db.collection(collectionName).orderBy("createdAt", "desc").limit().get()
  snapshot.forEach(doc => {
    const data = doc.data();
    const discount = data.oldPrice
      ? Math.round(((data.oldPrice - data.price) / data.oldPrice) * 100)
      : 0;
  
    const oldPrice = data.oldPrice ? `₦${data.oldPrice.toLocaleString()}`: "";
    const price = data.price ? data.price.toLocaleString() : "";
    const imageUrl = data.imageUrl ? data.imageUrl : "";
    const name = data.name ? data.name : "";
    containerBucket += `
     <article class="Top-card">
      <a href="modal.html?id=${doc.id}"   target="_blank" class="product">
       <div> ${discount > 0 ? `<div class="discount-badge">-${discount}%</div>` : ""}
        <img src="${imageUrl}" alt="${name}">
        <h3>${name}</h3>
        <div class="new-price">₦${price}</div>
        <div class="old-price">${oldPrice}</div></div>
      </a>
     </article>
    `;
  });
  container.innerHTML=containerBucket
// const find= document.getElementById('searchInput')
// find.addEventListener("input", () => {
// const filter = find.value.toLowerCase();
// const cards = container.querySelectorAll(".Top-card");
// cards.forEach(card => {
// const text = card.textContent.toLowerCase();
// card.style.display = text.includes(filter) ? "" : "none";
// });
// })
  }
  const images = [
    "image/phonesz&tabletimage/1168-384-1Phones&TabletBanner.jpg",
    "image/phonesz&tabletimage/1168-384Phones&TabletBanner.jpg",
  ];
  const imgElement = document.getElementById("scrollImage");
  // const flip = document.getElementById("advertBannerIII");
  const speed = 1.1; // lower = slower, higher = faster
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScroll;
    const frameIndex = Math.min(images.length - 1, Math.floor(scrollFraction * images.length * speed));
    imgElement.classList.add("swapping");
    imgElement.src = images[frameIndex];
    setTimeout(() => imgElement.classList.remove("swapping"), 300);
  });
  // Bill Baord Rotation
  const slider = document.getElementById("slider");
  let angle = 0;
  function next() {
    angle -= 120;
    slider.style.transform = `rotateY(${angle}deg)`;
  }
  document.getElementById("next").addEventListener("click", () => {
    next()
  });
  document.getElementById("prev").addEventListener("click", () => {
    angle += 120;
    slider.style.transform = `rotateY(${angle}deg)`;
  });
  setInterval(() => {
    next()
  }, 3700)
  
 

  loadSection('blockI', 'LimitedStockDeals(phones&tablets)')
  loadSection('blockII', 'SmartPhones')
  loadSection('blockIII', 'TopDeals(phones&tabs)')
  loadSection('blockIV', 'featurephones')
  loadSection('blockV', 'powerbanks')
  loadSection( 'blockVI', 'accessoriesandmore(phones&tab)')
  loadSection('blockVIII', 'itelOfficial')
loadSection('blockVII', 'phones_tabs_advertI')

// const fsearchBtn= document.getElementById('searchInput')
