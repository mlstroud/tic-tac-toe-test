                                                                                                                     m # _TicTacToe_

#### _A 2-Player TicTacToe Game created in Javascript_

#### By _**Julia Seidman & Matt Stroud**_

## Description

_This program is a basic tic tac toe game that displays a blank 3x3 grid and allows a user to take turns with the computer or another _

_Specifications:_
* Program will display an empty 3x3 grid.
    * 
    * 
* When player 1 clicks a square, that square displays "x".
    * 
    * 
* When player 2 clicks a square, that square displays "o".
    * 
    * 
* If 3-in-a-row is achieved, program displays which player won.  3-in-a-row could also be 3 in a column or 3 diagonally.
* If no 3-in-a-row is achieved, but board is filled, program displays "It's a draw!"
* After either a win or a draw, button shows to allow a reset.



## Setup/Installation Requirements

* _Open the page in a web browser._


## Known Bugs

__

## Support and contact details

_Contact Julia Seidman, Matt Stroud or Mikah Mathews at juliaseid@gmail.com, lixingke06@gmail.com,  for support or questions._

### License

Copyright (c) 2020 **_Julia Seidman, Matt Stroud & Mikah Mathews_** under MIT copyright


Board constructor - properties include squares array, turn counter, win scores array, gameOver property

function creates grid

board prototype checks win by looking for score of 3, executes endGame prototype on the winner

endGame prototype creates an alert to name the winner

board prototype updateScore updates score array based on what button id is clicked

GameSquare constructor includes marked value and ID for each square

GameSquare prototypes update marked value to X, O, or blank

(logic for computer adversary)

game play function loops through grid array to find the button id that was clicked, then updates score accordingly

if someone wins, break

----

document ready function

when game button is clicked, 
html updates to X or O depending on turn
set squareID variable (which tracks button click) to "id"
game play function called on squareID & X/O

