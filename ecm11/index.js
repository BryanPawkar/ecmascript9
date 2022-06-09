//importar modulos desde la función 
const btn = document.getElementById("btn"); 

btn.addEventListener('click', async function(){
    const module = await import("./file.js"); 
    module.hola(); 
})

//Numeros grandes

const bigNumber = 9007199254740991n; 
const anotherBigNumber = BigInt(9007199254740991);
console.log(bigNumber); 
console.log(anotherBigNumber); 

//Promise all

const promise1 = new Promise((resolve, reject) => reject("rechazado"));
const promise2 = new Promise((resolve, reject) => resolve("aprobado"));
const promise3 = new Promise((resolve, reject) => resolve("aprobado 1"));
const promise4 = new Promise((resolve, reject) => reject("rechazado 1"));

Promise.allSettled([promise1, promise2, promise3, promise4])
.then(response => console.log(response))

//valores por default
 const valor = null ?? "como no hay nada yo soy el valor por default"; 
 console.log(valor); 
 const valor1 = "yo si tengo valor" ?? "pero yo estoy aqui por si acaso -.-";
 console.log(valor1); 

 //asignar undefined para que no se rompa el codigo

 const usuario = {}; 
 console.log(usuario?.profile?.email); 