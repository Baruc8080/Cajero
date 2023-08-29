// Obtener elementos del DOM
const customerBalanceElement = document.getElementById('customer-balance'); // Elemento para mostrar el saldo del cliente
const transactionAmountElement = document.getElementById('transaction-amount'); // Elemento para ingresar la cantidad de transacción
const depositButton = document.getElementById('deposit-button'); // Botón para depositar
const withdrawButton = document.getElementById('withdraw-button'); // Botón para retirar
const generateCvButton = document.getElementById('generate-cv-button'); // Botón para generar código de CV


// Variables de estado
let customerBalance = 50000; // Saldo inicial del cliente
let depositCount = 0; // Contador de depósitos realizados en el día
let withdrawCount = 0; // Contador de retiros realizados en el día


// Event listener para el botón de depósito
depositButton.addEventListener('click', () => {
  const amount = parseInt(transactionAmountElement.value); // Obtener la cantidad de la transacción como número entero
  if (isNaN(amount)) {
    alert('Ingresa una cantidad válida.'); // Mostrar alerta si la cantidad no es válida
    return;
  }
  
  if (amount > 50000) {
    alert('No puedes depositar más de 50,000 por día.'); // Mostrar alerta si la cantidad de depósito excede el límite
    return;
  }

  if (depositCount >= 4) {
    alert('Has alcanzado el límite de 4 depósitos al día.'); // Mostrar alerta si se supera el límite de depósitos
    return;
  }

  customerBalance += amount; // Actualizar el saldo del cliente
  depositCount++; // Incrementar el contador de depósitos
  customerBalanceElement.textContent = `Cantidad de Dinero: $${customerBalance}`; // Actualizar la visualización del saldo
  transactionAmountElement.value = ''; // Limpiar el campo de cantidad de transacción
});

// Event listener para el botón de retiro
withdrawButton.addEventListener('click', () => {
  const amount = parseInt(transactionAmountElement.value); // Obtener la cantidad de la transacción como número entero
  if (isNaN(amount)) {
    alert('Ingresa una cantidad válida.'); // Mostrar alerta si la cantidad no es válida
    return;
  }

  if (amount > 30000) {
    alert('No puedes retirar más de 30,000 por día.'); // Mostrar alerta si la cantidad de retiro excede el límite
    return;
  }

  if (withdrawCount >= 5) {
    alert('Has alcanzado el límite de 5 retiros al día.'); // Mostrar alerta si se supera el límite de retiros
    return;
  }

  if (amount > customerBalance) {
    alert('No tienes suficiente saldo para realizar este retiro.'); // Mostrar alerta si el retiro excede el saldo disponible
    return;
  }

  customerBalance -= amount; // Actualizar el saldo del cliente
  withdrawCount++; // Incrementar el contador de retiros
  customerBalanceElement.textContent = `Cantidad de Dinero: $${customerBalance}`; // Actualizar la visualización del saldo
  transactionAmountElement.value = ''; // Limpiar el campo de cantidad de transacción
});


// Event listener para el botón de generar código de CV
generateCvButton.addEventListener('click', () => {
  const randomCv = Math.floor(Math.random() * 900) + 100; // Generar un número aleatorio de 3 dígitos
  alert(`Tu código de CV es: ${randomCv}`); // Mostrar el código de CV generado en una alerta

});


