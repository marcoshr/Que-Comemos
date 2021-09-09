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
"Arroz, huevo, salchichas, papas fritas",
"Spaguetti",
"Croquetas",
"Ensalada",
"Pimientos rellenos",
"Bocadillo",
"Tortilla",
"Para picar: jamón serrano, aceitunas, bizcochos",
"Pescado",
"Ir a cenar fuera",
"Verduras picadas en cuadritos",
"Pollo al curry",
"Sopa Magic",
"Sushi",
"Gula del norte"]







function handleClickSearch() {
    console.log("--- handleClickSearch() ---")

    rand = Math.floor((Math.random() * (comidas.length - 1)) + 1)
    console.log(rand)

    document.getElementById("plato").innerHTML = comidas[rand];

} 