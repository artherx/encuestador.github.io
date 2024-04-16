

const texto = document.getElementById("resultado")
const botonA = document.getElementById("IA")

const config = {
    binaryThresh: 0.5,
  hiddenLayers: [11], // array of ints for the sizes of the hidden layers in the network
  activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
}
const net = new brain.NeuralNetwork(config);
net.train([
    {
        input:[1,0,0,0,0,0,0,0,0,0,0,1,0],
        output:[1]
    },
    {
        input:[0,0,1,0,0,0,0,0,0,0,0,1,0],
        output:[1]
    },

])

botonA.addEventListener('click', ()=>{
    const output = net.run([0,0,0,0,1,0,0,0,0,0,0,0,1]);
    texto.textContent= output.toString();
})