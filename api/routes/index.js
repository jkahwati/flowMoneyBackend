const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
  // const db = require('../config/queries')

router.get('/health', (req,res) => { 

  userController.list().then((value) => {

    res.status(200).send(value);
  })
 
})

router.get('/newTransaction', (req,res) => { 

  userController.newTransaction().then((value) => {

    res.status(200).send(value);
  })
 
})

module.exports = router;