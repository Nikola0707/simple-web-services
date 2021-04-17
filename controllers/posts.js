const Post = require('../models/post');
const successResponse = require('../services/success-response-sender');
const errorResponse = require('../services/error-response-sender');

module.exports = {
  getAll: async (req, res) => {
    try {
      const posts = await Post.find().populate('Category', 'name');
      successResponse(res, 'This is a list of all posts!', posts);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  create: async (req, res) => {
    try {
      const post = await Post.create(req.body);
      successResponse(res, 'New post is created!', post)
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  getById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.send(post);
    } catch (error) {
      res.send({ message: error });
    }
  },
  update: async (req, res) => {
    try {
      const post = await Post.updateOne(
        { _id: req.params.id },
        {
          $set: {
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
          },
        }
      );
      res.send(post);
    } catch (error) {
      res.send({ message: error });
    }
  },
  deleteById: async (req, res) => {
    try {
      const post = await Post.remove({ _id: req.params.id });
      res.send(post);
    } catch (error) {
      res.send({ message: error });
    }
  },
};
