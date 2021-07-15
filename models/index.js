const User = require('./user');
const Comment = require('./comment');
const Post = require('./post');

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id'
  });

  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  module.exports = { User, Comment, Post };
  