'use strict'
const store = require('../store.js')

const gameBoard = (id, value) => {
  if (store.cells[id] === '') {
    store.cells[id] = value
    console.log('Click')
  } else if (store.cells[id] === 'X' || 'O') {
    console.log('tommy Cant click here')
  } else if (store.games.game.over === true) {
    $('.box').off('click')
  }
}

const switchPlayer = (playerId) => {
  const player = playerId === 'X' ? 'O' : 'X'
  store.player = player
  // if (store.over === true) {
  //   store.player = 'X'
  // }
  return store.player
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
    store.games.game.over = true
    store.player = 'X'
    console.log('X wins the game')
  } else if ((gameboard[0] === 'O' && gameboard[1] === 'O' && gameboard[2] === 'O') ||
(gameboard[3] === 'O' && gameboard[4] === 'O' && gameboard[5] === 'O') ||
(gameboard[6] === 'O' && gameboard[7] === 'O' && gameboard[8] === 'O') ||
(gameboard[0] === 'O' && gameboard[3] === 'O' && gameboard[6] === 'O') ||
(gameboard[1] === 'O' && gameboard[4] === 'O' && gameboard[7] === 'O') ||
(gameboard[2] === 'O' && gameboard[5] === 'O' && gameboard[8] === 'O') ||
(gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') ||
(gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O')) {
    // $('.box').off('click')
    store.games.game.over = true
    store.player = 'X'
    console.log('O wins the game')
  } else if (gameboard[0] !== '' && gameboard[1] !== '' && gameboard[2] !== '' &&
  gameboard[3] !== '' && gameboard[4] !== '' && gameboard[5] !== '' &&
  gameboard[6] !== '' && gameboard[7] !== '' && gameboard[8] !== '') {
    // $('.box').off('click')
    store.games.game.over = true
    store.player = 'X'
    console.log('Tie Game')
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
