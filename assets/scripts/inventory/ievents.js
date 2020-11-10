'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const iui = require('./iui')
const iapi = require('./iapi')
const store = require('./../store')

// New Item Button pulls data from multiple input fields to create a new object and then appends it to the Items array
const onNewItem = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  data.items.owner = store.user
  data.items.dateCreated = new Date()
  // console.log(data)
  iapi.newItem(data)
    .then(iui.newItemSuccess)
    .then(iapi.loadItems(event))
      .then(iui.loadInventorySuccess)
      .catch(iui.loadInventoryFailure)
    .catch(iui.newItemFailure)
}

module.exports = {
  onNewItem
  // onUpdateItem,
  // onRemoveItem,
}
// make a temporary index button and link to API before connecting to sign in or new item
