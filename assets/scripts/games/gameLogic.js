'use strict'
const store = require('../store.js')

const gameBoard = (id, value, over) => {
  if (over === true) {
    return
  }
  if (store.cells[id] === '') {
    store.cells[id] = value
    console.log('Click')
    store.misclick = 'click'
  } else if (store.cells[id] === 'X' || 'O') {
    $('#message').html('Misclick')
    store.misclick = 'misclick'
  }
}

const switchPlayer = (playerId) => {
  if (store.misclick === 'misclick') {
    return
  }
  if (store.misclick === 'click') {
    const player = playerId === 'X' ? 'O' : 'X'
    store.player = player
    $('#message-box').html(`Player: ${store.player}'s Turn`)
    $('#message-box').addClass('success-message')
    $('#message-box').removeClass('error-message')
    return player
  // if (store.player === 'O' && store.over === false) {
  //   $(event.target).html('X')
  // } else if (store.player === 'X' && store.over === false) {
  //   $(event.target).html('O')
  // }
  // return store.player
  }
}

const winCombo = (gameboard) => {
  if ((gameboard[0] === 'X' && gameboard[1] === 'X' && gameboard[2] === 'X') ||
(gameboard[3] === 'X' && gameboard[4] === 'X' && gameboard[5] === 'X') ||
(gameboard[6] === 'X' && gameboard[7] === 'X' && gameboard[8] === 'X') ||
(gameboard[0] === 'X' && gameboard[3] === 'X' && gameboard[6] === 'X') ||
(gameboard[1] === 'X' && gameboard[4] === 'X' && gameboard[7] === 'X') ||
(gameboard[2] === 'X' && gameboard[5] === 'X' && gameboard[8] === 'X') ||
(gameboard[0] === 'X' && gameboard[4] === 'X' && gameboard[8] === 'X') ||
(gameboard[2] === 'X' && gameboard[4] === 'X' && gameboard[6] === 'X')) {
    // $('.box').off('click')
    store.over = true
    store.player = 'X'
    store.winner = 'X'
    console.log('X wins the game')
    $('#message-box').html('X wins!')
  } else if ((gameboard[0] === 'O' && gameboard[1] === 'O' && gameboard[2] === 'O') ||
(gameboard[3] === 'O' && gameboard[4] === 'O' && gameboard[5] === 'O') ||
(gameboard[6] === 'O' && gameboard[7] === 'O' && gameboard[8] === 'O') ||
(gameboard[0] === 'O' && gameboard[3] === 'O' && gameboard[6] === 'O') ||
(gameboard[1] === 'O' && gameboard[4] === 'O' && gameboard[7] === 'O') ||
(gameboard[2] === 'O' && gameboard[5] === 'O' && gameboard[8] === 'O') ||
(gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') ||
(gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O')) {
    // $('.box').off('click')
    store.over = true
    store.player = 'X'
    store.winner = 'O'
    console.log('O wins the game')
    $('#message-box').html('O wins!')
  } else if (gameboard[0] !== '' && gameboard[1] !== '' && gameboard[2] !== '' &&
  gameboard[3] !== '' && gameboard[4] !== '' && gameboard[5] !== '' &&
  gameboard[6] !== '' && gameboard[7] !== '' && gameboard[8] !== '') {
    // $('.box').off('click')
    store.over = true
    store.player = 'X'
    store.winner = 'Tie'
    console.log('Tie Game')
    $('#message-box').html('Tie Game!')
  }
}
// const turnOfGame = (event) => {
//   if (event === true) {
//     $('.box').on('click')
//     // store.over = true
//   }
// }
module.exports = {
  switchPlayer,
  winCombo,
  gameBoard
}
