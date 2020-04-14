// beginning a game initializes blank grid, initializes 2 players, sets winArrays to 0
// first player to go is designated playerX, second is playerO
// when playerX clicks a square, boxIdArray[3]=x; when playerO clicks a square, boxIDArray[3]=O
// when boxIDArray=x, check [winArrays] to see which [winArray].contains [boxID]; if [winArray] contains [boxID], winArray[4]=1;
// when boxIDArray=o, check [winArrays] to see which [winArray].contains [boxID]; if [winArray] contains [boxID], winArray[4]=-1;
// xxwinArrays=[[[1,1], [1,2] [1,3], 0], [2,1], [2,2], [2,3], 0] [...]]
// xxwinArrays=[winRows[Row1 squares, r1 score], [Row2 squares, r2 score], [...]]
// [1,1] onClick.if winRow contains [clicked element], add or subtract 1 from [i=4]
// if winRow[4]=3 or winRow[4]=-3, winner!
// if all boxID[4] truthy (aka, all boxes have been clicked) but no winRow[4]=|3|, game is a draw
// if winner! or draw, end game, display result, display reset button

// function Board() {
//   // this.grid = [];
//   // this.boxes = [];
//   this.turn = 0;
//   this.scores = [0, 0, 0, 0, 0, 0, 0, 0];
//   this.gameOver = false;
// };

// function Grid () {
//   // this.boxes = [];
//   var row = 1
//   var col = 1
//   var box = []
  // var grid = []
  //   for (row=1; row<4; row++) {
  //     col = 1;    
  //     for (col=1; col<4; col++) {
  //       box = [row, col];
  //       var boxStr = box.toString()
  //       grid.push(boxStr); 
  //     }
  //   return grid
//   }
// };

// function Grid() {
//   this.boxes = [];
// }

// function Box(row, col) {  // constructor
//   this.row = row;
//   this.col = col;
// }

// Grid.prototype.addBoxes = 
// function (grid) { 
// }
//========================================================================================


// This function will execute when a button "id" is clicked!
// scoreCounter = function(checkedBox) {
//   // for (i=0; i<grid.length; i++) {
//     var checkedBox = ; //jquery id of box passed in from html
    // grid.forEach(boxStr) (function() {
    //   if(boxStr === checkedBox) { //compare fixed positions on grid to checkedBox
    //     for (i=0; i<winArrays.length; i++){
          
//       }
//     })
//   }
// }

// function Game() {
//   this.turn = 1;
//   this.score = 0;
//   this.gameOver = false;
//   }

// Game.prototype.turn(); 

// Player 1
// if(turn % 2 == 1) {
//   placeMark(squareId, "X");
// } else {
//   // Player 2 / Computer
//   placeMark(squareId, "O");
// }