const WHITE_KING = '♔';
const WHITE_QUEEN = '♕';
const WHITE_ROOK = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN = '♙';
const BLACK_KING = '♚';
const BLACK_QUEEN = '♛';
const BLACK_ROOK = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN = '♟';

// Example of drawing one of the pieces
drawText(WHITE_KING, width / 2, height / 2, 'black', 64);

registerOnclick((x, y) => {
  let turn = "x"

const d = r * 2
  const numbCircles = Math.floor(width / d)
  const offset = width - (d * numbCircles); 
  
  const spacingH = height / 7;
  const box_y = Math.floor(y / spacingH)

  const spacingW = width / 7;
  const box_x = Math.floor(x / spacingW)

});



const drawBoard = () => {
  for (let i = 0; i < 7; i++) {
    const x = (i + 1) * width / 7
    drawLine(x, 0, x, height, 'black', 5);
  }
  for (let i = 0; i < 7; i++) {
    const x = (i + 1) * height / 7
    drawLine(0, x, width, x, 'black', 6);

  }
}
drawBoard()


const fillwithcircles = (r) => {
  const d = r * 2
  const numbCircles = Math.floor(width / d)
  const offset = width - (d * numbCircles); 
  for (let x = 0; x < numbCircles; x++) {
    drawFilledCircle(offset + d * x, height / 2, r, 'red')
  }
}