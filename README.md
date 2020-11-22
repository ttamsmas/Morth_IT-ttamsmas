# Morth_IT-ttamsmas

---

#### Morth Inventory Tracking: MongoDB Server Connected to Inventory Tracking SPA

This SPA was created to reflect a functional inventory summary module within a traditional Point of Sale System.

---

## Table of Contents

 - Important Links
 - Planning Story
 - User Stories
 - Technologies Used
 - Unsolved Problems
 - Wireframes

---

## Important Links

[Deployed Client](https://ttamsmas.github.io/Morth_IT-ttamsmas/)

[Heroku git URL](https://git.heroku.com/morthinventorytracking.git)

[Client Repository](https://github.com/ttamsmas/Morth_IT-ttamsmas)

[Server Repository](https://github.com/ttamsmas/Morth_Inventory_Tracking)

---

## Planning Story

This application incorporates authentication and ownership of items, so the order in which it was architected was important. Item update and deletion control requires ownership so if the item was not created under your authentication credentials you will not be able to adjust it.

This application translates the server's response array of inventory items into repeating elements by cloning a hidden element representing a single item and visually a single row, assigning the item a unique identifier (object id), replicating the prototype's event listeners, and finally loop through the item's key value pairs and create elements that contain relevant fields.

Because the inventory data is updating with each update, create, or delete action - the primary data table refreshes after all three successfully complete.

#### Development Plan

 - Draft Wireframe for Authentication and Inventory Functions
 - Write HTML so elements may be queried to test as functionality is developed
 - Setup Authentication Fields
 - Connect application to Heroku hosted server
 - Create Authentication pathways through event listener, event handler, api communication, and user interface modules
 - Develop Create Item functionality and mirror the authentication pathway (event listener, event handler, api communication, and user interface modules) through inventory specific modules
 - Work on Index / Show All AJAX request for all inventory items
 - React to successful Index Request by posting response array into document to represent refreshed on hand inventory
 - Connect Index Functionality to trigger after successful sign in, item creation, update, and deletion
 - Translate inventory index response array into HTML Fields to create a rudimentary table of on hand inventory
 - Assign array items a unique identifier so Update and Deletion Events do not require user to type in the item id
 - Setup Update Pathway and then mirror the process to create Deletion
 - Smooth UI Logic e.g. clear input fields
 - Develop CSS
 - Final Troubleshooting

---

## User Stories

  1. I am a retail focused user, so I want to have a sale populate to a shopping cart
  2. I am an inventory focused user, so I want to be able to add or remove inventory, and for sales to pull from them
  3. I am a security focused user, so I want there to be access levels besides general authentication
  4. I am a compliance focused user, so I want to be able to check my inventory levels for audits

---

## Technologies Used

- HTML
- CSS
- Javascript, JQuery, AJAX Server Communication

---

## Unsolved Problems

Although this application can track inventory items and user authentication, the ownership of items requirement would create a problem trying to delete items created by users who are not present. This could be solved by developing administrative levels or by removing ownership requirements.

Users are unable to update inventory item fields outside of on hand quantity. The aim of this version was creating update fields that did not require users to input an item id to initiate the patch.

---

## Planning Wireframes & Entity Relationship Diagram

[Point of Sale Wireframe](https://imgur.com/a/nMBNJa6)
