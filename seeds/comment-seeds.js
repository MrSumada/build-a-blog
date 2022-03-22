const sequelize = require('../config/connection');
const { Comment } = require('../models');

const comments = [
    {
        comment_text: "Wow, great stuff!",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Frankly, I disagree.",
        user_id: 7,
        post_id: 1
    },
    {
        comment_text: "Have you tried lorem ipsum?",
        user_id: 5,
        post_id: 1
    },
    {
        comment_text: "Have you tried lorem ipsum?",
        user_id: 5,
        post_id: 2
    },
    {
        comment_text: "Have you tried lorem ipsum?",
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: "Well I don't know about that personally.",
        user_id: 6,
        post_id: 3
    },
    {
        comment_text: "I once saw something like this in a Starbucks.",
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: "You're so smart!! That's amazing.",
        user_id: 5,
        post_id: 5
    },
    {
        comment_text: "This is such a good community.",
        user_id: 1,
        post_id: 5
    },
    {
        comment_text: "I disagree!",
        user_id: 6,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;