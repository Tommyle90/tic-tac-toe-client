'use strict'

const store = require('../store.js')

const getGame = (inputData) => {
  return $.ajax({
    method: 'GET',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)

  })
}

const createGame = (inputData) => {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const gameUpdate = (index, value, over) => {
  return $.ajax({
    method: 'PATCH',
    url: `https://tic-tac-toe-wdi.herokuapp.com/games/${store.game}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'game': {
          'cell': {
            'index': index,
            'value': value
          },
          'over': over
        }
      }
    )
  })
}
module.exports = {
  getGame,
  createGame,
  gameUpdate
}
