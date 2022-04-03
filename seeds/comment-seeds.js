const { Comment } = require('../models');

const commentData = [{
        comment_text: "MVC means Model, View and Controller",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "ORM means Object-Relational Mapping",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Mysql is easy to use with Express",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;