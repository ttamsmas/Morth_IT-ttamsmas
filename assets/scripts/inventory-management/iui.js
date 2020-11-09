'use strict'

const store = require('../store.js')
const gapi = require('./iapi')

// Constructor Function for mapping the response on hand inventory array when the program first loads
// and to be used after an item has been added or updated
// these values are sent in the index response with the exception of the age, which is transformed from
// the item creation date
function Item (name, department, quantity, cost, price, owner, age) {
  this.name = name;
  this.department = department;
  this.quantity = quantity;
  this.cost = cost;
  this.price = price;
  this.owner = owner;
  this.age = age;
}

// test constructor script:
// const soda = new Item ('spindrift', 'drinks', 5, 4.5, 'Matt', 72)

// load on hand inventory table once the user signs in
// refresh the table after an item is updated, removed, or updated
// const loadInventory = function (event) {
//   event.preventDefault()
//   gapi.updateItem(data)
//   // create objects for each item in the item array
//     .then(data => {
//       for (let i = 0; i < data.length; i++) {
//         // create a new object to be added to the array using Constructor Function
//         const newItem = new Item(name, department, quantity, cost, age)
//         $('.container').append(newItem)
//         // add new div as child to the container representing a single Inventory Item
//       }
//     })
//     .then(gui.updateItemSuccess)
//     .catch(gui.updateItemFailure)
// }

const newItemSuccess = function (response) {
  console.log(response)
  $('#masterLog').text('New Item Succesfully Created')
  $('.new-item-name').text('')
  $('.new-item-department').text('')
  $('.new-item-quantity').text('')
  $('.new-item-cost').text('')
}

const newItemFailure = function () {
  $('#masterLog').text('New Item Failure, Try Again')
}

const updateItemSuccess = function (response) {
  $('#masterLog').text('Update Success')
}

const updateItemFailure = function () {
  $('#masterLog').text('Update Failed, Try Again')
}

const deleteItemSuccess = function () {
  $('#masterLog').text('Item Deleted')
}

const deleteItemFailure = function () {
  $('#masterLog').text('Deletion Failed, Try Again')
}

module.exports = {
  newItemSuccess,
  newItemFailure,
  updateItemSuccess,
  updateItemFailure,
  deleteItemSuccess,
  deleteItemFailure
  // loadInventory
}
