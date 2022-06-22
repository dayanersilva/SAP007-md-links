const mdLinks = require('./index');
const path = process.argv;
//console.log(mdLinks(path[2]));

async function processaTexto(file) {
  const resultado = await mdLinks(file[2]);
  console.log("Lista de links", resultado);
}

processaTexto(path)

// const file = process.argv[2];

// mdLinks(file)
//   .then((resultado) => {
//     resultado.forEach(elemento => {
//       console.log(elemento.text, elemento.link, elemento.arquivo);
//     });
//   })
//   .catch((error) => console.log(error));