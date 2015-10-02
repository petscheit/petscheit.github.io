//var myBet = prompt("How much do you want to bet?")
//var myChoice = prompt("What are you betting on? (red, black, even, odd)")





var NUMBERS = {1: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
			   2: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
			   3: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
			   4: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35]}

var startGame = function() {
	totalCredit = 2000
	betCredit = 0
	}


function playRound(chosenBet)
	{
		if (betCredit > 0)
			{
				gameMode(chosenBet)
				var randomNumber = (Math.floor(Math.random() * 37) + 0 ); 
				numberDisplay(randomNumber);
				if (NUMBERS[chosenBet].indexOf(randomNumber) > -1) 
					{
						totalCredit += betCredit * 2;
						
						
						document.getElementById("status").innerHTML = ("WIN");
						document.getElementById("status").style.color = "green";
						document.getElementById("gain").innerHTML = ("+" + betCredit + "$");
						document.getElementById("gain").style.color = "green";
						betCredit = 0
						refreshCurrentBet();

					}
				else 
					{
						
						document.getElementById("status").innerHTML = ("LOSE");
						document.getElementById("status").style.color = "red";
						document.getElementById("gain").innerHTML = ("-" + betCredit + "$");
						document.getElementById("gain").style.color = "red";
						betCredit = 0
						refreshCurrentBet();
					}
			}
			
		else
			{
				alert("Please select betting amount!")
			}
	}

function numberDisplay(number) {
	document.getElementById("result").innerHTML = (number);

	if (NUMBERS[1].indexOf(number) > -1) {
		document.getElementById("result").style.color = "red";
		}
	else if (number === 0) {
		document.getElementById("result").style.color = "green";
	}


}

function hide()
	{
		document.getElementById("start-button").style.visibility="hidden";
	}
 
function add(creditAdded)
	{   
		if (totalCredit >= creditAdded)
			{
				betCredit += creditAdded;
				totalCredit -= creditAdded;
				refreshCurrentBet();
				
			}
		else
			{
				alert("Not enough Credits!");
			}
	}

function gameMode(modeName)
	{
		if (modeName === 1) {
			document.getElementById("myGuess").innerHTML = ("R");
			document.getElementById("myGuess").style.color = "red";
			document.getElementById("myBetSmall").innerHTML = ("Your bet: RED");
		}
		else if (modeName === 2) {
			document.getElementById("myGuess").innerHTML = ("B");
			document.getElementById("myGuess").style.color = "black";
			document.getElementById("myBetSmall").innerHTML = ("Your bet: BLACK");
		}
		else if (modeName === 3) {
			document.getElementById("myGuess").innerHTML = ("E");
			document.getElementById("myGuess").style.color = "black";
			document.getElementById("myBetSmall").innerHTML = ("Your bet: EVEN");
		}
		else {
			document.getElementById("myGuess").innerHTML = ("O");
			document.getElementById("myGuess").style.color = "black";
			document.getElementById("myBetSmall").innerHTML = ("Your bet: ODD");
		}

	}


function refreshCurrentBet() 
	{
    	document.getElementById("currentBet").innerHTML = ("Current Bet: " + betCredit);
    	document.getElementById("availableCredit").innerHTML = ("Available Credit: " + totalCredit);
    	//betCredit = 0;
    }



// var playGame = function() {
// var randomNumber = (Math.floor(Math.random() * 37) + 0 ); 
// console.log(randomNumber)
// //console.log("you have " + totalCredit + " left!!")


// if (NUMBERS[myBet].indexOf(randomNumber) > -1) {
// 	totalCredit += betAmount;
// 	console.log("You win and now have " + totalCredit + " money left!");
	
// }

// else {
// 	totalCredit -= betAmount;
// 	console.log("You lost " + betAmount + " and have " + totalCredit + " left!!");
	
// }
// }

// playRound();



// function showButtons()
// {
// var buttons = document.getElementsByClassName('game-buttons');

// for(var i = 0; i != buttons.length; ++i)
// 	{
// 		buttons[i].style.visibility = "hidden";
// 	}
// }
// // var result = NUMBERS[myBet].indexOf(randomNumber) > -1
// // console.log(result)


