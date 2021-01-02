/**
 * @class
 */
class Executive {
	/**
	 * @description Sets up the game with the user selected number of ships. Constructor create event listeners on the game setup menu
	 */
    constructor() {
		/*
		* @member numShips {number} The number of ships each player will have
 		* @member rows {number} The number of rows each board will have
 		* @member cols {number} The number of columns each board will have
 		*/
		this.numShips = document.getElementById("ship-slider").value;
		this.rows = document.getElementById("board-slider").value;
		this.cols = document.getElementById("board-slider").value;
		
		document.getElementById("ship-slider").addEventListener("input", e => {
			this.numShips = e.target.value;
			document.getElementById("num-ships").innerHTML = this.numShips;
		});
		
		document.getElementById("board-slider").addEventListener("input", e => {
			this.rows = e.target.value;
			this.cols = e.target.value;
			document.getElementById("board-size").innerHTML = this.rows;
		});

		// Setting up the event for a click to change the menu for the board
		document.getElementById("complete").addEventListener("click", e => this.initGame());
    }
	
	/**
	* @description Sets up the player names and number of ships, then begins the game.
	**/
	initGame() {
		for (let i = 0; i <= 1; i++) {
			let playerName = document.getElementById("player" + i + "-name-input").value;
			if (playerName == "") playerName = "Player " + (i+1);
			document.getElementById("player" + i + "-name").value = playerName;
		}
		document.getElementById("menu").style.display = "none";
		document.getElementById("controls").style.display = "";
		document.getElementById("both_boards").style.display = "";
		document.getElementById("switch-turn").style.display = "none";
		this.game = new Gameplay(this.rows, this.cols, this.numShips);
	}
}
