const sequelize = require('../config/connection');
const { Post } = require('../models');

const posts = [
    {
        title: 'This is the weirdest bug I ever had!',
        blog_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam excepturi a ab veritatis molestiae deleniti. Sequi enim vel reiciendis hic esse aut doloribus nisi similique, est amet modi saepe.',
        user_id: 1,
    },
    {
        title: "I think I'm onto something",
        blog_text: 'In ipsam excepturi a ab veritatis molestiae deleniti. Sequi enim vel reiciendis hic esse aut doloribus nisi similique, est amet modi saepe.',
        user_id: 1,
    },
    {
        title: 'Why Javascript is better than Jquery',
        blog_text: 'Amet consectetur adipisicing elit. In ipsam excepturi a ab veritatis molestiae deleniti. Sequi enim vel reiciendis hic esse aut doloribus nisi similique, est amet modi saepe.',
        user_id: 5,
    },
    {
        title: 'I built a mac INSIDE my PC',
        blog_text: 'dolor sit amet consectetur adipisicing elit. In ipsam excepturi a ab veritatis molestiae deleniti. Sequi enim vel reiciendis hic esse aut doloribus nisi similique, est amet modi saepe.',
        user_id: 3,
    },
    {
        title: 'HTML: How To Make Latkas',
        blog_text: 'Veritatis molestiae deleniti. Sequi enim vel reiciendis hic esse aut doloribus nisi similique, est amet modi saepe.',
        user_id: 4,
    }
]




const seedPosts = () => Post.bulkCreate(posts);

module.exports = seedPosts;
