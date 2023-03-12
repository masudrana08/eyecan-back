const BlogModel = require("../../models/blogmodel.js")

const updateBlog = (req, res) => {
    const {title, description, link} = req.body
    const reqId = req.params.id;
    console.log(reqId);
    BlogModel.findById(reqId)
    .then(MyBlog=>{
        if(title) MyBlog.title = title
        if(description) MyBlog.description = description
        if(req.file) MyBlog.thumbnail = req.file.filename
        if(link) MyBlog.link = link
        MyBlog.save()
        .then(result=>{
            res.send(result)
        })
    })
}
module.exports = updateBlog