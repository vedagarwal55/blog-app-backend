const Like = require("../models/likeModel");
const Post = require("../models/postModel")
exports.likepost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like({
            post, user
        })
        const saveLike = await like.save()
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: saveLike._id } }, { new: true })
            .populate("likes").exec()
        res.json({
            post: updatedPost
        })
    }
    catch (error) {
        return res.status(500).json({
            error: "Error while creating post"
        })
    }
}
exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });
        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: deletedLike._id } }, { new: true })
        res.json({
            post:updatedPost
        })
    }
    catch (error) {
        return res.status(500).json({
            error: "Error while creating post"
        })
    }
}
exports.dummyLink = (req, res) => {
    res.send("data fetched successfully");
}