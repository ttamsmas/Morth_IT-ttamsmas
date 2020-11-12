'use strict'

const config = require('./../config')
const store = require('../store')

const newItem = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/items',
    headers: {'Authorization': 'Bearer ' + store.user.token},    method: 'POST',
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


// AJAX Index / GET Request for item array
const loadItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'GET'
  })
}

module.exports = {
  newItem,
  loadItems,
  updateItem
}
