/* 
import OBJbarro from "./Tuki.js"; */

const texto = document.getElementById("resultado");
const botonA = document.getElementById("IA");
const selec1 = document.getElementById("GRUPOEDAD");
const selec2 = document.getElementById("SEXO");
const selec3 = document.getElementById("NOMBRELOCALIDADRESIDENCIA");
const selec4 = document.getElementById("PERTENENCIAETNICA");
const selec5 = document.getElementById("TIPOASEGURAMIENTO");

/* const barro = OBJbarro.barro; */

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [45], // array of ints for the sizes of the hidden layers in the network
  activation: "sigmoid", // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
};
let base = [];
for (let key = 0; key < 47; key++) {
  base.push("0");
}
console.log(`el tamaño es de ${base.length}`)
/* console.log(base.length);
const entrenamiento = barro.map((entrada) => ({
  input: entrada,
  output: [1]
}));
barro.forEach((p)=>{
  const subida =0;
  console.log(`${subida} estos son los valores`,p)
  subida++;
}) */
const net = new brain.NeuralNetwork(config);
net.train([
  {
    input: [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0
    ],
    output: [1]
  },
  {
    input: [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0
    ],
    output: [1]
  },
  {
    input: [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0
    ],
    output: [1]
  },
  {
    input: [0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0
    ],
    output: [0]
  },

  
  {
    input: [0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
    output: [1]
  },
  {
    input: [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0],
    output: [1]
  },
  {
    input: [0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
    output: [1]
  },
  {
    input: [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0
    ],
    output: [0]
  },
  
  {
    input: [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0
    ],
    output: [1]
  },
  {
    input: [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0

    ],
    output: [1]
  },
  {
    input: [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0

    ],
    output: [1]
  },
  {
    input: [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0

    ],
    output: [0]
  },
  
  {
    input: [0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1

    ],
    output: [1]
  },
  {
    input: [0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1

    ],
    output: [1]
  },
  {
    input: [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0

    ],
    output: [1]
  },
  {
    input: [1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0

    ],
    output: [0]
  },
  
  {
    input: [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0

    ],
    output: [1]
  },
  {
    input: [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0

    ],
    output: [1]
  },
  {
    input: [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0

    ],
    output: [1]
  },
  {
    input: [0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0

    ],
    output: [0]
  },
  
  {
    input: [0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1

    ],
    output: [1]
  },
  {
    input: [1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0
    ],
    output: [1]
  },
]);
botonA.addEventListener("click", () => {
  
for (let key = 0; key < 47; key++) {
  base[key]=0;
}
  base[selec1.value]=1;
  base[selec2.value]=1;
  base[selec3.value]=1;
  base[selec4.value]=1;
  base[selec5.value]=1;
  console.log("Nuevo estado de base:", base);
  const output = net.run(base);
  texto.textContent = output.toString();
});
