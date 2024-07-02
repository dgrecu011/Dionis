let cart = [];

function addToCart(id, name, price) {
  let existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: id,
      name: name,
      price: price,
      quantity: 1,
    });
  }

  updateCartIcon();
  saveCart();

  showAddedToCartBand();
}

function displayCart() {
  let cartItems = document.getElementById("cartItems");
  let cartTotalAmount = document.getElementById("cartTotalAmount");
  let cartOutput = "";

  let totalAmount = 0;
  cart.forEach((item) => {
    let itemTotal = item.price * item.quantity;
    totalAmount += itemTotal;
    cartOutput += `
      <div class="flex justify-between items-center mb-2">
        <span>${item.name}</span>
        <div class="flex items-center">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-lg mr-2" onclick="decreaseQuantity('${item.id}')">-</button>
          <span>${item.quantity}</span>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-lg ml-2" onclick="increaseQuantity('${item.id}')">+</button>
          <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-lg ml-2" onclick="removeItem('${item.id}')">Șterge</button>
        </div>
        <span>${itemTotal} Lei</span>
      </div>
    `;
  });

  cartItems.innerHTML = cartOutput;
  cartTotalAmount.textContent = totalAmount + " Lei";
}

function updateCartIcon() {
  let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("navCart").innerHTML = `
    <a class="nav-link text-white" href="cart.html">
      <i class="fas fa-shopping-cart mr-1"></i> Coș (${totalQuantity})
    </a>`;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  let cartData = localStorage.getItem("cart");
  if (cartData) {
    cart = JSON.parse(cartData);
    displayCart();
    updateCartIcon();
  }
}

function decreaseQuantity(id) {
  let selectedItem = cart.find((item) => item.id === id);

  if (selectedItem && selectedItem.quantity > 1) {
    selectedItem.quantity--;
    displayCart();
    saveCart();
  }
}

function increaseQuantity(id) {
  let selectedItem = cart.find((item) => item.id === id);

  if (selectedItem) {
    selectedItem.quantity++;
    displayCart();
    saveCart();
  }
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
  displayCart();
  saveCart();
}

function clearCart() {
  cart = [];
  displayCart();
  saveCart();
}

function finalizeOrder() {
  if (cart.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Coșul tău este gol!",
      text: "Adaugă produse în coș înainte de a finaliza comanda.",
      confirmButtonText: "OK",
    });
    return;
  }

  cart = [];
  saveCart();
  displayCart();
  updateCartIcon();

  Swal.fire({
    icon: "success",
    title: "Comanda a fost plasată cu succes!",
    text: "Veți fi redirecționat la pagina principală.",
    confirmButtonText: "OK",
  }).then(() => {
    window.location.href = "index.html";
  });
}

loadCart();
