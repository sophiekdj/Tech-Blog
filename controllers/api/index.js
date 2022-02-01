const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;


// overarching things
// create new post, delete your post, UPDATE your post
// create new comment, the post is then updated to display the comment
// cannot delete or update comments