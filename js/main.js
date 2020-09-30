

let precioFinal = 0;
let precioInicial = 0;
let precioFinalCorto;

 function prueba (ev) {
  
  let prix = document.getElementById(ev.target.id);
  let prex = Number(prix.name);
  precioFinal = precioInicial + prex;
  precioInicial = precioFinal;
  precioFinalCorto = precioFinal.toFixed(2);
  addHtml();
  console.log(precioFinalCorto);
}

function addHtml() {
  
  document.getElementById("finalPrice").innerHTML = precioFinalCorto;
  
}





function drag(ev){
  ev.dataTransfer.setData("text", ev.target.id);
  
}



function allowDrop(ev) {
  ev.preventDefault();
}



function drop(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  
  

}

