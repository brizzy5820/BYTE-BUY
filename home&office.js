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
  
  //Section ID Collection Name.  
  async function loadSection(sectionId, collectionName) {
  const container = document.querySelector(`#${sectionId}`);
  
  let containerBucket=""

  const snapshot = await db.collection(collectionName).orderBy("createdAt", "desc").limit().get()
  snapshot.forEach(doc => {
    const data = doc.data();
    const discount = data.oldPrice
      ? Math.round(((data.oldPrice - data.price) / data.oldPrice) * 100)
      : 0;
  
    const oldPrice = data.oldPrice ? `₦${data.oldPrice.toLocaleString()}` : "";
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
  }
  
  loadSection('blockI', 'TopDealsHomeOffice')
  loadSection('blockII', 'BestPriceHomeOffice')
  loadSection('blockIII', 'EcoflowStoreHomeOffice')
  loadSection('blockIV', 'TrendingItemsHomeOffice')
  loadSection('blockV', 'BestSellersHomeOffice')
  loadSection( 'blockVI', 'HithiumStoreHomeOffice')
