
// CART
const cart = [];
let cartQuantity = 0; // Initialize cartQuantity variable

// ADD TO CART BUTTON
document.querySelectorAll('.js-add-btn')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;

            let matchingItem = cart.find((item) => item.productId === productId);

            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                cart.push({
                    productId: productId,
                    quantity: 1
                });
            }

            cartQuantity += 1; // Increment cartQuantity

            // const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
            // document.querySelector('.cartAmount').textContent = cartQuantity;

            console.log(cart);

            console.log(cartQuantity);
            console.log(cart);
        });
    });
