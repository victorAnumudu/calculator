var screen = document.getElementById("screen");
screen.innerHTML = "";

var screenAns = document.getElementById("screenAns");
screenAns.innerHTML = "";

var myAnswer = "";

function press(button){
	if(button.innerHTML=="="){
		var calculate = eval(screen.innerHTML);
		screenAns.innerHTML = calculate;
		myAnswer = calculate;
	} else if(button.innerHTML=="clear"){
		screen.innerHTML = "";
		screenAns.innerHTML = "";
	} else if(button.innerHTML=="Ans"){
		if(screen.innerHTML == ""){
			screen.innerHTML = myAnswer;
		} else{
			screen.innerHTML += myAnswer;
		}
	} else if(button.innerHTML=="C"){
		var remove= screen.innerHTML.toString();
		remove = remove.replace(remove[remove.length-1], "");
		screen.innerHTML = remove;
	}
	else{
		screen.innerHTML = screen.innerHTML + button.innerHTML;
	}
}
