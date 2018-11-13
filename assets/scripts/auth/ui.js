'use strict'

const store = require('../store.js')

const signUpSuccess = (signUpResponse) => {
  $('#message').html('You signed up successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-up-form').fadeOut(500)
  $('.box').empty()
}

const failure = (failureResponse) => {
  $('#message').html('Something went wrong! Try again!')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user
  $('#message').html('You signed in successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').fadeOut(50)
  $('#sign-in-form').fadeOut(50)
  $('#sign-out-btn').show()
  $('#change-pass-btn').show()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#get-games').show()
  $('#create-games').show()
  $('.box').empty()
}
//
const changePasswordSuccess = (changePasswordResponse) => {
  $('#message').html('You changed your password successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').fadeOut(500)
  $('.box').empty()
}

const onSignOutSuccess = (signOutResponse) => {
  $('#message').html('You have successfully signed out')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#message-box').empty()
  $('#sign-out-btn').hide()
  $('#change-pass-btn').hide()
  $('#sign-up-form').fadeOut(500)
  $('#sign-in-form').fadeOut(500)
  $('#change-password-form').fadeOut(500)
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
  $('#bottom-btn').hide()
  $('.game-container').hide()
  $('#get-games').hide()
  $('#create-games').hide()
  $('#change-password-form').trigger('reset')
  $('.box').trigger('reset')
  setTimeout(function () {
    $('#message').fadeOut().empty()
  }, 1000)
}
module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  changePasswordSuccess,
  onSignOutSuccess
}
