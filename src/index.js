import cipher from './cipher.js';
const change = document.getElementById("change");

const changeIt = () => {
   const option1 = document.getElementById("option1");
   const option2 = document.getElementById("option2");
   const show1 = document.getElementById("show1");
   const show2 = document.getElementById("show2");
   let result=change.classList.toggle('myStyle');
   if (result) {
      show1.classList.add('disappear');
      show2.classList.remove('disappear');
      change.style.background='#45FF16';
      option1.innerHTML = "CIFRADO";
      option2.innerHTML = "MENSAJE";
   } else {
      show1.classList.remove('disappear');
      show2.classList.add('disappear');
      change.style.background='red';
      option1.innerHTML = "MENSAJE",
         option2.innerHTML = "CIFRADO";
   }
}

// let value = true;
// const changeIt = () => {
//    value = value? false : true ;
//    console.log(value);
   
//    return value;
// }


change.addEventListener("click", changeIt);
const show1 = document.getElementById("show1");
const second = document.getElementById("second");
show1.addEventListener("click", () => {
      const numero = document.getElementById("numberSelected").value;
      const cadena = document.getElementById("first").value;
      second.value = cipher.encode(numero, cadena);
   
});
// let valor = changeIt();
// show1.addEventListener("click", () => {
//    if(valor==false) {
//       const numero = document.getElementById("numberSelected").value;
//       const cadena = document.getElementById("first").value;
//       second.value = cipher.encode(numero, cadena);
//    } else if(valor==true) {
//       const numero = document.getElementById("numberSelected").value;
//       const cadena = document.getElementById("first").value;
//       second.value = cipher.decode(numero, cadena);
//    }
   
// });

const show2 = document.getElementById("show2");
show2.addEventListener("click", () => {
   const numero = document.getElementById("numberSelected").value;
   const cadena = document.getElementById("first").value;
   second.value = cipher.decode(numero, cadena);
});