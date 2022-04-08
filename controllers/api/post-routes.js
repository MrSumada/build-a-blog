const router = require('express').Router();
const { User, Comment, Post } = require('../../models');
const withAuth = require('../../utils/withAuth');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'blog_text', 'created_at'],
        include: [
        {
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['comment_text', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
                }
        }]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get post by id
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'blog_text', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['comment_text', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                    }
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create new post if logged in
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Post.create({
            title: req.body.title,
            blog_text: req.body.blog_text,
            user_id: req.session.user_id
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
});

// update post if logged in
router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            title: req.body.title,
            blog_text: req.body.blog_text
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete post if logged in
router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;