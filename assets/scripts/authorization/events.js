'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const iui = require('./../inventory/iui')
const iapi = require('./../inventory/iapi')

const onSignUp = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)
  // send the data to the api
  api.signUp(data)
    // handle successful response
    .then(ui.signUpSuccess)
    // handle failed response
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(iapi.loadItems)
    .then(iui.loadInventorySuccess)
    .catch(ui.signInFailure)
}

const onUpdatePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updatePassword(data)
    .then(ui.updateSucces)
    .catch(ui.updateFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onUpdatePassword,
  onSignOut
}
