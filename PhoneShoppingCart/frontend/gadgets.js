const features = document.getElementById('features');
const cartButton = document.getElementById('button');
const cartNumber = document.getElementById('cart-number');
const quantityNumber = document.getElementById('quantity-number');
const cartPage = document.getElementById('cartPage');
const cartIcon = document.getElementById('cart-icon');
const removeIcon = document.querySelector('#icon');
const cartProducts = document.getElementById('cart-products');
const clearCarts = document.getElementById('clear-carts');
const totalPay = document.getElementById('total-payment');

let featuresItem;
let myCart = [];

// Fetch products from backend
async function fetchProducts() {
  const response = await fetch('/api/products');
  return await response.json();
}

// Fetch cart from backend
async function fetchCart() {
  const token = localStorage.getItem('token');
  const response = await fetch('/api/cart', {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  myCart = (await response.json())?.items || [];
  calculation();
  cartFunction();
}

// Add to cart
async function addToCart(id) {
  const token = localStorage.getItem('token');
  const response = await fetch('/api/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ productId: id, quantity: parseInt(quantityNumber.innerHTML) }),
  });
  myCart = (await response.json()).items;
  calculation();
  cartFunction();
}

// Generate features table
function generateFeatures() {
  if (!featuresItem) return;
  const { id, name, weight, height, battery, capacity, amount } = featuresItem;
  features.innerHTML = `
    <thead>
      <tr>
        <th scope="col">INFO</th>
        <th scope="col">Amount Range</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Name</td><td>${name}</td></tr>
      <tr><td>Weight</td><td>${weight}</td></tr>
      <tr><td>Height</td><td>${height}</td></tr>
      <tr><td>Battery Health</td><td>${battery}</td></tr>
      <tr><td>Capacity</td><td><i class="bi bi-skip-backward"></i> ${capacity} <i class="bi bi-skip-forward"></i></td></tr>
      <tr><td>Amount</td><td>$ ${amount}</td></tr>
    </tbody>
  `;
}

// Update cart display
function cartFunction() {
  cartPage.classList.add('active');
  clearCarts.style.display = 'inline-flex';
  if (myCart.length !== 0) {
    cartProducts.innerHTML = myCart.map(item => {
      const { productId, quantity } = item;
      return `
        <div class="cart-item" id="cartItem">
          <img width="300" src="${productId.image || ''}"/>
          <div class="details">
            <div class="detailsOne">
              <h4>${productId.name}</h4>
              <h4 class="amount">$ ${productId.amount}</h4>
              <h4>${productId.capacity}</h4>
              <i onclick="removeItem('${productId._id}')" class="bi bi-x-lg"></i>
            </div>
            <div class="quantity" style="display: flex; flex-direction: row;">
              <i onclick="decrement('${productId._id}')" class="bi bi-dash-lg"></i>
              <span id="quantity-number">${quantity}</span>
              <i onclick="increment('${productId._id}')" class="bi bi-plus-lg"></i>
            </div>
            <span class="totalNumber">$ ${quantity * productId.amount}</span>
          </div>
        </div>
      `;
    }).join('');
    const total = myCart.reduce((sum, item) => sum + item.quantity * item.productId.amount, 0);
    totalPay.innerText = `Total Payment: $ ${total}`;
  } else {
    cartProducts.innerHTML = '<h3>Your cart is empty</h3>';
    totalPay.innerText = 'Total Payment: $ 0';
  }
  cartProducts.style.textAlign = 'center';
}

// Quantity controls
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');

plus.addEventListener('click', () => {
  quantityNumber.innerHTML = Number(quantityNumber.innerHTML) + 1;
});

minus.addEventListener('click', () => {
  if (Number(quantityNumber.innerHTML) >= 2) {
    quantityNumber.innerHTML = Number(quantityNumber.innerHTML) - 1;
  }
});

// Cart number calculation
function calculation() {
  cartNumber.innerHTML = myCart.reduce((sum, item) => sum + item.quantity, 0);
}

// Remove item
async function removeItem(id) {
  const token = localStorage.getItem('token');
  await fetch(`/api/cart/remove/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` },
  });
  await fetchCart();
}

// Increment quantity
async function increment(id) {
  await addToCart(id);
}

// Decrement quantity
async function decrement(id) {
  const token = localStorage.getItem('token');
  await fetch(`/api/cart/decrement/${id}`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
  });
  await fetchCart();
}

// Initialize product list
async function init() {
  const products = await fetchProducts();
  const list1 = document.getElementById('list1');
  const list2 = document.getElementById('list2');
  const list3 = document.getElementById('list3');
  const list4 = document.getElementById('list4');

  // Update product lists
  list1.innerHTML = products.slice(0, 7).map(p => `<li id="${p.id}" class="phone-link">${p.name}</li>`).join('');
  list2.innerHTML = products.slice(7, 14).map(p => `<li id="${p.id}">${p.name}</li>`).join('');
  list3.innerHTML = products.slice(14, 21).map(p => `<li id="${p.id}">${p.name}</li>`).join('');
  list4.innerHTML = products.slice(21).map(p => `<li id="${p.id}">${p.name}</li>`).join('');

  // Add event listeners
  products.forEach(product => {
    const element = document.getElementById(product.id);
    if (element) {
      element.addEventListener('click', () => {
        featuresItem = product;
        generateFeatures();
      });
    }
  });

  // Cart button
  cartButton.addEventListener('click', () => {
    if (featuresItem) addToCart(featuresItem._id);
  });

  // Cart controls
  cartIcon.addEventListener('click', cartFunction);
  removeIcon.addEventListener('click', () => cartPage.classList.remove('active'));
  clearCarts.addEventListener('click', async () => {
    const token = localStorage.getItem('token');
    await fetch('/api/cart/clear', {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    myCart = [];
    calculation();
    cartFunction();
  });

  // Fetch initial cart
  if (localStorage.getItem('token')) await fetchCart();
}

init();

// Scroll controls
const scrollContainer = document.getElementById('part-one');
const backBtn = document.getElementById('backward');
const forwardBtn = document.getElementById('forward');

scrollContainer.addEventListener('wheel', e => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});

forwardBtn.addEventListener('click', () => {
  scrollContainer.scrollLeft += 300;
});

backBtn.addEventListener('click', () => {
  scrollContainer.scrollLeft -= 300;
});