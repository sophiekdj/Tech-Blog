const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./user-seeds.json");
const postData = require("./post-seeds.json");
const commentData = require("./comment-seeds.json");

// HOW TO WRITE SEED.JS FILE***

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
