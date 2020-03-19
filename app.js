
var BerekenSom;
BerekenSom = function () {
  var getal_1 = document.getElementById("getal_1").value;
  var getal_2 = document.getElementById("getal_2").value;

  var som = parseInt(getal_1) + parseInt(getal_2);
  var uitkomst = document.getElementById("uitkomst");
  uitkomst.innerHTML = "De som van " + parseInt(getal_1)+ " + " + parseInt(getal_2)+ " = " + som;

  alert("De som van " + parseInt(getal_1) + " + " + parseInt(getal_2) + " = " + som);



};


var BerekenSomMin;
BerekenSomMin = function (){
  var getal_1 = document.getElementById("getal_1").value;

  var getal_2 = document.getElementById("getal_2").value;

  var sommin = parseInt(getal_1) - parseInt(getal_2);

  var uitkomstmin = document.getElementById("uitkomst");



  uitkomstmin.innerHTML = "De som van " + parseInt(getal_1) + " - " + parseInt(getal_2) + " = " + sommin;

  alert("De som van " + parseInt(getal_1) + " - " + parseInt(getal_2) + " = " + sommin);


};


var BerekenSomKeer;
BerekenSomKeer = function (){
  var getal_1 = document.getElementById("getal_1").value;

  var getal_2 = document.getElementById("getal_2").value;

  var somkeer = parseInt(getal_1) * parseInt(getal_2);

  var uitkomstkeer = document.getElementById("uitkomst");


  uitkomstkeer.innerHTML = "De som van " + parseInt(getal_1) + " * " + parseInt(getal_2) + " = " + somkeer;

  alert("De som van " + parseInt(getal_1) + " * " + parseInt(getal_2) + " = " + somkeer);


};

var BerekenSomDeel;
BerekenSomDeel = function (){
  var getal_1 = document.getElementById("getal_1").value;

  var getal_2 = document.getElementById("getal_2").value;

  var somdeel = parseInt(getal_1) / parseInt(getal_2);

  var uitkomstdeel = document.getElementById("uitkomst");


  uitkomstdeel.innerHTML = "De som van " + parseInt(getal_1) + " / " + parseInt(getal_2) + " = " + somdeel;

  alert("De som van " + parseInt(getal_1)+ " / " + parseInt(getal_2) + " = " + somdeel);


};



