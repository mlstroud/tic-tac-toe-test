function Board() {
  this.squares = [];
  this.turn = 0;
  this.scores = [0, 0, 0, 0, 0, 0, 0 ,0];
  this.gameOver = false;

  for(var row = 0; row < 3; row++) {
    for(var col = 0; col < 3; col++) {
      var square = new GameSquare(row + "-" + col);
      this.squares.push(square);
    }
  }
}

Board.prototype.checkForWin = function() {
  if(this.scores.includes(3)){
    this.endGame("Player");
    return true;
  }
  else if(this.scores.includes(-3)){
    this.endGame("Computer");
    return false;
  }
}

Board.prototype.endGame = function (winner) {
  alert(winner + " won the game.");
}

Board.prototype.updateScore = function(squareId, playerId) {

  switch(squareId){
    case "0-0":
      var updateIndex = [0, 3, 6];
      break;
    case "0-1":
      var updateIndex = [0, 4];
      break;
    case "0-2":
      var updateIndex = [0, 5, 7];
      break;
    case "1-0":
      var updateIndex = [1, 3];
      break;
    case "1-1":
      var updateIndex = [1, 4, 6, 7];
      break;
    case "1-2":
      var updateIndex = [1, 5];
      break;
    case "2-0":
      var updateIndex = [2, 3, 7];
      break;
    case "2-1":
      var updateIndex = [2, 4];
      break;
    case "2-2":
      var updateIndex = [2, 5, 6];
      break;
  }

  for(var i=0; i < updateIndex.length; i++) {
    if(playerId === "Player") {
      this.scores[updateIndex[i]]++;
    }
    else {
      this.scores[updateIndex[i]]--;
    }
  }
}


function GameSquare(squareId) {
  this.value = "";
  this.Id = squareId;
}

GameSquare.prototype.playX = function(squareId) {
  return this.value = "X";
}

GameSquare.prototype.playO = function(squareId) {
  return this.value = "O";
}

GameSquare.prototype.reset = function () {
  return this.value = "";
}


function computerPlay() {
  var unplayedSquares = [];

  for(var i = 0; i < gameBoard.squares.length; i++) {
    if(gameBoard.squares[i].value === "") {
      unplayedSquares.push(gameBoard.squares[i]);
    }
  }

  var index = Math.floor(Math.random() * unplayedSquares.length);
  unplayedSquares[index].value = "O";
  $(`#${unplayedSquares[index].Id}`).html("O");
  gameBoard.updateScore(unplayedSquares[index].Id, "Computer");
  gameBoard.checkForWin();
}

function play(squareId, value) {

  for(var i = 0 ; i < gameBoard.squares.length; i++) {
    if(squareId == gameBoard.squares[i].Id) {
      gameBoard.squares[i].value = value;
      gameBoard.updateScore(gameBoard.squares[i].Id, "Player");
      break;
    }
  }
  if(!gameBoard.checkForWin()){
    computerPlay();
  }
}

var gameBoard = new Board();

$(document).ready(function () {

  $(".game-button").click(function() {
    $(this).html("X");
    var squareId = $(this).attr("id");
    play(squareId, "X");
  });
}); 