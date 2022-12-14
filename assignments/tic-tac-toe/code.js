// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

const cordArray = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
let turn = "x"

const drawBoard = () => {
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * width / 3
    drawLine(x, 0, x, height, 'black', 5);
  }
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * height / 3
    drawLine(0, x, width, x, 'black', 5);

  }
}
drawBoard()

let winner 
const identifyWin = (turn) => {
  if (cordArray[0][0] === turn && cordArray[0][1] === turn && cordArray[0][2] === turn) {
    winner = {winner: turn, winType: 'horizontal', winLocation: 'top'}
  } else if (cordArray[1][0] === turn && cordArray[1][1] === turn && cordArray[1][2] === turn) {
    winner = {winner: turn, winType: 'horizontal', winLocation: 'mid'}
  } else if (cordArray[2][0] === turn && cordArray[2][1] === turn && cordArray[2][2] === turn) {
    winner = {winner: turn, winType: 'horizontal', winLocation: 'low'}
  } else if (cordArray[0][0] === turn && cordArray[1][0] === turn && cordArray[2][0] === turn) {
    winner = {winner: turn, winType: 'vertical', winLocation: 'left'}
  } else if (cordArray[0][1] === turn && cordArray[1][1] === turn && cordArray[2][1] === turn) {
    winner = {winner: turn, winType: 'vertical', winLocation: 'mid'}
  } else if (cordArray[0][2] === turn && cordArray[1][2] === turn && cordArray[2][2] === turn) {
    winner = {winner: turn, winType: 'vertical', winLocation: 'right'}
  } else if (cordArray[0][0] === turn && cordArray[1][1] === turn && cordArray[2][2] === turn) {
    winner = {winner: turn, winType: 'diagonal', winLocation: 'LToR'}
  } else if (cordArray[2][0] === turn && cordArray[1][1] === turn && cordArray[0][2] === turn) {
    winner = {winner: turn, winType: 'diagonal', winLocation: 'RToL'}
  } 
  return winner  
}

let turns = 0
registerOnclick((x, y) => {
  const spacingH = height / 3;
  const box_y = Math.floor(y / spacingH)

  const spacingW = width / 3;
  const box_x = Math.floor(x / spacingW)

  if (cordArray[box_y][box_x] === '' && identifyWin(turn) === undefined) {
    drawText(turn, (box_x * (width / 3) + width / 6) - 50, (box_y * (height / 3) + height / 6) + 50, 'black', Math.min(width, height) * 0.3);
    cordArray[box_y][box_x] = turn
    console.log(JSON.stringify(identifyWin(turn)))
    turn = turn === "x" ? turn = "o" : turn = "x"
    turns++
    if (turns === 9 && identifyWin === undefined) {
      drawText('DRAW',width/2, height/2,'black')
    }
  }
});

