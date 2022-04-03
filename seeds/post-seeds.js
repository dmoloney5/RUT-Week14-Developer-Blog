const { Post } = require('../models');

const postData = [
  {
    title: "MVC",
    content:
      "a completely full-stack application by modularizing your code to follow the Model-View-Controller (MVC) paradigm.",
    user_id: 1,
  },
  {
    title: "ORM",
    content:
      "object-relational mapping (ORM), a technique that allows developers to convert data between incompatible type systems using object-oriented programming principles.",
    user_id: 2,
  },
  {
    title: "MYSQL with Express",
    content: "Using MySQL with Express is Cool.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;