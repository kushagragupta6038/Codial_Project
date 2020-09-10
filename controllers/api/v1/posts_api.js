const Post = require('../../../models/post');

module.exports.index = async function(req, res){
  
  
  
  
    let posts = await Post.find({})
    .sort('-createdAt') //sort decending (means last post created shown first) to creation time
    .populate('user')
    .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });
  
    return res.json(200, {
        message: "List of posts",
        posts: posts
    })
}