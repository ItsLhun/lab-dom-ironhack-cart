// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector('.price span').textContent);
  let quantity = Number(product.querySelector('.quantity').children[0].value);
  let subtotal = price * quantity;
  product.querySelector('.subtotal').children[0].textContent = `${subtotal}`;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
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
  let productNameInput = document.querySelector(
    '.create-product input[type=text]'
  );
  let productPriceInput = document.querySelector(
    '.create-product input[type=number]'
  );

  const productWrapElement = document.createElement('tr');
  productWrapElement.classList.add('product');

  //name
  const productNameWrapElement = document.createElement('td');
  productWrapElement.classList.add('name');
  const innerNameElement = document.createElement('span');
  innerNameElement.textContent = productNameInput.value;
  productNameWrapElement.appendChild(innerNameElement);

  //price
  const productPriceWrapElement = document.createElement('td');
  productPriceWrapElement.classList.add('price');
  productPriceWrapElement.textContent = '$';
  const innerPriceElement = document.createElement('span');
  innerPriceElement.textContent = Number(productPriceInput.value)
    .toFixed(2)
    .toString();
  productPriceWrapElement.appendChild(innerPriceElement);

  //quantity
  const productQuantityWrapElement = document.createElement('td');
  productQuantityWrapElement.classList.add('quantity');
  const productQuantityInput = document.createElement('input');
  productQuantityInput.setAttribute('type', 'number');
  productQuantityInput.setAttribute('value', '0');
  productQuantityInput.setAttribute('min', '0');
  productQuantityInput.setAttribute('placeholder', 'Quantity');
  productQuantityWrapElement.appendChild(productQuantityInput);

  //subtotal
  const productSubtotalWrapElement = document.createElement('td');
  productSubtotalWrapElement.classList.add('subtotal');
  productSubtotalWrapElement.textContent = '$';
  const innerSubtotalElement = document.createElement('span');
  innerSubtotalElement.innerText = 0;
  productSubtotalWrapElement.appendChild(innerSubtotalElement);

  //action btn
  const productRemoveWrapElement = document.createElement('td');
  productRemoveWrapElement.classList.add('action');
  const productRemoveButton = document.createElement('button');
  productRemoveButton.classList.add('btn');
  productRemoveButton.classList.add('btn-remove');
  productRemoveButton.innerText = 'Remove';
  productRemoveWrapElement.appendChild(productRemoveButton);
  productRemoveButton.addEventListener('click', (event) => {
    let productElement = event.target.parentElement.parentElement;
    productElement.parentElement.removeChild(productElement);
  });

  productWrapElement.appendChild(productNameWrapElement);
  productWrapElement.appendChild(productPriceWrapElement);
  productWrapElement.appendChild(productQuantityWrapElement);
  productWrapElement.appendChild(productSubtotalWrapElement);
  productWrapElement.appendChild(productRemoveWrapElement);

  productNameInput.value = '';
  productPriceInput.value = 0;
  document.querySelector('#cart > tbody').appendChild(productWrapElement);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtonElements = document.querySelectorAll('.btn.btn-remove');
  for (const button of removeButtonElements) {
    button.addEventListener('click', (event) => {
      let productElement = event.target.parentElement.parentElement;
      productElement.parentElement.removeChild(productElement);
    });
  }

  //create listener
  document.querySelector('#create').addEventListener('click', createProduct);
});
