const BlogModel = require("../../models/blogmodel.js")

const deleteBlog = (req, res) => {
    BlogModel.findByIdAndDelete(req.params.id)
    .then(result=>{
        res.send("Deleted: "+result.title)
    })
}
module.exports = deleteBlog
