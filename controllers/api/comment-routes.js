const router = require('express').Router();
const { User, Comment, Post } = require('../../models');
const withAuth = require('../../utils/withAuth');

// get all comments
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['id', 'comment_text', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Post,
                attributes: ['title', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                    }
            }
        ]
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get on comment by id
router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'comment_text', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Post,
                attributes: ['title', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                    }
            }
        ]
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.status(500).json(err);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create comment if logged in
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// update comment if logged in
router.put('/:id', withAuth, (req, res) => {
    Comment.update(
        {
            comment_text: req.body.comment_text
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id'})
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete comment if logged in
router.delete(':/id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id'})
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;