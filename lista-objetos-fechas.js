//listas, array o arreglo
const lista = [1,"hola",true,undefined,null ];
console.log(lista);

const lista2 = new Array(2,"hola",true,undefined,null);
console.log(lista2);

const lista3 = new Array(3);
lista3[0] = "soy el primer elemento,index 0";
console.log(lista3);

lista4 = [lista,lista2,lista3];
console.log(lista4);

// objetos

const movil = {
    altura:10,
    anchura:5,
    marca:"xiaomi",
    isWhite: false,
    contactos:["Gorka","Raul"],
    tarjeta:{
        marca:"Sandisk",
        almacenamiento:32
    }
    
}
movil.anyo = 2019;
movil.marca= "samsung"
console.log(movil.marca)

//fechas
//librerias de apoyo moment.js
const ahora = new Date();
console.log(ahora);
const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);
const fecha_valores = new Date(2022,0,15);
console.log(fecha_valores);
const dia = ahora.getDate();
const mes= ahora.getMonth();
const anyo = ahora.getFullYear();

console.log(dia,mes,anyo);





