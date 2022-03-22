const sequelize = require('../config/connection');
const { User, Post } = require('../models');

// do wee need the Post model????

const users = [
    {
        username: 'adam1',
        email: 'adam1.com',
        password: 'password'
    },
    {
        username: 'morgan',
        email: 'morgan1.com',
        password: 'password'
    },
    {
        username: 'martha1',
        email: 'martha1.com',
        password: 'password'
    },
    {
        username: 'clark1',
        email: 'clark1.com',
        password: 'password'
    },
    {
        username: 'phoebe1',
        email: 'phoebe1.com',
        password: 'password'
    },
    {
        username: 'harry1',
        email: 'harry1.com',
        password: 'password'
    },
    {
        username: 'chimney1',
        email: 'chimney1.com',
        password: 'password'
    },
    {
        username: 'utah1',
        email: 'utah1.com',
        password: 'password'
    },
    {
        username: 'sally1',
        email: 'sally1.com',
        password: 'password'
    },
    {
        username: 'gubgub1',
        email: 'gubgub1.com',
        password: 'password'
    },
    {
        username: 'yum1',
        email: 'yum1.com',
        password: 'password'
    }
]

const seedUsers = () => User.bulkCreate( users, { individualHooks: true });

module.exports = seedUsers;