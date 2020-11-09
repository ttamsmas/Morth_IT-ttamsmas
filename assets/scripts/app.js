'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onUpdatePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
  // inventory actions
  $('#new-item').on('submit', gevents.onNewItem)
  $('#update-item').on('submit', gevents.onUpdateItem)
  $('#delete-item').on('submit', gevents.onRemoveItem)
})
