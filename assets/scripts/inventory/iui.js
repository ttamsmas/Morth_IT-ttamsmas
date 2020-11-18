'use strict'
// add a new .then in the post request for ievents

const mainContainer = $('.container')
const cloneContainer = $('.singleItem')

const newItemSuccess = function (response) {
  $('#masterLog').text('New Item Succesfully Created')
  // clear input fields after success
  $('#new-item-name').val('')
  $('#new-item-department').val('')
  $('#new-item-quantity').val('')
  $('#new-item-cost').val('')
}

const newItemFailure = function () {
  $('#masterLog').text('New Item Failure, Try Again')
}

const loadInventorySuccess = function (response) {
  $('#secondLog').text('Inventory Refreshed')
  // you have created an item or signed in and are getting a response array from the server
  // goal is to visualize the array as objects that can be manipulated by class
  // I think I can create a loop that adds divs within the container for each item in the array

  // first clear the container of the old objects
  $('.container').empty()

  const responseArray = response.items
  const responseArrayLength = responseArray.length

  // create objects for each item in the response array
  for (let i = 0; i < responseArrayLength; i++) {
    // define the clone unique id
    const currentClone = response.items[i].id

    // clone the single item div so the formatting is consistand and update/delete buttons are already there
    // the clone div is given a unique id so it's html values can be replaced
    // this method clones the update and delete buttons so each item can have their own
    // .clone(true, true) passes on event listeners to the clone (deep clone)
    // change display to show
    cloneContainer.clone(true, true).prop('id', currentClone).appendTo(mainContainer).show()

    // select the newly cloned div so it can be populated
    const currentItem = document.getElementById(currentClone)

    // loop through each object in the array and create P elements for select fields
    Object.keys(responseArray[i]).forEach(key => {
      const newP = document.createElement('p')
      if (key === 'owner' || key === 'price' || key === 'quantity' || key === 'cost' || key === 'department' || key === 'name') {
        newP.innerHTML = key + ': <br>' + responseArray[i][key]
        newP.id = key + currentClone
        newP.class = 'container-fluid'
        currentItem.appendChild(newP)
        // newP.class = responseArray[i][key]
      }
    }
    )
  }
}

const loadInventoryFailure = function () {
  $('#masterLog').text('Inventory Refresh Failed')
}

const updateItemSuccess = function (response) {
  $('#masterLog').text('Update Success')
}

const updateItemFailure = function () {
  $('#masterLog').text('Update Failed, Are You the Owner?')
}

const deleteItemSuccess = function () {
  $('#masterLog').text('Item Deleted')
}

const deleteItemFailure = function () {
  $('#masterLog').text('Deletion Failed, Are You the Item Owner')
}

module.exports = {
  newItemSuccess,
  newItemFailure,
  updateItemSuccess,
  updateItemFailure,
  deleteItemSuccess,
  deleteItemFailure,
  loadInventorySuccess,
  loadInventoryFailure
}
