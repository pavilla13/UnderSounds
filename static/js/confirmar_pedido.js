// confirmar_pedido.js

// Función para guardar el pedido en localStorage
function saveOrder() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Si no hay artículos en el carrito, no se guarda nada
    if (cart.length === 0) return;
  
    // Calcula el número total de artículos y el precio total
    let numItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    let totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
    // Crea el objeto pedido con la fecha actual
    let order = {
      numItems: numItems,
      totalPrice: totalPrice.toFixed(2),
      date: new Date().toLocaleDateString()
    };
  
    // Recupera los pedidos ya guardados o inicializa un array vacío
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
  
    localStorage.setItem('orders', JSON.stringify(orders));
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
      paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveOrder();
        showNotification("Pago confirmado. Gracias por su compra.");
        emptyCart();
        window.location.href = "/mis_compras";
      });
    }
  });
  