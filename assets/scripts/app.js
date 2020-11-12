'use strict'

const events = require('./authorization/events.js')
const ievents = require('./inventory/ievents.js')
const iapi = require('./inventory/iapi.js')

$(() => {
  // authorization actions
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onUpdatePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
  // inventory actions
  $('#new-item').on('submit', ievents.onNewItem)
  $('.update').on('submit', ievents.onUpdateItem)
  $('.delete').on('submit', ievents.onRemoveItem)
})
