
//events can only be used on objects
// textConent is what's inside the taglines ie <p>hello</p> . hello is the textContent. Value is used for number in the taglines.
// when using querySelectorALL instead of querySelector.. it puts things in an array. Which means you'll need [] to get the elements within. 

var game = true;
var tiles = document.querySelectorAll('td');
var addToP1 = document.querySelector('.p1Score');
var addToP2 = document.querySelector('.p2Score');
var reset = document.querySelector('.button')
var count = 0;
var result = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var winner = true;
var counterp1 = 0;
var counterp2 = 0;
var player1Win = document.querySelector('#player1')
var player2Win = document.querySelector('#player2')
var box = "";
var idx = "";



if (game !== false){
	
	function playerTurn (event) {
		if (winner === true){
			//convert to Number
			box = event.target 

			 idx = Number(box.id)
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
		}

		else if (winner === false){
			alert("Game Over. Click RESET to play again")

		}
	};

}


for(var i = 0; i < 9; i++) {
			
		tiles[i].addEventListener('click', playerTurn);
		

}





function XandO () {
		if ((result[0] === "x" && result[1] === "x" && result[2] === "x") || (result[0] === "x" && result[3] === "x" && result[6] === "x") ||
			(result[0] === "x" && result[4] === "x" && result[8] === "x") || (result[2] === "x" && result[5] === "x" && result[8] === "x") ||
			(result[6] === "x" && result[7] === "x" && result[8] === "x") || (result[3] === "x" && result[4] === "x" && result[5] === "x") || 
			(result[1] === "x" && result[4] === "x" && result[7] === "x") || (result[2] === "x" && result[4] === "x" && result[6] === "x")){
				
				counterp1 += 1;
				addToP1.textContent = Number(counterp1);
				winner = false;
				player1Win.textContent = "Player 1 WINS!"

		
		}

	else if((result[0] === "o" && result[1] === "o" && result[2] === "o") || (result[0] === "o" && result[3] === "o" && result[6] === "o") ||
		 	(result[0] === "o" && result[4] === "o" && result[8] === "o") || (result[2] === "o" && result[5] === "o" && result[8] === "o") ||
			(result[6] === "o" && result[7] === "o" && result[8] === "o") || (result[3] === "o" && result[4] === "o" && result[5] === "o") ||
			(result[1] === "o" && result[4] === "o" && result[7] === "o") || (result[2] === "o" && result[4] === "o" && result[6] === "o")){
			
				counterp2 += 1;
				addToP2.textContent = Number(counterp2);
				winner = false;
				player2Win.textContent = "Player 2 WINS!"

	}



	if (!result.includes(" ") ){
		alert("It's a draw!")
	}
	
	
}

function resetButton (){
		for(var i = 0 ; i < tiles.length; i++){

			tiles[i].classList.remove('imageO');
			tiles[i].classList.remove('imageX');
			result = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

		}	

		player1Win.textContent = "Player 1 Score"
		player2Win.textContent = "Player 2 Score"
		winner = true;
	}
		

reset.addEventListener('click', resetButton);



	
