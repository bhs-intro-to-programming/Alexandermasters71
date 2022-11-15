const WHITE_KING   = '♔';
const WHITE_QUEEN  = '♕';
const WHITE_ROOK   = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN   = '♙';
const BLACK_KING   = '♚';
const BLACK_QUEEN  = '♛';
const BLACK_ROOK   = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN   = '♟';

// Example of drawing one of the pieces
drawText(WHITE_KING, width/2, height/2, 'black', 64);



const drawBoard = () => {
  for (let i = 0; i < 9; i++) {
    const x = (i + 1) * width / 9
    drawLine(x, 0, x, height, 'black', 5);
  }
  for (let i = 0; i < 9; i++) {
    const x = (i + 1) * height / 9
    drawLine(0, x, width, x, 'black', 5);

  }
}
drawBoard()