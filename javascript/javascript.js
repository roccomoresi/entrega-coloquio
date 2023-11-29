// donate.js

document.getElementById('donateButton').addEventListener('click', function () {
    // Redirige a la página de donación
    window.location.href = './donacion.html';
});

// Obtener el formulario
const form = document.querySelector('.contact-form');

// Agregar un event listener para el envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío por defecto

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  // Validar que los campos no estén vacíos
  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, completa todos los campos.');
    return; // Detener la ejecución si hay campos vacíos
  }

  // Validar el formato del email con una expresión regular simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, introduce un email válido.');
    return; // Detener la ejecución si el email no es válido
  }

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario
    alert('¡Mensaje enviado!'); // Mostrar un mensaje de confirmación
  });

  // Si todo está correcto, podrías enviar el formulario o hacer otras acciones aquí
  // Ejemplo: form.submit();
});


//VALIDACION DEL FORMULARIO PARA DONAR 

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expirationDate = document.getElementById('expirationDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (name === '' || email === '' || cardNumber === '' || expirationDate === '' || cvv === '' || paymentMethod === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!cardNumber.match(/^\d{16}$/)) {
        alert('Ingresa un número de tarjeta válido (16 dígitos).');
        return;
    }

    if (!expirationDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
        alert('La fecha de vencimiento no puede ser anterior a hoy, ingrese una valida (MM/YY).');
        return;
    }

    if (!cvv.match(/^\d{3}$/)) {
        alert('Ingresa un CVV válido (3 dígitos).');
        return;
    }

    // Si pasa todas las validaciones, podrías realizar alguna acción, como enviar el formulario.
    // document.getElementById('paymentForm').submit();
    alert('Formulario validado. ¡Puedes procesar la donación!');
}

