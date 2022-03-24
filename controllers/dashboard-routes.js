const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/withAuth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
        attributes: ['id', 'title', 'blog_text', 'created_at', 'user_id'],
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
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true })).reverse();
        const user = dbPostData.get({ plain: true });
        res.render('dashboard', { 
            posts,
            user,
            loggedIn: true 
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
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
        }]
    })
    .then(dbPostData => {
        const post = dbPostData.get({ plain: true });

        res.render('edit-post', { 
            post,
            loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;