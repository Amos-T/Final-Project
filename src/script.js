// Script.js
const commodities = [{
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

let commoditiesHTML = '';

commodities.forEach((commodity) => {
    commoditiesHTML += `
    <div class="items">
        <img  src=${commodity.image} class="items-image">
        <h3 class="desc">${commodity.name}</h3>

        <div class="price-quantity">
            <div class="price">
                <h4><strong># ${commodity.price}</strong></h4>
            </div>
            
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            
            
        </div>
        <div class="add-reset">
        
            <div class="addToCart">

                <button class="add-btn js-add-btn add-to-cart" 
                data-product-id="${commodity.id}" data-product-name="${commodity.name}" data-product-price= "${commodity.price}">Add to Cart</button>
            </div>
    </div>    

</div>
`;

});

console.log(commoditiesHTML);

document.querySelector('#shop').innerHTML = commoditiesHTML;


// ADD TO CART BUTTON
document.querySelectorAll('.js-add-btn')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const commodityId = button.dataset.commodityId;

            let matchingCommodity;

            cart.forEach((commodity) =>{
                if (commodityId === commodity.commodityId) {
                    matchingCommodity = commodity;
                }
            });

            if (matchingCommodity) {
                matchingCommodity.quantity += 1;
            } else {
            cart.push({
                commodityId: commodityId,

                quantity: 1,
            });
        }

        let cartQuantity = 0;

        cart.forEach((commodity) => {
            cartQuantity += commodity.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

            console.log(cartQuantity);
            console.log(cart);
        });
    });
   
 