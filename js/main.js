document.addEventListener('DOMContentLoaded', function() {
  // Recuperar el carrito del localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Cargar header de forma asíncrona
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;

      // Una vez cargado el header, buscamos los elementos
      const cartBtn = document.getElementById('cart-btn');
      const cartCount = document.getElementById('cartCount');
      const cartDropdown = document.getElementById('cartDropdown');
      const cartItems = document.getElementById('cartItems');
      const emptyCartBtn = document.getElementById('emptyCartBtn');

      // Verifica si el botón del carrito existe
      if (cartBtn) {
        console.log("El botón del carrito se ha encontrado.");

        // Mostrar el carrito al hacer clic en el icono del carrito
        cartBtn.addEventListener('click', function() {
          console.log("Carrito clickeado");
          cartDropdown.style.display = (cartDropdown.style.display === 'block') ? 'none' : 'block';
          updateCartDropdown();  // Llamar a la función para actualizar los productos en el desplegable
        });
      } else {
        console.error("El botón del carrito no se encuentra.");
      }

      // Lógica para vaciar el carrito
      if (emptyCartBtn) {
        emptyCartBtn.addEventListener('click', function() {
          // Vaciar el carrito
          cart = [];
          // Actualizar el carrito en localStorage
          localStorage.setItem('cart', JSON.stringify(cart));
          // Actualizar el contador del carrito y el desplegable
          updateCartCount();
          updateCartDropdown();
        });
      } else {
        console.error("El botón para vaciar el carrito no se encuentra.");
      }

      // Verificar que 'cartItems' existe antes de añadir el evento
      if (cartItems) {
        cartItems.addEventListener('click', function(e) {
          if (e.target.classList.contains('remove-btn')) {
            const productName = e.target.getAttribute('data-name');
            // Buscar el producto en el carrito
            const product = cart.find(item => item.name === productName);
            
            if (product) {
              // Si la cantidad es mayor a 1, restamos una unidad
              if (product.quantity > 1) {
                product.quantity--;
              } else {
                // Si la cantidad es 1, eliminamos el producto
                cart = cart.filter(item => item.name !== productName);
              }
      
              // Guardar los cambios en localStorage
              localStorage.setItem('cart', JSON.stringify(cart));
              
              // Actualizar la vista
              updateCartCount();
              updateCartDropdown();
            }
          }
        });
      } else {
        console.error("El contenedor de los productos del carrito no se encuentra.");
      }

      // Función para actualizar el contador del carrito
      function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
      }

      // Función para actualizar el desplegable del carrito
      function updateCartDropdown() {
        // Limpiar los productos del carrito en el desplegable
        cartItems.innerHTML = '';
      
        if (cart.length === 0) {
          // Si el carrito está vacío, mostrar un mensaje con texto más pequeño
          cartItems.innerHTML = '<p style="font-size: 14px; color: black;">El carrito está vacío.</p>';
          emptyCartMessage.style.display = 'block';  // Mostrar el mensaje
        } else {
          // Mostrar los productos en el carrito
          cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
      
            // Verificar que el precio sea un número válido antes de aplicar toFixed
            const price = (typeof item.price === 'number' && !isNaN(item.price)) ? item.price.toFixed(2) : 'Precio no disponible';
            
            // Aquí puedes cambiar cómo se muestran los productos (nombre y precio)
            cartItemElement.innerHTML = `
              <div style="margin-bottom: 10px;">
                <p style="font-size: 14px; font-weight: bold;">${item.name}</p>
                <p style="font-size: 14px; color: black;">$${price} x ${item.quantity}</p>
              </div>
              <button class="remove-btn" data-name="${item.name}" style="font-size: 12px;">Eliminar</button>
            `;
            
            cartItems.appendChild(cartItemElement);
          });
          emptyCartMessage.style.display = 'none';
        }
      }

      // Añadir producto al carrito
      const addToCartBtn = document.querySelector('.buy-btn');
      if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
          const productName = document.getElementById('product-name').textContent; // Verifica que este ID existe y tiene el nombre
          const productPrice = parseFloat(document.getElementById('product-price').textContent.replace('Precio: $', '')); // Asegúrate de que el formato del precio es correcto
          
          if (isNaN(productPrice)) {
            console.error("Precio no válido para el producto.");
            return;
          }

          const existingProduct = cart.find(item => item.name === productName);

          if (existingProduct) {
            existingProduct.quantity++;
          } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
          }

          // Guardar el carrito en localStorage
          localStorage.setItem('cart', JSON.stringify(cart));
          
          // Actualizar la vista
          updateCartCount();
          updateCartDropdown();
        });
      } else {
        console.error("El botón para añadir al carrito no se encuentra.");
      }

      // Actualizar el contador al cargar la página
      updateCartCount();

    })
    .catch(err => console.error("Error al cargar el header:", err));

  // ---------------------------
  // Lógica de la barra de búsqueda
  // ---------------------------
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('focus', function() {
      this.placeholder = '';
    });
    searchInput.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        this.placeholder = 'Buscar artista, álbum,...';
      }
    });
  }

  // ---------------------------
  // Lógica de pestañas (si existen)
  // ---------------------------
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Quitar la clase 'active' a todas las pestañas
      tabs.forEach(t => t.classList.remove('active'));
      // Agregar 'active' a la pestaña clicada
      tab.classList.add('active');
      // Ocultar todo el contenido
      contents.forEach(c => c.classList.remove('active'));
      // Mostrar la sección que coincide con data-tab
      const targetId = tab.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

   // ---------------------------
  // Funcionalidad para el formulario de Registro (si existe)
  // ---------------------------
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    // Validación en tiempo real de la contraseña para registro
    const registerPassword = document.getElementById('password');
    const registerPasswordError = document.getElementById('passwordError');
    if (registerPassword) {
      registerPassword.addEventListener('input', function() {
        if (this.value.length < 8) {
          registerPasswordError.textContent = "La contraseña debe tener al menos 8 caracteres.";
        } else {
          registerPasswordError.textContent = "";
        }
      });
    }
    // Evento submit para el formulario de registro
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const password = document.getElementById('password').value;
      const password2 = document.getElementById('password2').value;
      if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
      }
      if (password !== password2) {
        alert("Las contraseñas no coinciden.");
        return;
      }
      // Si las validaciones son correctas, redirigir a la pantalla de inicio de sesión
      window.location.href = "login.html";
    });
  }

    // Funcionalidad para el formulario de Login
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    // Referencias a los elementos
    const loginPassword = document.getElementById('password');
    const loginPasswordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
      // Validación de la contraseña
      if (loginPassword.value.length < 8) {
        loginPasswordError.textContent = "La contraseña debe tener al menos 8 caracteres.";
      } else {
        loginPasswordError.textContent = "";
        // Aquí podrías realizar alguna acción adicional, como enviar datos al servidor, etc.
        // Redirige a index.html
        window.location.href = "index.html";
      }
    });
  }
});
