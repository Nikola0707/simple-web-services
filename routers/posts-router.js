const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

router  
    .get("/", postsController.getAll)
    .post("/", postsController.create)
    .get("/:id", postsController.getById)
    .patch("/:id", postsController.update)
    .delete("/:id", postsController.deleteById)

module.exports = router;