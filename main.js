console.log("--- main.js ---")
// import { readFile } from 'fs';
  
// readFile('comidas.txt', (err, data) => {
//     if (err) throw err;
  
//     console.log(data.toString());
// })








console.log("console3")
var comidas = ["Papas a lo pobre",
 "Pedir pizza", 
 "Pedir chino", 
"Judias a la vinagreta",
"Arroz, huevo y salchichas",
"Spaguetti",
"Croquetas"]







function handleClickSearch() {
    console.log("--- handleClickSearch() ---")

    rand = Math.floor((Math.random() * (comidas.length - 1)) + 1)
    console.log(rand)

    document.getElementById("plato").innerHTML = comidas[rand];

} 