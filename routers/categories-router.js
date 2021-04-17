const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories');

router
    .get('/', categoriesController.getAll)
    .post('/', categoriesController.create)

    module.exports = router;