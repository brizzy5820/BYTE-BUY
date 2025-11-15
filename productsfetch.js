
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
  
    const oldPrice = data.oldPrice ? data.oldPrice.toLocaleString() : "";
    const price = data.price ? data.price.toLocaleString() : "";
    const imageUrl = data.imageUrl ? data.imageUrl : "";
    const itemsLeft = data.itemsLeft !== undefined ? data.itemsLeft : null;
  let progressFill = 0;
if (data.flashTotal && data.itemsLeft !== undefined) {
  progressFill = Math.round((data.itemsLeft / data.flashTotal) * 100);
}

// Decide color based on stock left
let progressColor =
  data.itemsLeft <= 9
    ? "linear-gradient(90deg, #ef4444, #dc2626)" // red when low stock
    : "linear-gradient(90deg, #3b82f6, #2563eb)";
    const name = data.name ? data.name : "";
    containerBucket += `
    <div class="flash-card">
     <article>
      <a href="modal.html?id=${doc.id}" class="product">
       <div> ${discount > 0 ? `<div class="discount-badge">-${discount}%</div>` : ""}
        <img src="${imageUrl}" alt="${name}">
        <p class="desc">${name}</p>
        <p class="price">₦${price}</br>
        <span class="old-price">${oldPrice}</span></p>
        ${itemsLeft !== null ? `<p class="items-left">${itemsLeft} items left</p>` : ""}

         <div class="progress-bar">
   <div class="progress"style="width:${progressFill}%; background:${progressColor};">
      </div>
</div>

      </a>
     </article>
    </div>
    `;
  })
  container.innerHTML=containerBucket
  }
  // loadSection('ID','collectionName')
  loadSection('item1','Flash-sales' )
  loadSection('blockI', 'TopDealsHomeOffice')
  loadSection('blockII', 'TopDealsHomeAppliances')
    loadSection('blockII', 'SmartPhones')