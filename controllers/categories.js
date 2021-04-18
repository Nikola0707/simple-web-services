const Post = require('../models/post');
const Category = require('../models/category');
const successResponse = require('../services/success-response-sender');
const errorResponse = require('../services/error-response-sender');

module.exports = {
    create: async(req, res) => {
        try {
            const category = await Category.create(req.body);
            successResponse(res, 'New category is created!', category)
        } catch (error) {
            errorResponse(res, 500, error.message)
        }
    },
    getAll: async(req, res) => {
        try {
            const categories = await Category.find();
            successResponse(res, 'This is a list of all categories!', categories)
        } catch (error) {
            errorResponse(res, 500, error.message)
        }
    },
    deleteById: async(req, res) => {
        try {
            const category = await Category.remove({_id: req.params.id});
            res.send(`Category with id: #${req.params.id} is deleted!`);
        } catch (error) {
            res.send({message: error});
        }
    }
}