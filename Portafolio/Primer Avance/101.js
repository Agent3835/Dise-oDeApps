/*console.log("Hola mundo");
let x = 89; //De bloque
var y = 78; //Global

console.log(x+y);

y = "Foo bar";

console.log(y);
*/

//array = [2,"any type works", undefined, null, true, 2.51];

//console.log(array[0]*array[5]);

//Objetos en js, (json) o diccionario
// obj = {
//     name: "Foo", // clave y atributo, cualquiera de los tres
//     age: 23, 
//     city: "Tj",
// };
/*
console.log(obj["name"]); //Para llamar un valor especifico del json, se necesita poner la clave de lo que deseas
console.groupCollapsed(obj.city)
*/
//console.log(object.values[obj]); //Trae los valores o nombre

/*for(let i = 0; i < 100; i+=5){
    console.log(i);
}*/

/*for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}*/

/*for (let i of array) {
    console.log(i)
}*/
/*
//Para accesar a una key de un json
for (let key of Object.keys(obj)) { //con la concatencacion "keys" accedes a las llaves de un objeto (obj)
    console.log(key);
}
*/
/*
for (let key of Object.keys(obj)) { //con la concatencacion "keys" accedes a las llaves de un objeto (obj)
    console.log(key + ": " + obj[key] ); // obj con las llaves dentro de los parametros
}
// capitulo 18 del libro JasaScript 4 proffessionals
for (let key in obj){
    console.log(key + ": " + obj[key] ); // obj con las llaves dentro de los parametros
}// este for realiza el mismo proceso de recorrer las llaves del obj, pero la estructura es mas sencilla.
*/

// var i = 1000;

// while (i<1000){
//     console.log(i);
//     i +=5;
// }

// var k = 1000;
// do{
//     console.log(k);
//     k +=5;
// } while (k <1000);

// comparacion ternaria, estructura de control
// var gatito = "cute2";

// if (gatito === "cute"){
//     console.log("this cat is very cute");
// } else {
//     console.log("that cat is not cute");
// }

// var ternary = (gatito === "cute")? 'Kitty pretty cute': 'Ketty cute';

// console.log(ternary);

//SWITCH STATEMENT

// var value = 1;

// switch (value) {
//     case 1:
//         console.log(value);
//         break;
//     case 2:
//         console.log(value);
//         break;
//     case 3:
//         console.log(value);
//         break;
//     default:
//         console.log("no option");
// }

// function areaTriangulo (){
//     var base = 6;
//     var altura = 8;
//     var area = (base*altura)/2;
//     console.log(area);
// }

// var fun = function base (b, h){
//     return b * h/2
// }
// console.log(fun);

//areaTriangulo();

// const foo = (function () {
//     console.log("i am the IIFE")
// })();

// var msg = "Hello";
// const bar = ( function (msg) {
//     console.log("Message:" + msg)
// })(msg);

// const joe =( function(){
//     return "hello world";
// })(); // con el parentesis invocas la funcion
// console.log(joe);

// const foo = function sum(x, y){
//     return x + y
// }
// console.log(foo(56, 67))
// console.log(sum(1, 2)) // esta no aparece y la funcionalidad y visibilidad de la funcion solo es utilizable por foo, por lo que no es accesible por nadie mas

// var say = function(times){
//     if (times > 0 ){
//         console.log("hello")
//         say(times - 1)
//     }
// } // el llamado a las funciones utilizando la recursividad hace mas rapida la respuesta del sistema a las llamadas y a las iteracion.

//say() // los parentesis indican una invocacion (manda el contenido a la funcion para que los utilice dentreo de su funcionamiento)

//var saysay = say;

//say = "Ooops!";
//saysay(5);

// en este ejemplo anterior entra a la funcion pero al momento de querer restar, la funcion se da cuenta que el tipo de dato de say cambio aun string, por lo que es imposible restar 1.

// var foo = function(){
//     console.log("hola mundo")
// }

// var foo = (msg) => {console.log("hola mundo")} // arrow functions

// foo()
// bar ("hello")

// function personas(p, ...persons){
// }

// function hello(msg= "hello worls", person = "foo"){
//     console.log(msg + person)
// }

// hello("ray", "hello");

// var url = 'https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript'

// var responseeData = fetch(url).then(response => response.json()); // se va cargar el contenido de json en el responseData
// responseData.then(({items, has_more, quota_max, quota_remaining}) =>{
//     for ({title, owner, is_answered} of items){
//         console.log("Q: " + title + ".. is_answered: " + is_answered)
//     }
// });

// var url = "https://jsonplaceholder.typicode.com/users"

// fetch(url).then(response => response.json())
// .then(response => { // en esta estructura estamos solamente LEYENDO lo que hay en el JSON a traves de la API
//     response.forEach(element => {
//         console.log(element.title)
//     });
// })

// fetch(url, {
//     method: "POST", // estructura para escribir dentro del JSON donde se esta agregando un elemento a la API
//     headers: {
//         "Content_type":"application/json"
//     },
//     body: JSON.stringify({
//         userId: 1,
//         title: "lorem ipsum"
//     })
// }).then(response => response.json())
// .then(response => console.log(response))

// PRACTICA lectura

// fetch(url).then(response => response.json())
//  .then(response => { // en esta estructura estamos solamente LEYENDO lo que hay en el JSON a traves de la API
//      response.forEach(element => {
//          console.log(element.username, element.email, element.address, element.company)
//      });
// })

// // escritura

// fetch(url, {
//     method: "POST", // estructura para escribir dentro del JSON donde se esta agregando un elemento a la API /  metodo "POST" para escribir sobre el json a traves de la API
//     headers: {
//         "Content_type":"application/json"
//     },
//     body: JSON.stringify({
//         username: "Gober",
//         email: "gabi_solas@gmail.com",
//         phone: "+52-788-7886"
//     })
// }).then(response => response.json())
// .then(response => console.log(response))
//import axios from "axios";

const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/users";
// axios.get("https://jsonplaceholder.typicode.com/users").then(response => {

// })

// axios.get("https://jsonplaceholder.typicode.com/users").then(({data}) => {
//     data.forEach(element => {
//         console.log(element.username)
        
//     });
// })

//// creacion de usuarios

axios.post(url, {
    username: "Foo",
    mail: "foo@gmail.com"
}).then(response => {
    if(response.status === 201){
        console.log("User created")
    }
}); // se puede utilizar fectrh o axios.sygy7ir