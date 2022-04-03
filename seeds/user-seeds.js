const { User } = require("../models");

const userData = [
  {
    username: "dennis",
    password: "password",
  },
  {
    username: "ryan",
    password: "password1",
  },
  {
    username: "robin",
    password: "password2",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
