import barro from "./Tuki.js";
import datos from "./data.js";
import vectorP from "./vectorP.js";


const texto = document.getElementById("resultado");
const botonA = document.getElementById("IA");
const selec1 = document.getElementById("GRUPOEDAD");
const selec2 = document.getElementById("SEXO");
const selec3 = document.getElementById("NOMBRELOCALIDADRESIDENCIA");
const selec4 = document.getElementById("PERTENENCIAETNICA");
const selec5 = document.getElementById("TIPOASEGURAMIENTO");

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [90], // array of ints for the sizes of the hidden layers in the network
  activation: "sigmoid", // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
};


let base = barro.barro;
const dato = datos.datos;

// Generar un vector con 10,000 datos
var vector = vectorP.vectorP;

console.log("🚀 ~ datos:", vector)
const mapeando = dato.map((p,i) => {
  const outputR = Math.round(Math.random());
  return {
    input: Object.values(p),
    output: [vector[i]],
  };
});
console.log("🚀 ~ mapeando ~ mapeando:", mapeando)
function tienenMismosIdentificadores(arr1, arr2) {
  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();
  return JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2);
}
const net = new brain.NeuralNetwork(config);
net.train(mapeando, { iterations: 1000 });
botonA.addEventListener("click", () => {
  console.log("entra");
  for (let i = 1; i <= 47; i++) {
    base[i-1] = 0;
  }
  console.log(`te doy ${Object.values(base)}`);
  base[selec1.value-1] = 1;
  base[selec2.value-1] = 1;
  base[selec3.value-1] = 1;
  base[selec4.value-1] = 1;
  base[selec5.value-1] = 1;
  console.log(Object.values(base));
  const output = net.run(Object.values(base));
  const final = (Object.values(output))*100;
  console.log(final);
  texto.textContent = final.toString();
});
