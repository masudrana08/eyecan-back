const express = require('express');
const createBlog = require('../controllers/blogs/createblog.js');
const deleteBlog = require('../controllers/blogs/deleteblog.js');
const getBlogById = require('../controllers/blogs/getblogbyid.js');
const getBlogs = require('../controllers/blogs/getblogs.js');
const updateBlog = require('../controllers/blogs/updateblog.js');
const Upload = require('../middleware/upload.js');
const BlogRoutes = express.Router()

BlogRoutes.get('/all', getBlogs);
BlogRoutes.get('/:id', getBlogById);
BlogRoutes.post('/', Upload.single("thumbnail"), createBlog);
BlogRoutes.put('/:id', Upload.single("thumbnail"), updateBlog);
BlogRoutes.delete('/:id', deleteBlog);

module.exports = BlogRoutes