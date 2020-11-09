'use strict'

const store = require('../store.js')
const gapi = require('./iapi')

const newItemSuccess = function (response) {
  $('#masterLog').text('New Item Succesfully Created')
}

const newItemFailure = function () {
  $('#masterLog').text('New Item Failure, Try Again')
}

const updateItemSuccess = function (response) {
  $('#masterLog').text('Update Success')
}

const updateItemFailure = function () {
  $('#masterLog').text('Update Failed, Try Again')
}

const deleteItemSuccess = function () {
  $('#masterLog').text('Item Deleted')
}

const deleteItemFailure = function () {
  $('#masterLog').text('Deletion Failed, Try Again')
}

module.exports = {
  newItemSuccess,
  newItemFailure,
  updateItemSuccess,
  updateItemFailure,
  deleteItemSuccess,
  deleteItemFailure
}
