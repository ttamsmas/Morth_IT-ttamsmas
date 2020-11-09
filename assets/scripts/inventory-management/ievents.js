'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const gui = require('./iui')
const gapi = require('./iapi')
const store = require('./../store')

// Constructor Function for Creating Items and Mapping them to the On Hand Table
function Item (name, department, quantity, cost, price, owner, age) {
  this.name = name;
  this.department = department;
  this.quantity = quantity;
  this.cost = cost;
  this.price = cost * 2;
  this.owner = owner;
  this.age = age;
}

// New Item Button pulls data from multiple input fields to create a new item
// Also Refreshes the On Hand Inventory Summary once complete with the new item
const onNewItem = function (event) {
  event.preventDefault()
  const form = event.target
  console.log(form)
  const data = getFormFields(form)
  gapi.newItem(data)
    .then(gui.newItemSuccess)
    .then($('.new-item-name').text(''))
    .then($('.new-item-department').text(''))
    .then($('.new-item-quantity').text(''))
    .then($('.new-item-cost').text(''))
    .then(loadInventory)
    .catch(gui.newItemSuccess)
}

// load on hand inventory table once the user signs in
// refresh the table after an item is updated, removed, or updated
const loadInventory = function (event) {
  event.preventDefault()
  gapi.updateItem(data)
  // create objects for each item in the item array
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        // create a new object to be added to the array using Constructor Function
        const newItem = new Item(name, department, quantity, cost, price, owner, age)
        $('.container').append(newItem)
        // add new div as child to the container representing a single Inventory Item
      }
    })
    .then(gui.updateItemSuccess)
    .catch(gui.updateItemFailure)
}



module.exports = {
  onNewItem,
  onUpdateItem,
  onRemoveItem,
  loadInventory
}
