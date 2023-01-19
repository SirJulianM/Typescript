let persona: [string[], number, string, string[]];
persona =[["Julián", "Madrid"], 35, "masculino", ["programador", "piano"]];

//let [nombre, edad, genero, intereses] = persona;
let [,,,intereses] = persona;
//console.log(nombre);
//console.log(edad);
console.log(intereses);