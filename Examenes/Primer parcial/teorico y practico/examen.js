const readline = require('readline');
const axios = require('axios');

const url = "http://jsonplaceholder.typicode.com/todos";

const option = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerTodos() {
    return axios.get(url)
        .then(response => response.data)
        .catch(error => console.error("Error al obtener los datos:", error));
}

function opcionesMenu() { // metodo principal
    console.log("OPciones del Menu:");
    console.log("1) Lista de todos los pendientes (Solo ID's)");
    console.log("2) Lista de todos los pendientes (ID's y Titles)");
    console.log("3) Lista de todos los pendientes sin resolver (ID y Title)");
    console.log("4) Lista de todos los pendientes resueltos (ID y Title)");
    console.log("5) Lista de todos los pendientes (ID y userID)");
    console.log("6) Lista de todos los pendientes resueltos (ID y userID)");
    console.log("7) Lista de todos los pendientes sin resolver (ID y userID)");

    option.question("Elija una opción: ", opcion => { // funcion que hace de contancto con la entrada para obtener el numero
        switch (opcion) {
            case '1':
                obtenerTodos().then(data => {
                    data.forEach(element => {
                        console.log(element.id);
                    });
                });
                break;
            case '2':
                obtenerTodos().then(data => {
                    data.forEach(element => {
                        console.log(`ID: ${element.id}, Título: ${element.title}`); // convierte los resultados a cadenas utilizando el "$"
                    });
                });
                break;
            case '3': // filter se utiliza para buscar en un array y obtener un nuevo array que solo contiene elementos que cumplen con una condición específica.
                obtenerTodos().then(data => {
                    data.filter(element => !element.completed).forEach(element => { // la sentencia filter se utiliza para acordar que los elementos que cumplen con la condicion dentro del parametro son los que se les aplicara 
                        console.log(`ID: ${element.id}, Título: ${element.title}`); // las siguientes instrucciondes concatenadas.
                    });
                });
                break;
            case '4':
                obtenerTodos().then(data => {
                    data.filter(element => element.completed).forEach(element => {
                        console.log(`ID: ${element.id}, Título: ${element.title}`);
                    });
                });
                break;
            case '5':
                obtenerTodos().then(data => {
                    data.forEach(element => {
                        console.log(`ID: ${element.id}, UserID: ${element.userId}`);
                    });
                });
                break;
            case '6':
                obtenerTodos().then(data => {
                    data.filter(element => element.completed).forEach(element => { // filter filtra todos los completos
                        console.log(`ID: ${element.id}, UserID: ${element.userId}`);
                    });
                });
                break;
            case '7':
                obtenerTodos().then(data => {
                    data.filter(element => !element.completed).forEach(element => {
                        console.log(`ID: ${element.id}, UserID: ${element.userId}`);
                    });
                });
                break;
            default:
                console.log("Opción inválida");
                opcionesMenu(); // Vuelve a mostrar el menú si la opción es inválida
                break;
        }
    });
}

opcionesMenu();
