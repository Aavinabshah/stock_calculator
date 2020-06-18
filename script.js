var operator = document.querySelectorAll(".operator");
var number = document.querySelectorAll(".number");
var allclear = document.querySelector(".allclear");
var slash = document.querySelector(".slash");
var equals = document.querySelector(".equals");
var mode = document.querySelector(".mode");
var previousOutput = document.querySelector(".previous-output");
var currentOutput = document.querySelector(".current-output");

function changeMode (value){
  mode.innerHTML = value;
}
changeMode ("- 30");

function headDisplay (value){
  currentOutput.innerText= value;
}
function previousDisplay (value){
  previousOutput.innerText= value;
}
function readheadDisplay(){
    return currentOutput.innerText;
}
function readpreviousDisplay(){
	return  previousOutput.innerText;
}


function clear (){
	previousOutput.innerText = "";
	currentOutput.innerText = "";
}


allclear.addEventListener("click",clear);

operator.forEach(operator => {
  operator.addEventListener("click", () => {
  	var head = readheadDisplay();
  	var previous = head + " " + operator.innerText;
  	previousDisplay(previous);
  	headDisplay("");
  })
})
number.forEach(number => {
  number.addEventListener("click", () => {
    var output = readheadDisplay();
    output = output + number.innerText; 
    headDisplay(output);
  })
})
function getconvert(number) {
    var integerDigits = number.split('-')[0];
    var decimalDigits = number.split('-')[1];

    var convert = (integerDigits * 30) + parseFloat(decimalDigits);
    var results = eval (convert);
    return results;
}
equals.addEventListener("click",() =>{
	var head = readheadDisplay();
	var previous = readpreviousDisplay();

	var previousdigits = previous.split(' ')[0];
    var operatordigits = previous.split(' ')[1];

	var head1 = getconvert(head);
	var previous1 = getconvert(previousdigits);
	if (operatordigits == "+"){
		var result = parseFloat(previous1) + parseFloat(head1);
	}
	else{
		var result = parseFloat(previous1) - parseFloat(head1);
	}
	var first = parseInt(result) / 30;
	var second = parseInt(result) - (parseInt(first) * 30);
	var result = parseInt(first).toString() + "-" + second.toString();
	previousDisplay("");
	headDisplay(result);
});