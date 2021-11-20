var slider1 = document.getElementById("myRange");
var output = document.getElementById("value");


output.innerHTML = slider1.value;
slider1.oninput = function(){

	output.innerHTML = this.value +"%";
}

/*var principal1 = document.getElementById("principal").value;*/

function compute_Interest(){
var principal1 = document.getElementById("principal").value;

var years1 = document.getElementById("years").value;

if (principal1>0) {

var valorderango= slider1.value;

 var result = (principal1 * years1 * valorderango) / 100;

/*alert(result);*/

var yearfuture = new Date().getFullYear()+parseInt(years1);

  /*alert(yearfuture);*/

  document.getElementById("result").innerHTML = 'If you deposited ' + principal1 + 
  												', at an interest rate of ' + valorderango +
  												'%, You will receive an amount of ' + result +
  												' in the year ' + yearfuture; 
}

else{

	alert("You have typed a negative amount or zero, please type another amount");
}

}
