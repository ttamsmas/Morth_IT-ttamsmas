'use strict'

const store = require('../store.js')

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
  $('#masterLog').text('Thanks for signing in! Your User ID: ' + response.user._id)
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmmation').val('')
  $('.inventoryFunctions').show()
  $('#old-password').text('')
  $('#new-password_confirmmation').text('')
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
  $('#old-password').val('')
  $('#new-password_confirmmation').val('')
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
  $('#new-item-name').val('')
  $('#new-item-department').val('')
  $('#new-item-quantity').val('')
  $('#new-item-cost').val('')
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
