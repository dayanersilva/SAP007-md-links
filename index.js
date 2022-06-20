const fs = require('fs');
//const path = require('path')

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
            arquivo: arquivo,
          };
          return resolve(console.log(strObject))
        })
      }
    })
  })
}

function error(erro) {
  throw new Error(erro.code, "Não há arquivo no caminho")
}

module.exports = mdLinks


