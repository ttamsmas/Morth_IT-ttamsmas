'use strict'

const events = require('./authorization/events.js')
const gevents = require('./inventory-management/ievents.js')

$(() => {
  // authorization actions
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onUpdatePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
  // inventory actions
  $('#new-item').on('submit', gevents.onNewItem)
  // $('#update-item').on('submit', gevents.onUpdateItem)
  // $('#delete-item').on('submit', gevents.onRemoveItem)
  // // inventory summary actions
  // gevents.loadInventory
})
