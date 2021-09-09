console.log("--- main.js ---")
// import { readFile } from 'fs';
  
// readFile('comidas.txt', (err, data) => {
//     if (err) throw err;
  
//     console.log(data.toString());
// })








console.log("console3")
var comidas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "3", "4", "5", "2", "3", "4", "5"]







function handleClickSearch() {
    console.log("--- handleClickSearch() ---")

    rand = Math.floor((Math.random() * comidas.length) + 1)
    console.log(rand)

    document.getElementById("plato").innerHTML = comidas[rand];

} 