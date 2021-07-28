const router = require('express').Router();
const { Post } = require("../../models/");
const withAuth = require("../../utils/auth");
const { route } = require('./userRoutes');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
           title: req.body.blogtitle,
           body:  req.body.blogtext,
           user_id: req.session.user_id
        })
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const editPost = await Post.update({
            title: req.body.title,
            body: req.body.body,
        },
        {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(editPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(deletePost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;