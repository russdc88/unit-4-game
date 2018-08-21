


$(document).ready(function(){
	//create Variables for random numbers//
	var playerScore = 0;

	var computerScore = 0;

	var computerValue = 19 + Math.floor(Math.random()*101);

	var redGem = 1+ Math.floor(Math.random()*11);

	var greenGem = 1+ Math.floor(Math.random()*11);

	var purpleGem = 1+ Math.floor(Math.random()*11);

	var blueGem = 1+ Math.floor(Math.random()*11);

	var randomScore = 0;

	// creating a function to reset the all the values, except the scores. //
	function resetValue (){
		computerValue = 19 + Math.floor(Math.random()*101);

		redGem = 1+ Math.floor(Math.random()*11);

		greenGem = 1+ Math.floor(Math.random()*11);

		purpleGem = 1+ Math.floor(Math.random()*11);

		blueGem = 1+ Math.floor(Math.random()*11);

		randomScore = 0;

		$("#randomNumber").html("<p class = 'big'> Add to this number: " + computerValue + "</p>");

		$("#totalCrystalScore").html("<p class = 'big'> " + randomScore + "</p>");	
	}
	
// adding values to html//

	$("#randomNumber").html("<p class ='big'> Add to this number: " + computerValue + "</p>");

	$("#totalCrystalScore").html("<p class = 'big'>" + randomScore + "</p>");

	$("#playerWin").html(playerScore);

	$("#computerWin").html(computerScore);


	//------------------------------//

	// Red Gem functionality //


	$("#crystal-1").on("click", function(){
		
		randomScore = randomScore + redGem;

		console.log(randomScore)

		$("#totalCrystalScore").html("<p class = 'big'>" + randomScore + "</p>")

		if (randomScore === computerValue) {
			playerScore ++;
			$("#playerWin").html(playerScore);

			resetValue();
	
		}
	
		else if ( randomScore > computerValue) {
			computerScore ++;
			
			$("#computerWin").html(computerScore);

			resetValue();
		}

	});




	// Green Gem Functionality //
	$("#crystal-2").on("click", function(){
		
		randomScore = randomScore + greenGem;

		

		$("#totalCrystalScore").html("<p class = 'big'>" + randomScore + "</p>")

		if (randomScore === computerValue) {
			playerScore ++;
			$("#playerWin").html(playerScore);
			
			resetValue()
		}
	
		else if ( randomScore > computerValue) {
			computerScore ++;
			$("#computerWin").html(computerScore);

			resetValue()
		}

	});



	// Purple Gem Functionality //
	$("#crystal-3").on("click", function(){
		
		randomScore = randomScore + purpleGem;

		console.log(randomScore)

		$("#totalCrystalScore").html("<p class = 'big'>" + randomScore + "</p>")

		if (randomScore === computerValue) {
			playerScore ++;
			$("#playerWin").html(playerScore);
	
			resetValue()
		}
	
		else if ( randomScore > computerValue) {
			computerScore ++;
			$("#computerWin").html(computerScore);

			resetValue()
		}

	});



	// Blue Gem Functionality //
	$("#crystal-4").on("click", function(){
		
		randomScore = randomScore + blueGem;

		console.log(randomScore)

		$("#totalCrystalScore").html("<p class = 'big'>" + randomScore + "</p>")

		if (randomScore === computerValue) {
			playerScore ++;
			$("#playerWin").html(playerScore);

			resetValue()
	
		}
	
		else if ( randomScore > computerValue) {
			computerScore ++;
			$("#computerWin").html(computerScore);

			resetValue()
		}

	});

	

})