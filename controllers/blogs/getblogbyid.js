const BlogModel = require("../../models/blogmodel.js")

const getBlogById = (req, res) => {
    const reqId = req.params.id
    BlogModel.findById(reqId)
    .then(result=>{
        res.send(result)
    })
}
module.exports = getBlogById