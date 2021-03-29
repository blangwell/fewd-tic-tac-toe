let gameBoardSquares = document.querySelectorAll('.game-board__square');
let moves = 0;

for (let i = 0; i < gameBoardSquares.length; i++) {
  gameBoardSquares[i].addEventListener('click', function(e) {
    if (moves % 2 === 0) {
      e.target.classList.add('x-move');
    } else {
      e.target.classList.add('o-move');
    }
    moves++;
  })
}