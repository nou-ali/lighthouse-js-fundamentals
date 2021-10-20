//She needs to track the coordinates of the floats to help her capture their best angles.
//which will calculate the position of the parade based on an array of directional moves
//return an array representing the position of the parade after completing all of the moves.
// The first element of the array should be the X position, 
//and the second element of the array should be the Y position. The parade begins at [0,0].

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] ; 

function finalPosition(moves) {
  let newPosition = [0,0]; 
  for (const move of moves) {
    if (newPosition === "west") {
      x = x++;
    } else if (newPosition === "east") {
      x = x--;
    } else if (newPosition === "north") {
      y = y++;
    } else if (newPosition === "south") {
      y = y--;
    } 
    newPosition.push(x,y);
    return newPosition;
  }
}


const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] ; 
var move;
function finalPosition(moves) {
  let position = [0,0]; 
  for (const move of moves) {
    if (move === "west") {
      position [0] = position [0] - 1;
    } else if (move === "east") {
      position [0] = position [0] + 1;
    } else if (move === "north") {
      position [1] = position [1] + 1;
    } else if (move === "south") {
      position [1] = position [1] - 1;
    } 
  }
  return position;
}

finalPosition(moves);