const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onGetGame = (event) => {
  event.preventDefault()
  api.getGame()
    .then(ui.onGetGameSuccess)
    .catch(ui.failure)
}

const onCreateGame = (event) => {
  event.preventDefault()
  console.log(event)
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
module.exports = {
  onGetGame,
  onCreateGame,
  onShowIndex
}
