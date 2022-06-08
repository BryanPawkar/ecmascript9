//aplanar arreglos
let array = [1, 3,4 , [4,5,6], [7,8,[8,3,4]]]; 
array.flat(); 
//mapear y hacer determinada función con cada elemento de un array
let array1 = [1,2,3,4,4,5]; 
array1.flatMap(value =>[value, value*2]); 

//eliminar espacios en blanco

let hola = "         Holaaaaa"; 
console.log(hola.trimStart());
let bye = "bye               "; 
console.log(bye.trimEnd());  

//simbolos

let mySymbol = `my simbolooooo`;
let symbol = Symbol(mySymbol); 
console.log(symbol.description); 