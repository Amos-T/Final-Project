const items = [{
    id: "shirt47484",
    image: "./images/t-shirt.avif",
    name: "T-Shirt",
    price: "2500",
}, {
    id:"brugge35357",
    image: "images/brugge%20wristwatch.avif",
    name: "Brugge Wrist Watch",
    price: "50000",
}, {
    id: "socks736378",
    image: "images/colorful%20socks.webp",
    name: "Colorful Socks",
    price: "2000",
},{
    id: "cap9643537",
    image: "images/face%20cap.avif",
    name: "Cap",
    price: "3000",
},{
    id: "nike53799",
    image: "images/nike%20air.avif",
    name: "Sneaker",
    price: "35000",
},{
    id: "Shirt8900865",
    image:"./images/shirt.avif",
    name: "Shirt",
    price: "7000",
},{
    id: "stockings353737",
    image:"./images/stockings.avif",
    name: "Stockings",
    price: "2500",
},{
    id: "sandal-973553",
    image: "images/slide%20sandal.avif",
    name: "Slide Sandal",
    price: "7500" ,
        
}];

let itemsHTML = ""

items.forEach((item) => {
    itemsHTML += `
    <div class="order-container">
          
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>August 12</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div># ${items.total}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
            </div>
          </div>

          <div class="order-details-grid">
            <div class="product-image-container">
              <img src="${item.image}" width="110px" height="110px">
            </div>

            <div class="product-details">
              <div class="product-name">
                ${item.name}
              </div>
              <div class="product-delivery-date">
                Arriving on: August 15
              </div>
              <div class="product-quantity">
                Quantity: ${item.quantity}
              </div>
              <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html">
                <button class="track-package-button button-secondary">
                  <a href="tracking.html">Track package</a>
                </button>
              </a>
            </div>

            <div class="product-image-container">
              <img src="${item.image}" width="110px" height="110px">
            </div>

            <div class="product-details">
              <div class="product-name">
                ${item.name}
              </div>
              <div class="product-delivery-date">
                Arriving on: August 19
              </div>
              <div class="product-quantity">
                Quantity: ${item.quantity}
              </div>
              <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html">
                <button class="track-package-button button-secondary">
                  <a href="tracking.html">Track package</a>
                </button>
              </a>
            </div>
          </div>
        </div>
    `
});
