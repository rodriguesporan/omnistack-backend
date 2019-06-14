const Post = require('../models/Post');

module.exports = {
  store: async (req, res) => {
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    await post.save();
    req.io.emit('like', post);
    res.json(post);
  },
};
