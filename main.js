console.log("console3")
var comidas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "3", "4", "5", "2", "3", "4", "5"]



import { readFile } from 'fs';
  
readFile('comidas.txt', (err, data) => {
    if (err) throw err;
  
    console.log(data.toString());
})



function handleClickSearch() {
    console.log("qwerty")

    rand = Math.floor((Math.random() * comidas.length) + 1)
    console.log(rand)

    // const query = d3.select('#boton').property("value");
    document.getElementById("content").innerHTML = comidas[rand];
    document.getElementById("content2").innerHTML = "pepe";

} 