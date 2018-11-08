// const store = require('../store.js')

const onGetGameSuccess = (gameSuccess) => {
  $('#message').html('Found Games Played!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}
const failure = (failureResponse) => {
  $('#message').html('Something went wrong! Try again!')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}
const onCreateGameSuccess = (createGame) => {
  $('#message').html('Started New Game')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}
const gameIndexSuccess = (indexGame) => {
  $('#message').html('Game ID')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}
module.exports = {
  failure,
  onGetGameSuccess,
  onCreateGameSuccess,
  gameIndexSuccess
}
