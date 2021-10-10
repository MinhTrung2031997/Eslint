const express = require('express');
const router = express.Router();
const tripController = require('../controllers/pub.controller');

router.get('/list_all_pub', tripController.getAllPub);


module.exports = router;