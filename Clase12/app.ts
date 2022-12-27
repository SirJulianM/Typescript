let valor:any ="Hola soy la novia de Julián Madrid";

let resultado:number = (<string> valor).length;
let resultado2:number = (valor as string).length;

console.log(resultado2);
console.log(resultado);