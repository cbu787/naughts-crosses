
$(document).on('ready', function () {
  // var combo =
  var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
  var turn = 0;

  function checkWinner() {
    //check for a winner here
    for(var i = 0; i < winningCombos.length; i++) {
      var combo = winningCombos[i];
      if (($('.x').hasClass(combo[0]) && $('.x').hasClass(combo[1]) && $('.x').hasClass(combo[2])) || ($('.o').hasClass(combo[0]) && $('.o').hasClass(combo[1]) && $('.o').hasClass(combo[2]))) {
        alert ("GAME OVER")
      }
      //combo will be [1,2,3]
      //compare each combo to a playerState array or use the DOM => $('.x')
      //alert("We have a winner!")
    }

  }

  $('td').on('click', function () {

    if (turn % 2 === 0) {
      $(this).html("X").addClass("x");
    } else {
      $(this).html("O").addClass("o");
    }

    checkWinner();

    $(this).off('click');
    turn++;

  });

});
