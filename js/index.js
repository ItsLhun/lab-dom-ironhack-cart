// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector('.price span').textContent);
  let quantity = Number(product.querySelector('.quantity').children[0].value);
  let subtotal = price * quantity;
  product.querySelector('.subtotal').textContent = `$${subtotal}`;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalPrice = 0;
  const productElements = document.querySelectorAll('.product');
  for (const product of productElements) {
    totalPrice += updateSubtotal(product);
  }
  // ITERATION 3
  const totalDisplayElement = document.querySelector('#total-value');
  totalDisplayElement.children[0].textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtonElements = document.querySelectorAll('.btn.btn-remove');
  console.dir(removeButtonElements);
  for (const button of removeButtonElements) {
    button.addEventListener('click', (event) => {
      let productElement = event.target.parentElement.parentElement;
      productElement.parentElement.removeChild(productElement);
    });
  }

  console.log(removeButtonElements);
  //... your code goes here
});
