// models/index.js
const User = require('./user');
const Post = require('./post');

User.hasMany(Post, {
  foreignKey: 'userId',
  as: 'posts', 
  onDelete: 'CASCADE', 
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  as: 'author', 
});

module.exports = { User, Post, sequelize };