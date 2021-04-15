const Post = require("../models/post");

module.exports = {
  getAll: async (req, res) => {
    try {
      const posts = await Post.find();
      res.send(posts);
    } catch (error) {
      res.send({ message: error });
    }
  },
  create: async (req, res) => {
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
    });
    try {
      const savePost = await post.save();
      res.send(savePost);
    } catch (error) {
      res.send({ message: error });
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
  deleteById: async(req, res) => {
      try {
          const post  = await Post.remove({ _id: req.params.id });
          res.send(post)
      } catch (error) {
          res.send({message: error});
      }
  }
};
