const BlogModel = require("../../models/blogmodel.js")

const getBlogs = (req, res) => {
    BlogModel.find()
    .then(result=>{
        res.send(result)
    })
}
module.exports = getBlogs