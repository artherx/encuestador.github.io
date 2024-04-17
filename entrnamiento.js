import { input } from "./brain";

const texto = document.getElementById("resultado");
const botonA = document.getElementById("IA");
const selec1 = document.getElementById("GRUPOEDAD");
const selec2 = document.getElementById("SEXO");
const selec3 = document.getElementById("NOMBRELOCALIDADRESIDENCIA");
const selec4 = document.getElementById("PERTENENCIAETNICA");
const selec5 = document.getElementById("TIPOASEGURAMIENTO");
const selec6 = document.getElementById("ENTIDADADMINISTRADORA");

//*Para el CSV
const fs = require('./assets/csv/resultado.csv');

function procesarCSV(contenido) {
  const lineas = contenido.trim().split('\n');
  const mapa = lineas.map(linea => {
    const valores = linea.trim().split(',');
    const entrada = valores.slice(0, -1).map(Number);
    const output = [Number(valores[valores.length - 1])];
    return { input: entrada, output: output };
  });
  return mapa;
}
function cargarCSV(nombreArchivo) {
  // Lee el contenido del archivo CSV
  const contenido = fs.readFileSync(nombreArchivo, 'utf8');
  // Procesa el contenido del CSV y devuelve el mapa
  return procesarCSV(contenido);
}
console.log(cargarCSV(fs))

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [72], // array of ints for the sizes of the hidden layers in the network
  activation: "sigmoid", // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
};
let base = [];
for (let key = 0; key < 72; key++) {
  base.push("0");
}
console.log(base.length);
const entrenamiento = base.map((entrada) => ({
  input: entrada,
  output: [1]
}));
const net = new brain.NeuralNetwork(config);
net.train([
  {
    input: base,
    output: [1],
  },
  {
    input: base,
    output: [1],
  },
]);
botonA.addEventListener("click", () => {
  for (let i = 1; i <= 7; i++) {
    // Corregir la condición de iteración
    console.log(`selec${i} = 1`); // Usar ${selec}${i} para concatenar correctamente
    base[Number(`selec${i}`)] = "1";
  }
  base.forEach((p) => {
    console.log(p);
  });
  const output = net.run(base);
  texto.textContent = output.toString();
});
