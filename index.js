const fs = require('fs');

const mdLinks = (arquivo) => {
  const linkRegex = /\[([^\]]*)\]\(https?:\/\/[^$#\s].[^\s]*\)/gm;
  return new Promise((resolve, reject) => {
    fs.readFile(arquivo, 'utf8', (erro, texto) => {
      if (erro) {
        //if(path.extname(arquivo) !== ".md")
        //reject('Formato Inválido')
        reject(error(erro))
      } else {
        const linkExtraido = texto.match(linkRegex)
        linkExtraido.map((link) => {
          const arrLink = link.replace('[', '').split('](');
          const strObject = {
            text: arrLink[0],
            link: arrLink[1],
            file: arquivo,
          };
          console.log(strObject);
        })

        resolve(console.log())
      }
    })
  })
}

function error(erro) {
  throw new Error(erro.code, "Não há arquivo no caminho")
}

module.exports = mdLinks

// function error(erro) {
//   throw new Error(erro.code, "Não há arquivo no caminho")
// }

// function pegarArquivo(caminhoDoArquivo) {
//   fs.readFile(caminhoDoArquivo, 'utf8', (erro, texto) => {
//     if (erro) {
//       error(erro)
//     }
//     console.log(texto)
//   })
// }

// pegarArquivo('./README.md');
''