const mdLinks = require('./index');
const path = process.argv[2];
//console.log(mdLinks(path[2]));

mdLinks(path)
  .then((result) => {
    result.forEach(element => {
      console.log(element.text, element.link, element.arquivo);
    });
  })
  .catch((error) => console.log(error));