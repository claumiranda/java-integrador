// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
    'use strict'
  
    // Estilos de validación de Bootstrap personalizado
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle, y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

// Formulario-Back 
// *Descuentos = estudiante: %80; Trainee: 50%; Junior: 15%; (entrada: $200)

// Precios y descuentos
const PRICE_PER_TICKET = 200;
const DISCOUNTS = {
    estudiante: 0.80,  // 80% de descuento
    trainee: 0.50,     // 50% de descuento
    junior: 0.15       // 15% de descuento
};

function calculateTotal() {
    // Obtener los valores del formulario
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const category = document.getElementById('category').value;
    
    if (isNaN(quantity) || quantity <= 0) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }
    
    // Calcular el precio con descuento
    const discount = DISCOUNTS[category] || 0;
    const priceAfterDiscount = PRICE_PER_TICKET * (1 - discount);
    const totalPrice = priceAfterDiscount * quantity;
    
    // Mostrar el total
    document.getElementById('total').value = `$${totalPrice.toFixed(2)}`;
}