/* js/app.js */

// Catálogo de productos
const productCatalog = {
  1: {
    title: "Thriller - Michael Jackson (CD)",
    price: 15.99,
    image: "static/images/thriller.jpeg",
    category: "cds",
    description: "Álbum icónico de Michael Jackson.",
  },
  2: {
    title: "Back in Black - AC/DC (CD)",
    price: 14.99,
    image: "static/images/acdc.png",
    category: "cds",
    description: "Un clásico del rock.",
  },
  3: {
    title: "Rumours - Fleetwood Mac (CD)",
    price: 16.99,
    image: "static/images/rumours.jpeg",
    category: "cds",
    description: "Uno de los álbumes más vendidos.",
  },
  4: {
    title: "Nevermind - Nirvana (Cassette)",
    price: 9.99,
    image: "static/images/nirvana.jpeg",
    category: "cassettes",
    description: "El álbum que definió una era.",
  },
  5: {
    title: "Abbey Road - The Beatles (Cassette)",
    price: 8.99,
    image: "static/images/beatles.jpg",
    category: "cassettes",
    description: "Un icono de la música.",
  },
  6: {
    title: "The Joshua Tree - U2 (Cassette)",
    price: 10.99,
    image: "static/images/u2.jpg",
    category: "cassettes",
    description: "Álbum legendario de U2.",
  },
  7: {
    title: "The Dark Side of the Moon - Pink Floyd (Vinilo)",
    price: 20.99,
    image: "static/images/pink_floyd.jpeg",
    category: "vinilos",
    description: "Una obra maestra del rock progresivo.",
  },
  8: {
    title: "Led Zeppelin IV - Led Zeppelin (Vinilo)",
    price: 22.99,
    image: "static/images/led_IV.jpg",
    category: "vinilos",
    description: "Álbum emblemático de Led Zeppelin.",
  },
  9: {
    title: "Sgt. Pepper's Lonely Hearts Club Band - The Beatles (Vinilo)",
    price: 21.99,
    image: "static/images/beatles_vinilo.jpg",
    category: "vinilos",
    description: "Un hito en la historia de la música.",
  },
  10: {
    title: "Camiseta - Metallica",
    price: 25.99,
    image: "static/images/cami_metalica.jpeg",
    category: "merchandising",
    description: "Camiseta oficial de Metallica.",
  },
  11: {
    title: "Poster - Queen",
    price: 12.99,
    image: "static/images/queen.jpeg",
    category: "merchandising",
    description: "Poster de la legendaria banda Queen.",
  },
  12: {
    title: "Taza - The Rolling Stones",
    price: 8.99,
    image: "static/images/rolling.jpeg",
    category: "merchandising",
    description: "Taza oficial de The Rolling Stones.",
  },
  13: {
    title: "Gorra - Nirvana",
    price: 18.99,
    image: "static/images/gorra.jpeg",
    category: "otros",
    description: "Gorra con diseño de Nirvana.",
  },
  14: {
    title: "Llavero - Pink Floyd",
    price: 19.99,
    image: "static/images/llavero.jpeg",
    category: "otros",
    description: "Llavero de Pink Floyd.",
  },
  15: {
    title: "Mochila - Led Zeppelin",
    price: 17.99,
    image: "static/images/mochila_led.jpeg",
    category: "otros",
    description: "Mochila de Led Zeppelin.",
  },
};
  
  // Función para mostrar notificaciones en la parte superior
  function showNotification(message) {
    let notification = document.getElementById('notification');
    if (!notification) {
      notification = document.createElement('div');
      notification.id = 'notification';
      document.body.appendChild(notification);
    }
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2000);
  }
  
  // Función para añadir producto al carrito
  function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = productCatalog[id];
    if (!product) return;
    
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id: id, title: product.title, price: product.price, image: product.image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`${product.title} añadido al carrito.`);
    updateCartDropdown();
    updateCartCount();
  }
  
  // Función para eliminar producto del carrito (elimina completamente el producto)
  function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = productCatalog[id];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`${product.title} eliminado del carrito.`);
    updateCartDropdown();
    renderCart();
    updateCartCount();
  }
  
  // Función para vaciar el carrito (se usará al confirmar pedido en checkout)
  function emptyCart() {
    localStorage.removeItem('cart');
    updateCartDropdown();
    renderCart();
    updateCartCount();
  }
  
  // Función para incrementar la cantidad de un producto
  function incrementQuantity(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === id);
    if (item) {
      item.quantity++;
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartDropdown();
      renderCart();
      updateCartCount();
    }
  }
  
  // Función para decrementar la cantidad de un producto (si llega a 0, se elimina)
  function decrementQuantity(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === id);
    if (item) {
      item.quantity--;
      if (item.quantity < 1) {
        cart = cart.filter(item => item.id !== id);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartDropdown();
      renderCart();
      updateCartCount();
    }
  }
  
  // Función para añadir o quitar de favoritos
  function toggleFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const product = productCatalog[id];
    if (!product) return;
    
    const index = favorites.findIndex(item => item.id === id);
    if (index !== -1) {
      favorites.splice(index, 1);
      showNotification(`${product.title} eliminado de favoritos.`);
    } else {
      favorites.push({ id: id, title: product.title, price: product.price, image: product.image });
      showNotification(`${product.title} añadido a favoritos.`);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  // Función para renderizar el dropdown del carrito
  function updateCartDropdown() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const dropdown = document.getElementById('cart-dropdown');
    if (!dropdown) return;
    
    dropdown.innerHTML = '';
    
    if (cart.length === 0) {
      dropdown.innerHTML = '<p>El carrito está vacío.</p>';
      dropdown.classList.add('empty');
    } else {
      dropdown.classList.remove('empty');
      cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <div style="flex:1;">
            <p>${item.title}</p>
            <p>$${item.price} x ${item.quantity}</p>
            <div class="quantity-controls">
              <button onclick="decrementQuantity('${item.id}')" class="btn-decrement" title="Restar">-</button>
              <button onclick="incrementQuantity('${item.id}')" class="btn-increment" title="Sumar">+</button>
            </div>
          </div>
          <button onclick="removeFromCart('${item.id}')" class="btn-remove" title="Eliminar">
            🗑
          </button>
        `;
        dropdown.appendChild(div);
      });
      const footer = document.createElement('div');
      footer.classList.add('dropdown-footer');
      footer.innerHTML = `
        <button onclick="window.location.href='/checkout'">Comprar</button> 
        <button onclick="emptyCart()">Vaciar Carrito</button>
      `;
      dropdown.appendChild(footer);
    }
  }  
  
  
  // Función para actualizar el contador del carrito
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
      cartCountElement.textContent = total;
    }
  }
  
  // Función para renderizar el carrito en carrito.html (si aplica)
  function renderCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    if (!cartItemsContainer) return;
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
      total += item.price * item.quantity;
      const div = document.createElement('div');
      div.classList.add('cart-item');
      div.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div>
          <h4>${item.title}</h4>
          <p>Precio: $${item.price}</p>
          <p>Cantidad: ${item.quantity}</p>
          <div class="quantity-controls">
            <button onclick="decrementQuantity('${item.id}')" class="btn-decrement" title="Restar">-</button>
            <button onclick="incrementQuantity('${item.id}')" class="btn-increment" title="Sumar">+</button>
          </div>
          <button onclick="removeFromCart('${item.id}')" class="btn-remove" title="Eliminar">
            🗑
          </button>
        </div>
      `;
      cartItemsContainer.appendChild(div);
    });
    
    cartTotalContainer.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
  }
  
  // Función para renderizar favoritos (si aplica)
  function renderFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteItemsContainer = document.getElementById('favorite-items');
    if (!favoriteItemsContainer) return;
    favoriteItemsContainer.innerHTML = '';
    
    favorites.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('favorite-item');
      div.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div>
          <h4>${item.title}</h4>
          <p>Precio: $${item.price}</p>
          <button onclick="removeFromFavorites('${item.id}')" class="btn-remove" title="Eliminar de Favoritos">🗑</button>
        </div>
      `;
      favoriteItemsContainer.appendChild(div);
    });
  }
  
  // Función para eliminar de favoritos
  function removeFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(item => item.id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
  }
  
  // Función para poblar dinámicamente los productos en la tienda
  function populateProducts() {
    Object.keys(productCatalog).forEach(function(key) {
      const product = productCatalog[key];
      const container = document.getElementById(product.category + '-row');
      if (container) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <p class="price">$${product.price}</p>
          <button class="add-to-cart" data-id="${key}">Añadir al Carrito</button>
          <button class="add-to-favorites" data-id="${key}">♡ Favorito</button>
        `;
        
        // Agregar un event listener al contenedor del producto
        card.addEventListener('click', function(e) {
          // Si el clic se produjo en un botón (o en un elemento dentro del botón), no redirigir
          if (e.target.closest('.add-to-cart') || e.target.closest('.add-to-favorites')) {
            return;
          }
          // De lo contrario, redirige a producto.html pasando el id del producto  `/producto?id=${key}`;
          window.location.href = `/producto?id=${key}`;
        });
        
        container.appendChild(card);
      }
    });
  }
  
  
  // Al cargar el DOM, primero se poblan los productos y luego se asignan los eventos
  document.addEventListener('DOMContentLoaded', () => {

    // Verifica si el referrer es vacío o no contiene el hostname actual
    if (document.referrer === "" || !document.referrer.includes(window.location.hostname)) {
      // Si no hay referrer o no es el mismo sitio, vacía el carrito
      emptyCart();
      localStorage.removeItem('favorites');
      localStorage.removeItem('orders');
    }

    // Primero, rellenar productos
    populateProducts();
    
    // Luego, asignar eventos a los botones recién creados
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        addToCart(id);
      });
    });
    
    const favoriteButtons = document.querySelectorAll('.add-to-favorites');
    favoriteButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        toggleFavorite(id);
      });
    });
    
    // Actualiza el dropdown del carrito y el contador
    updateCartDropdown();
    updateCartCount();
    
    const confirmOrderButton = document.getElementById('confirm-order');
    if (confirmOrderButton) {
      confirmOrderButton.addEventListener('click', () => {
        emptyCart();
        showNotification("Pedido confirmado. El carrito ha sido vaciado.");
        // Aquí podrías redirigir a una página de confirmación si lo deseas
      });
    }

    // Renderizar carrito y actualizar contador en el panel de pedido
    renderCart();
    updateCartCount();

    // Confirmar el pedido: vaciar el carrito
    const confirmOrder = document.getElementById('confirm-order');
    confirmOrder.addEventListener('click', () => {
      emptyCart();
      showNotification("Pedido confirmado. El carrito ha sido vaciado.");
    });

    // Transición al método de pago: validar que el formulario de cliente esté completo
    const toPaymentBtn = document.getElementById('to-payment');
    toPaymentBtn.addEventListener('click', () => {
      const customerForm = document.getElementById('customer-form');
      if (customerForm.checkValidity()) {
        // Si el formulario es válido, ocultamos la sección de información del cliente
        // y mostramos la sección del método de pago.
        document.getElementById('customer-info').classList.add('hidden');
        document.getElementById('payment-method').classList.remove('hidden');
      } else {
        customerForm.reportValidity();
      }
    });

    // Manejo del pago (simulación)
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showNotification("Pago confirmado. Gracias por su compra.");
      emptyCart();
    });

  });
  