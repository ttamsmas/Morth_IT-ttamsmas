'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const gui = require('./iui')
const gapi = require('./iapi')
const store = require('./../store')

// const Item = function (name, department, quantity, cost) {
//   this.new-item-name = name;
//   this.new-item-department = department;
//   this.new-item-quantity = quantity;
//   this.new-item-cost = cost
// }

// New Item Button pulls data from multiple input fields to create a new object and then appends it to the Items array
const onNewItem = function (event) {
  event.preventDefault()
  const form = event.target
  console.log(form)
  const data = getFormFields(form)
  console.log(data)
  gapi.newItem(data)
    .then(gui.newItemSuccess)
    .then(gui.loadInventory)
    .catch(gui.newItemSuccess)
}

module.exports = {
  onNewItem,
  // onUpdateItem,
  // onRemoveItem,
}
