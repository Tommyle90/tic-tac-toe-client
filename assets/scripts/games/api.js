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

const createGame = () => {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json'
  })
}

const gameIndex = (gameId) => {
  return $.ajax({
    method: 'GET',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/' + gameId.game.id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(gameId)
  })
}

const gameUpdate = (index, value) => {
  return $.ajax({
    method: 'PATCH',
    url: `https://tic-tac-toe-wdi.herokuapp.com/games/${store.games.game.id}`,
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
          'over': false
        }
      }
    )
  })
}
module.exports = {
  getGame,
  createGame,
  gameIndex,
  gameUpdate
}
