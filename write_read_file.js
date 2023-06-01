const fs = require('fs');

function readMovies() {
  const catalogData = fs.readFileSync('./moveData.json', 'utf8');
  return JSON.parse(catalogData);
}


function writeMovie(catalog) {
  fs.writeFileSync('./moveData.json', JSON.stringify(catalog,null,2));
}

module.exports = { readMovies, writeMovie };