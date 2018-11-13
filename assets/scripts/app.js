'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./games/events.js')
//
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-btn').on('click', authEvents.onSignOut)
  $('#get-games').on('click', gameEvents.onGetGame)
  $('#create-games').on('click', gameEvents.onCreateGame)
  $('.box').on('click', gameEvents.updateGame)
})

$('#game-container').click(function () {
  $('#sign-up-form').fadeOut(500)
  $('#sign-in-form').fadeOut(500)
  $('#change-password-form').fadeOut(500)
  $('#message').show(500)
})

$('#sign-up-btn').click(function () {
  $('#sign-up-form').fadeIn(500)
  $('#sign-in-form').fadeOut(500)
  $('#change-password-form').fadeOut(500)
  $('#message').show(500)
})

$('#sign-in-btn').click(function () {
  $('#sign-in-form').fadeIn(500)
  $('#sign-up-form').fadeOut(500)
  $('#change-password-form').fadeOut(500)
  $('#message').show(500)
})

$('#change-pass-btn').click(function () {
  $('#change-password-form').fadeIn(500)
  $('#sign-up-form').fadeOut(500)
  $('#sign-in-form').fadeOut(500)
  $('#message').show(500)
})
