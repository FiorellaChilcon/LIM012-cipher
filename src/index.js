import cipher from './cipher.js';

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const change = document.getElementById('change');
let value = true;
const changeIt = () => {
  value = value ? false : true;
  if (value) {
    option1.innerHTML = 'MENSAJE';
    option2.innerHTML = 'CIFRADO';
  } else {
    option1.innerHTML = 'CIFRADO';
    option2.innerHTML = 'MENSAJE';
  }
}
change.addEventListener('click', changeIt);
const show1 = document.getElementById('show1');
const second = document.getElementById('second');
show1.addEventListener('click', () => {
  const numero = document.getElementById('numberSelected').value;
  const cadena = document.getElementById('first').value;
  if (value) {
    second.value = cipher.encode(numero, cadena);
  } else {
    second.value = cipher.decode(numero, cadena);
  }
});