const express = require('express')
const router = express.Router()

const {

  createItem, getAllItems, getOneItem, deleteItem, updateItem
 
} = require('./controllers/crud')

router.route('/items').post(createItem).get(getAllItems)

   
router.route('/items/:id').get(getOneItem).delete(deleteItem).patch(updateItem)

// .patch(updateItem).delete(deleteItem)

module.exports = router

