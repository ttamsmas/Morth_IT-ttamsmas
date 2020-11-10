'use strict'
// add a new .then in the post request for ievents


const store = require('../store')
const iapi = require('./iapi')
// const inventoryRefresh = require('./inventory-refresh')

const newItemSuccess = function (response) {
  $('#masterLog').text('New Item Succesfully Created')
// clear input fields after success
  $('#new-item-name').val('')
  $('#new-item-department').val('')
  $('#new-item-quantity').val('')
  $('#new-item-cost').val('')
}

const newItemFailure = function (error) {
  $('#masterLog').text('New Item Failure, Try Again')
}

const loadInventorySuccess = function () {
  $('#masterLog').text('Inventory Refreshed')
}

const loadInventoryFailure = function () {
  $('#masterLog').text('Inventory Refresh Failed')
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
  deleteItemFailure,
  loadInventorySuccess,
  loadInventoryFailure
}
