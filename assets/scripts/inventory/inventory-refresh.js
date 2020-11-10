'use strict'

const iapi = require('./iapi')

// Constructor Function for mapping the response on hand inventory array when the program first loads
// and to be used after an item has been added or updated
// these values are sent in the index response with the exception of the age, which is transformed from
// the item creation date
// function Item (name, department, quantity, cost, price, owner, age) {
//   this.name = name;
//   this.department = department;
//   this.quantity = quantity;
//   this.cost = cost;
//   this.price = price;
//   this.owner = owner;
//   this.age = age;
// }

// test constructor script:
// const soda = new Item ('spindrift', 'drinks', 5, 4.5, 'Matt', 72)

const loadInventory = function (event) {
  // event.preventDefault()
  iapi.loadItems(event)
  // create objects for each item in the response array
    // .then(data => {
    //   for (let i = 0; i < data.length; i++) {
    //     // create a new object to be added to the array using Constructor Function
    //     const newItem = new Item(name, department, quantity, cost, age)
    //     $('.container').append(newItem)
    //     // add new div as child to the container representing a single Inventory Item
    //   }
    // })
    .then(iui.loadInventorySuccess)
    .catch(iui.loadInventoryFailure)
}

module.exports = {
  loadInventory
}
