// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
let turn = "x"

registerOnclick((x, y) => {

  const yRow = () => {
    let rowHeight = height / 3;
    return Math.floor(y / rowHeight)
  }
  const xRow = () => {
    let rowWidth = width / 3;
    return Math.floor(x / rowWidth)
  }

  drawText(turn, xRow * (width / 3) + width / 6, yRow * (height / 3) + height / 6, 'black', Math.min(width, height) * 0.3);
  turn = turn === "x" ? turn = "O" : turn = "x"


});

drawBoard()
