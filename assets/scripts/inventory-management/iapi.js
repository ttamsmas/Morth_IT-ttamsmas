'use strict'

const config = require('./../config')
const store = require('./../store.js')

const newItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'POST',
    data: data
  })
}

const updateItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items/' + store.item,
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'PATCH',
    data: data
  })
}

const deleteItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items/' + store.item,
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'DELETE'
  })
}

const checkItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items/' + store.item,
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'GET',
    data: data
  })
}

const playerStatistics = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'GET',
    data: data
  })
}

const updateItemWinner = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items/' + store.item,
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  newItem,
  clicked,
  checkItem,
  playerStatistics,
  updateItemWinner
}
