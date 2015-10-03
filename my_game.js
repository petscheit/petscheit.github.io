var NUMBERS = {1: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
			   2: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
			   3: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
			   4: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35]}
//I tried to use the actual names (red, black, even, odd) for the object keys but didn't manage to 
//make the html part of the site pass a string as an argument with the onclick function. Makes my code
//a lot harder but I couldn't figure it out and used this instead. 

function startGame() {
	totalCredit = 2000
	betCredit = 0
}

function playRound(chosenBet){
	if (betCredit > 0){
		//Checks if player has bet credits (otherwise return error), generates random number between 0 and 36
		//call randomNumberColor and gameModeCheck
		var randomNumber = (Math.floor(Math.random() * 37) + 0 ); 

		randomNumberColor(randomNumber);
		gameModeCheck(chosenBet)

		if(NUMBERS[chosenBet].contains(randomNumber)){
			//If game is won
			totalCredit += betCredit * 2;
			updateWin();
			betCredit = 0;
			refreshCurrentBet();
		}
		else {
			//If game is lost
			updateLoss();
			betCredit = 0;
			refreshCurrentBet();
		}
	}
	else{
		alert("Please select betting amount!")
	}
}

function randomNumberColor(randomNumber) {
//Decides what color randomNumber should have and calls getElementColor with settings
	getElementText("result", randomNumber)

	if (NUMBERS[2].contains(randomNumber)) {
		getElementColor("result", "red")
	}
	else if (randomNumber === 0) {
		getElementColor("result", "green")
	}
	else {
		getElementColor("result", "black")
	}
}
 
function add(creditAdded){   
	//Checks if enough credits are available when placing a bet and adds them to betCredit when possible
	if (totalCredit >= creditAdded){
		betCredit += creditAdded;
		totalCredit -= creditAdded;
		refreshCurrentBet();			
	}
	else{
			alert("Not enough Credits!");
	}
}

function gameModeCheck(modeName){	
	//Checks which gameMode is played and calls colorChange with color settings	
	color = "black"
	if (modeName === 1) {
		colorChange("B", "BLACK", color);
	}
	else if (modeName === 2) {
		color = "red";
		colorChange("R", "RED", color);
	}
	else if (modeName === 3){
		colorChange("E", "EVEN", color);
	}
	else {
		colorChange("O", "ODD", color);
	}
}
// Was going to use the switch function but couldn't get it to work, attempt below!			

// switch (gameMode) {
// 	case 1:
// 		colorChange("B", "BLACK", color);
// 	case 2:
// 		color = "red";
// 		colorChange("red", "RED", color);
// 	case 3:
// 		colorChange("E", "EVEN", color);
// 	case 4:
// 		colorChange("O", "ODD", color);
// 	}
	
function getElementText(target, change){
	//changes text of certain ID in html file
	document.getElementById(target).innerHTML = (change);
}

function getElementColor(target, color){
	//changes color of certain ID in html file
	document.getElementById(target).style.color = color;
}

function colorChange(gameMode, gameModeName, color) {
	//Updates html to show bet played by user
	getElementText("myGuess", gameMode);
	getElementText("myBetSmall", ("Your bet: " + gameModeName));
	getElementColor("myGuess", color)
}

function updateWin(){
	//Updates html when a game was won
	getElementText("status", "WIN");
	getElementColor("status", "green");
	getElementText("gain", ("+" + betCredit + "$"));
	getElementColor("gain", "green");
}

function updateLoss(){
	//Updates html when a game was lost
	getElementText("status", "LOSE");
	getElementColor("status", "red");
	getElementText("gain", ("-" + betCredit + "$"));
	getElementColor("gain", "red");
}
	
function refreshCurrentBet() {
	//Updates current bet and available credit in UI
	getElementText("currentBet", ("Current Bet: " + betCredit));
	getElementText("availableCredit", ("Available Credit: " + totalCredit));
}

function hide(){
	//hides button when clicked
	document.getElementById("start-button").style.visibility="hidden";
}

Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] === needle) return true;
   }
   return false;
}
