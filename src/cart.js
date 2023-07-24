// cart.js
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

let itemsHTML = '';

items.forEach((item) => {
    itemsHTML += `
    <div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money"># 135,000</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money"># 400</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money"># 135,400</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money"># 900</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money"># 136,300</div>
          </div>

          <button class="place-order-button button-primary">
          <a href="orders.html">Place your order</a>
          </button>
        </div>
      </div>
    </div>
`;
});

itemsHTML += `
    <div class="order-summary">
      <div class="cart-item-container">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>
        <div class="cart-item-details-grid">
          <img class="product-image"
            src=${item.image}>
        <div class="cart-item-details">
          <div class="product-name">
            ${item.name}
          </div>
          <div class="product-price">
            # ${item.price}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${item.quantity}</span>
            </span>
            <button class="update-quantity-link link-primary">
              Update
            </button>
            <button class="delete-quantity-link link-primary">
              Delete
            </button>
          </div>
        </div>
        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-1">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-1">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                # 400 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-1">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                # 900 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;


console.log(itemsHTML);

document.querySelector('.items').innerHTML = itemsHTML;

// cart functionality

let cart = [];

document.querySelector('.items').addEventListener('click', (event) => {
    if (event.target.classList.contains('js-add-btn')) {
      const itemId = event.target.getAttribute('data-id');
      const itemToAdd = items.find((item) => item.id === itemId);
      if (itemToAdd) {
        const existingCartItem = cart.find((item) => item.id === itemId);
        if (existingCartItem) {
          existingCartItem.quantity++;
        } else {
          cart.push({
            id: itemToAdd.id,
            productName: itemToAdd.name,
            price: itemToAdd.price,
            quantity: 1,
          });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
      }
    }
  });

function updateCartUI() {
  const cartItemsContainer = document.querySelector('#cart-items');
  if (!cartItemsContainer) return; // Check if #cart-items exists

  cartItemsContainer.innerHTML = '';

  cart.forEach((item) => {
    cartItemsContainer.innerHTML += `
      <div class="cart-item">
          <div class="item-details">
              <span>${item.productName}</span>
              <span>Price: # ${item.price}</span>
              <span>Quantity: ${item.quantity}</span>
          </div>
      </div>
    `;
  });

  //update cart quantity

  let cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelector('.cartAmount').textContent = cartQuantity;
}


document.addEventListener('DOMContentLoaded', () => {
  const cartData = localStorage.getItem('cart');
  if (cartData) {
    cart = JSON.parse(cartData);
    updateCartUI();
    // Update cart quantity
    let cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cartAmount').textContent = cartQuantity;
}
});
