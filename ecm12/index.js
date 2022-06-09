const texto = "El amor es una cosa maravillos, con amor todo es mas llevadero, y sin amor la vida es algo dolorosa"; 
const replazarPrimero = texto.replace("amor", "odio"); 
console.log(replazarPrimero); 
const reemplazarTodo = texto.replaceAll("amor", "trabajo");
console.log(reemplazarTodo);  

//métodos privados #

class Mensajes {
    constructor(data){
        this._data = data; 
    }
    #mostrar(valor){
        console.log(valor); 
    }
    #noMostrar(valor){
        console.log(valor); 
    }
    get #data(){
        return this._data; 
    }
    set #data( dat){
        this._data = dat; 
    }
}
const mensajito = new Mensajes(); 

//mensajito.mostrar("wasssaaaaaaa!");


//promesa que retorna el primer valor

const promesa1 = new Promise((resolve, reject) => reject("1"));
const promesa2 = new Promise((resolve, reject) => setTimeout(()=> resolve("Wiiiii 1"), 3000)); 
const promesa3 = new Promise((resolve, reject) => setTimeout(()=> resolve("Te gané wiiiiiiii"), 2000)); 
Promise.any([promesa1, promesa2, promesa3])
.then(response => console.log(response)); 

let isTrue = true; 
let isFalse  = false; 

console.log(isTrue &&= isFalse);
let isTrue2 = true; 
let isFalse2  = false; 
console.log(isTrue2 ||= isFalse2);
let isTrue1 = undefined; 
let isFalse1  = false; 

console.log(isTrue1 ??= isFalse1);   