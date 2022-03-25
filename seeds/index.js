const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

    await sequelize.sync({ force: true });

    await seedUsers();

    await seedPosts();

    await seedComments();

    process.exit(0);
}

// Create database in mysql with "source db/schema.sql"
// seeds build_a_blog_db database with "node seeds" call.

seedAll();