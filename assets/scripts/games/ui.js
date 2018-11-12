'use strict'

const store = require('../store.js')

const onGetGameSuccess = (gameSuccess) => {
  $('#message').text(`Total games played: ${gameSuccess.games.length}`)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}
const failure = (failureResponse) => {
  $('#message').html('Something went wrong! Try again!')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}
const onCreateGameSuccess = (createGame) => {
  store.over = createGame.game.over
  store.games = createGame
  store.game = createGame.game.id
  store.cells = createGame.game.cells
  console.log('this is the create game store', store)
  $('#message').html('Started New Game')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('.box').html('')
}
const onUpdateGameSuccess = (data) => {
  if (store.player === 'X' && store.over === false && store.cells[data] === '') {
    $(event.target).html('X')
  } else if (store.player === 'O' && store.over === false && store.cells[data] === '') {
    $(event.target).html('O')
  }
}

module.exports = {
  failure,
  onGetGameSuccess,
  onCreateGameSuccess,
  onUpdateGameSuccess
}
