console.log("console3")
var comidas = ["1", "2", "3", ]

function handleClickSearch() {
    console.log("qwerty")

    rand = Math.floor((Math.random() * comidas.length) + 1)

    // const query = d3.select('#boton').property("value");
    document.getElementById("content").innerHTML = comidas[rand];
    document.getElementById("content2").innerHTML = "pepe";

} 