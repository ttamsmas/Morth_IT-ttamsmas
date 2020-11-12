'use strict'

const store = require('../store.js')
const iapi = require('../inventory/iapi')

const signUpSuccess = function (response) {
  $('#masterLog').text('You have Been Signed Up ' + response.user.email)
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmmation').val('')
}

const signUpFailure = function () {
  $('#masterLog').text('Account Creation Failed, Please Try Again')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmmation').val('')
}

const signInSuccess = function (response) {
  $('#masterLog').text('Thanks for signing in! ' + response.user.email)
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#inventoryFunctions').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmmation').val('')
  $('.inventoryFunctions').show()
}

const signInFailure = function () {
  $('#masterLog').text('Sign In Failed, Try Again')
}

const updateSucces = function () {
  $('#masterLog').text('Password Has Been Updated Successfully')
  $('#old-password').val('')
  $('#new-password_confirmmation').val('')
}

const updateFail = function () {
  $('#masterLog').text('Update Password Failed, Please Try Again')
}

const signOutSuccess = function (response) {
  $('#masterLog').text('Sign Out Successful, Please Sign In to Continue')
  $('#secondLog').text('')
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmation').val('')
  $('#inventoryFunctions').hide()
  // clear user
  delete store.user
  $('.inventoryFunctions').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  updateFail,
  updateSucces,
  signOutSuccess
}
