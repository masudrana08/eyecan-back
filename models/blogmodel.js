const mongoose = require('mongoose')
const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    thumbnail: String,
    link: String,
  },  {timestamps: true });

const BlogModel = mongoose.model("/blog", BlogSchema);
module.exports = BlogModel