$(document).on('ready', function () {
  var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
  var turn = 0;

  function checkWinner() {
    for(var i = 0; i < winningCombos.length; i++) {
      var combo = winningCombos[i];
      if (hasWon('.x', combo)) {
        alert ("GAME OVER: PLAYER 1 WINS");
        location.reload();
    } else if (hasWon('.o', combo)) {
        alert ("GAME OVER: PLAYER 2 WINS");
        location.reload();
      };
    };
    return false;
  };

  function hasWon(letter, theCombo) {
    return $(letter).hasClass(theCombo[0]) && $(letter).hasClass(theCombo[1]) && $(letter).hasClass(theCombo[2]);
  };

  function checkNoWinner() {
    if ((turn === 9) && (checkWinner() === false)) {
    alert ("STALEMATE: YOU ARE BOTH LOSERS");
    location.reload();
    };
  };

  $('td').on('click', function () {

    if (turn % 2 === 0) {
      $(this).html("X").addClass("x");
    } else {
      $(this).html("O").addClass("o");
    }

    $(this).off('click');
    turn++;

    checkWinner();
    checkNoWinner();

  });
});
