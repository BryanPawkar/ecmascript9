//destructurando Objetos

const objeto ={
    nombre: "Braco", 
    edad: 26, 
    pais: "ecuador", 
}; 

let { pais, ...all} = objeto; 
//console.log(pais, all); 
//console.log(all); 

const objeto2 = {
    apodo: "Juanito", 
    fecha: "24-02-1993"
};

const objeto3 = {
    ...objeto, 
    ...objeto2, 
    nacionalidad: "Ecuatoriano", 
}; 

console.log(objeto3); 

//Finalizar al realizar una promesa

const helloWorld = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>resolve("Hola Mundo"), 3000)
        }else{
            reject("Hay un error"); 
        }
    }

    )
};

helloWorld()
.then(response => console.log(response))
.then(response => console.log("Si funciona"))
.catch(error => console.log(error))
.finally(()=>console.log("Se terminó")) 

//Formato de fecha

const regexData = /([0-9]{4}-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("1995-10-17");
const year = match[1]; 
const mes = match[2]; 
const dia = match[3];

console.log(year, mes, dia); 