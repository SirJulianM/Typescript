let persona = {
    nombre: ["Julián", "Madrid"],
    edad: 35,
    genero: "Masculino",
    intereses: ["Programar", "Tocar el piano"]
}

/* let nombre:string[] = persona.nombre;
let edad:number = persona.edad;
console.log(nombre);
console.log(edad); */

let {nombre, edad, genero, intereses} = persona;
console.log(nombre);
console.log(genero);