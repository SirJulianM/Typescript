"use strict";
let nombre = ["Pedro", "Juan", "Luis"];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let agrupar = ["Prueba", 100, ...nombre, ...numeros];
console.log(agrupar);
let libro = {
    autor: "Ernest",
    titulo: "Por quien doblan las campanas",
    fecha: new Date(1948, 1, 4)
};
let vehiculo = {
    color: "Negro",
    puerta: "A3",
    marca: "Toyota"
};
let agrupar2 = Object.assign(Object.assign({ prueba: "Hola" }, libro), vehiculo);
console.log(agrupar2);
