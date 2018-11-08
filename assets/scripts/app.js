'use strict'
const authEvents = require('./auth/events.js')
const gameEvents = require('./games/events.js')
//
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#get-games').on('click', gameEvents.onGetGame)
  $('#create-games').on('click', gameEvents.onCreateGame)
  $('#show-game-index').on('submit', gameEvents.onShowIndex)
})
