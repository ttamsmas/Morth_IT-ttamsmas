'use strict'
// add a new .then in the post request for ievents


const store = require('../store')
const iapi = require('./iapi')
// const inventoryRefresh = require('./inventory-refresh')

const newItemSuccess = function (response) {
  $('#masterLog').text('New Item Succesfully Created')
// clear input fields after success
  $('#new-item-name').val('')
  $('#new-item-department').val('')
  $('#new-item-quantity').val('')
  $('#new-item-cost').val('')
}

const newItemFailure = function (error) {
  $('#masterLog').text('New Item Failure, Try Again')
}

const loadInventorySuccess = function (response) {
  $('#masterLog').text('Inventory Refreshed')

// you have created an item or signed in and are getting a response array from the server
// goal is to visualize the array as objects that can be manipulated by class
// I think I can create a loop that adds divs within the container for each item in the array
// How to include update and delete TBD
  // const tempItem = function (response) {
  //   for (let i = 0; i < response.length)
  // }
  // console.log(response.items)
  // console.log(response.items.length)
  const responseArray = response.items
  console.log(responseArray[0].name)
  const responseArrayLength = response.items.length
// create objects for each item in the response array
for (let i = 0; i < response.items.length; i++) {
      // define the clone unique id
      const currentClone = 'clone' + i
      // console.log(currentClone)
      // clone the single item div so the formatting is consistand and update/delete buttons are already there
      const mainContainer = $('.container')
      // console.log(mainContainer)
      // clone the example div and append it to the end of the container
      // the example div is given a unique id so it's values can be replaced
      // this method clones the update and delete buttons so each item can have their own
      $('.singleItem').clone().prop('id', currentClone).appendTo(mainContainer)
      // select the newly cloned div so it can be populated
      const currentItem = document.getElementById(currentClone)
      console.log(currentItem)
      console.log(currentItem.querySelector('.singleItemName'))
      console.log(currentItem.querySelector('p:nth-child(0)'))
      // currentItem.querySelector('currentItem:nth-child(i)').innerHTML ='this'
      // $(`a:nth-child(${i})`)
      // // currentItem.querySelector('.singleItemName').val('this')
      // console.log(currentItem.singleItemName)
      // console.log(currentItem.first)
      // console.log(currentItem.getElementById('currentClone'))
      // currentItem.singleItemName.innerHTML(responseArray[i].name)
      // console.log($('.container:nth-last-child'))
      // const thisItem = mainContainer.lastChildElement
      // console.log(thisItem)
      // $('p:nth-last-child(1)').html(singleObject[0])
      // $('p:nth-last-child(2)').html(singleObject[1])
      // $('p:nth-last-child(3)').html(singleObject[2])
      // $('p:nth-last-child(4)').html(singleObject[3])
      // $('p:nth-last-child(5)').html(singleObject[4])
      // $('p:nth-last-child(6)').html(singleObject[5])
      // $('.singleItem:nth-last-child(1)').show()
   }
 }

const loadInventoryFailure = function () {
  $('#masterLog').text('Inventory Refresh Failed')
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
  deleteItemFailure,
  loadInventorySuccess,
  loadInventoryFailure
}
