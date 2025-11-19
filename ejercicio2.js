let nombre = "Sofía";
let nota1 = 4.0;
let nota2 = 3.5;
let nota3 = 4.2;

let promedio = (nota1 + nota2 + nota3) / 3;

console.log("Nombre:", nombre);
console.log("Promedio:", promedio.toFixed(2));

if (promedio >= 3.5) {
  console.log("Has aprobado");
} else {
  console.log("Suerte la proxima");
}
