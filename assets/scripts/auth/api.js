'use strict'

const store = require('../store.js')

const signUp = (inputData) => {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-up',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signIn = (inputData) => {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-in',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}
//
const changePassword = (inputData) => {
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signOut = (inputData) => {
  return $.ajax({
    method: 'DELETE',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
