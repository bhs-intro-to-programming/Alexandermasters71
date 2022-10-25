// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

registerOnclick((x, y) => {
  drawText('X', x-50, y+50, 'black', Math.min(width, height) * 0.3);
});

const drawBoard = (drawLine) => {
  drawLine(400, 300, width, height, 'red');
  for (drawLine = 0; drawline < 1; drawLine++) {
  }
}