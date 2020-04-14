var winArraysCount = [0, 0, 0, 0, 0, 0, 0, 0];
var winArrays = [["1,1","1,2","1,3"], ["2,1","2,2","2,3"], ["3,1","3,2","3,3"], ["1,1","2,2","3,3"], ["1,3","2,2","3,1"], ["1,1","2,1","3,1"], ["1,2","2,2","3,2"], ["1,3","2,3","3,3"]];

var scoreCounter = function(checkedBox, buttonCount) {
  for (i=0; i<winArrays.length; i++) {
    if (winArrays[i].includes(checkedBox)) {
      if (buttonCount%2==1){
        winArraysCount[i] ++;
        console.log(winArraysCount);
      }
      else {  
        winArraysCount[i] -= 1;
        console.log(winArraysCount);
      }
    }
  }
}

var resetBoard = function() {
  for(var i = 0; i < winArraysCount.length; i++) {
    winArraysCount[i] = 0;
  }

  $(".toes").each(function() {
    $(this).html("");
    $(this).prop("disabled", false);
  })
}

export var checkWin = function(buttonCount) {
  if(winArraysCount.includes(3)) {
    return "Player 1 Wins!";
  }
  else if(winArraysCount.includes(-3)) {
    return "Player 2 Wins!";
  }
  else if(buttonCount === 9){
    return "It's a draw!";
  } else {
    console.log("Something is wrong in checkWin")
  }
}

export var findPlayerMark = function(turn) {
  var output = "";

  if(turn % 2 == 1) { 
    output = "X";
  } else {
    output = "O";
  }

  return output;
}

// var turnListener = function(turn) {
//   $(".toes:button").click(function() {
//     var checkedBox = $(this).attr("id");
//     turn++;

//     $(this).prop("disabled", true);   
//     $(this).text(findPlayerMark(turn));
//     scoreCounter(checkedBox, buttonCount);
//     var winner = checkWin(buttonCount);

//     if(winner){
//       alert(winner);
//       resetBoard();
//       buttonCount = 0;
//     }      
//   });
// }


// $(document).ready(function() {
//   var turn = 0;

//   turnListener(turn);
    
// });



