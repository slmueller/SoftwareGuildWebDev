function clearError(){

	//go through all form elements
	var inputField = document.getElementById("inputField");
  
	//reset error:
	if(inputField.className.indexOf("has-") != -1){  //error in parent class
	  inputField.className = "form-group"; //clear errors
	}
  
}

function resetForm(){
  clearError();
  document.forms["sevens"]["startingBet"].value = "";
  document.getElementById("results").style.display = "none";  //hide results table
  document.forms["sevens"]["startingBet"].focus();  //cursor jumps here
}

function validateInputAndPlay(){
  clearError();
  var form = document.forms["sevens"];
  var startingBet = form["startingBet"].value;

  if(startingBet == "" || isNaN(startingBet) || startingBet <= 0){
    alert("The Starting Bet must be more than $0.00.");
    document.getElementById("inputField").className = "form-group has-error";
    form["startingBet"].focus();
    return false;
  }

  var results = playLuckySevens(startingBet);
  resetForm();
  
  document.getElementById("playButton").innerText = "Play Again"; //set button from "Play" to "Play Again"

  //calculate & display results:
  document.getElementById("results").style.display = "block";
  document.getElementById("initialBet").innerText = startingBet;
  document.getElementById("totalRolls").innerText = results[0];
  document.getElementById("maxAmount").innerText = results[1];
  document.getElementById("rollsAtMax").innerText = results[2];

  // We are returning false so that the form doesn't submit & we can see the results
  // If you change this to true, the form submits to it's action attribute.
   return false;
}

function rollDice(min, max){
	return Math.ceil(Math.random() * (1 + max - min));
}

function playLuckySevens(startingBet){
	 
	 startingBet = Number(startingBet); //since type is not declared: convert to number, otherwise it might be seen as string.
	 
	 var dice1;
	 var dice2;
	 var sum;
	 var money = startingBet;
	 var totalRolls = 0;
	 var maxAmount = startingBet;
	 var rollsAtMax = 0;
	 
	 while(money > 0){
		dice1 = rollDice(1,6);
		dice2 = rollDice(1,6);
		totalRolls++;
		
		sum = dice1 + dice2;
		if(sum === 7){
			money += 4;
		} else {
			money--;
		}
		
		if(money > maxAmount){
			maxAmount = money;
			rollsAtMax = totalRolls;
		}
	 }
	 
	var results = new Array(totalRolls, maxAmount, rollsAtMax);
	return results;
}
