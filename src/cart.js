export const cart = [{
  productId: 'brugge35357',
  quantity: 2,
}, {
  productId: 'nike53799',
  quantity: 1,
}];

export function addToCart(productId) {
  let matchingProduct;

  cart.forEach((cartItem) => {
      if (productId === cartItem.productId){
          matchingProduct = cartItem;
      }
  })

  if (matchingProduct) {
      matchingProduct.quantity += 1;
  } else {
      cart.push({
          productId: productId,
          quantity: 1,
      });
  }
}
