const { User, Blog, Comment } = require('/index');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: ''
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog, Comment };
