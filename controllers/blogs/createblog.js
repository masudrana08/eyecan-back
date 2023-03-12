const BlogModel = require("../../models/blogmodel.js")

const createBlog = (req, res) => {
    const {title, description, link} = req.body
    const MyBlog = new BlogModel({
        title, 
        description,
        thumbnail: req.file.filename,
        link
    })
    MyBlog.save()
    .then(result=>{
        res.send(result)
    })
}
module.exports = createBlog