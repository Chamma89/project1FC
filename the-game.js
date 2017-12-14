
//events can only be used on objects
// textConent is what's inside the taglines ie <p>hello</p> . hello is the textContent. Value is used for number in the taglines.
// when using querySelectorALL instead of querySelector.. it puts things in an array. Which means you'll need [] to get the elements within. 


var tiles = document.querySelectorAll('td');
var addToP1 = document.querySelector('.p1Score');
var addToP2 = document.querySelector('.p2Score');
var reset = document.querySelector('.button')
var winner = "";
var count = 0;
var result = [" ", " ", " ", " ", " ", " ", " ", " ", " "];




function playerTurn (event) {

	//convert to Number
	var box = event.target 

	 var idx = Number(box.id)
	 console.log(idx);
	 
	// alternate player
	count += 1

	if (result[idx] === " " ){

		if (count % 2 !== 0) {
			// player 1
			event.target.classList.add('imageX');
			result[idx] = "x"
			

			
			

		} else {
			// player 2
			event.target.classList.add('imageO')
			result[idx] = "o"
			
		}

		return XandO();
	}


};


for(var i = 0; i < 9; i++) {
			
		tiles[i].addEventListener('click', playerTurn);

}





function XandO () {
		if ((result[0] === "x" && result[1] === "x" && result[2] === "x") || (result[0] === "x" && result[3] === "x" && result[6] === "x") ||
			(result[0] === "x" && result[4] === "x" && result[8] === "x") || (result[2] === "x" && result[5] === "x" && result[8] === "x") ||
			(result[6] === "x" && result[7] === "x" && result[8] === "x") || (result[3] === "x" && result[4] === "x" && result[5] === "x") || 
			(result[1] === "x" && result[4] === "x" && result[7] === "x") || (result[2] === "x" && result[4] === "x" && result[6] === "x")){
				console.log("Player 1 is the winner");
				winner = "done";
				var counter = 0;
				counter += 1;
				addToP1.textContent = Number(counter);

		
		}

	else if((result[0] === "o" && result[1] === "o" && result[2] === "o") || (result[0] === "o" && result[3] === "o" && result[6] === "o") ||
		 	(result[0] === "o" && result[4] === "o" && result[8] === "o") || (result[2] === "o" && result[5] === "o" && result[8] === "o") ||
			(result[6] === "o" && result[7] === "o" && result[8] === "o") || (result[3] === "o" && result[4] === "o" && result[5] === "o") ||
			(result[1] === "o" && result[4] === "o" && result[7] === "o") || (result[2] === "o" && result[4] === "o" && result[6] === "o")){
				console.log("Player 2 is the winner");
				winner = "done";
				var counter = 0;
				counter += 1;
				addToP2.textContent = Number(counter);

	}
	
}

function resetButton (){
	if (winner === "done"){
		event.target.classList.remove('imageO');
		event.target.classList.remove('imageX');

	}
}

reset.addEventListener("click", resetButton);




