const express = require('express');
const router = express.Router();
const postsController = require('./controllers/posts')

router  
    .get("/post", postsController.getAll)
    .post("/post", postsController.create)
    .get("/post/:id", postsController.getById)
    .patch("/post/:id", postsController.update)
    .delete("/post/:id", postsController.deleteById)

module.exports = router;