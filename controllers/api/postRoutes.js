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

//router.put()