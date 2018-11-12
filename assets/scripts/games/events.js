'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')
const gameLogic = require('./gameLogic.js')

const onGetGame = (event) => {
  event.preventDefault()
  api.getGame()
    .then(ui.onGetGameSuccess)
    .catch(ui.failure)
}

const onCreateGame = (event) => {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.failure)
}

const updateGame = (event) => {
  event.preventDefault()
  const data = $(event.target).data().cellIndex
  // const id = $(event.target).data().cellIndex
  const player = store.player
  const over = store.over
  console.log(data, player)
  // console.log(store)
  api.gameUpdate(data, player)
    .then(ui.onUpdateGameSuccess(data))
    .catch(ui.failure)
  gameLogic.gameBoard(data, player, over)
  gameLogic.switchPlayer(player)
  gameLogic.winCombo(store.cells)
  console.log(store)
  // gameLogic.turnOfGame(store.over)
}

module.exports = {
  onGetGame,
  onCreateGame,
  updateGame
}
