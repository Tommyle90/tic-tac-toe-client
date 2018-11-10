'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')

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

const onShowIndex = (event) => {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log(gameData)
  api.gameIndex(gameData)
    .then(ui.gameIndexSuccess)
    .catch(ui.failure)
}

const player = 'X'

const updateGame = (event) => {
  event.preventDefault()
  const data = $(event.target).data()
  const id = data.cellIndex
  console.log(id)
  store.gameBoard[id] = player
  console.log(store)
  api.gameUpdate(id, player)
    .then()
    .catch()
}

module.exports = {
  onGetGame,
  onCreateGame,
  onShowIndex,
  updateGame
}
