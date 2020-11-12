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
  data.item.owner = store.user
  data.item.dateCreated = new Date()
  // console.log(data)
  iapi.newItem(data)
    .then(iui.newItemSuccess)
    .then(iapi.loadItems)
      .then(iui.loadInventorySuccess)
      .catch(iui.loadInventoryFailure)
    .catch(iui.newItemFailure)
}

const onUpdateItem = function (event) {
  event.preventDefault()
  console.log(event.target)
  const form = event.target
  // pull the item id from the parent for update
  console.log(form.parentElement.id)
  const data = getFormFields(form)
  console.log(data)
  console.log(data.items.quantity)
  const sendUpdate = {
    items: {
      item: {
        id: form.parentElement.id,
        quantity: data.items.quantity
      },
      over: 'false'
    }
  }
  iapi.updateItem(sendUpdate)
    .then(iui.updateItemSuccess)
    .then(iapi.loadItems)
      .then(iui.loadInventorySuccess)
      .catch(iui.loadInventoryFailure)
    .catch(iui.updateItemFailure)
}

const onRemoveItem = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  // console.log(data)
  // iapi.newItem(data)
  //   .then(iui.newItemSuccess)
  //   .then(iapi.loadItems)
  //     .then(iui.loadInventorySuccess)
  //     .catch(iui.loadInventoryFailure)
  //   .catch(iui.newItemFailure)
}

module.exports = {
  onNewItem,
  onUpdateItem,
  onRemoveItem,
}
