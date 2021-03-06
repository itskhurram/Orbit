const router = require('express').Router();
const { check } = require('express-validator');

const postController = require('../controllers/post-controller');
const authMiddleware = require('../middlewares/auth');

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  '/',
  [authMiddleware, check('text', 'Text is required.').not().isEmpty()],
  postController.createMyPost
);

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get('/', authMiddleware, postController.getPosts);

// @route   GET api/posts/:postId
// @desc    Get post by id
// @access  Public
router.get('/:postId', postController.getPostById);

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete('/:postId', postController.deletePostById);

// @route   PUT api/posts/like/:id
// @desc    Like post
// @access  Private
router.put('/like/:postId', authMiddleware, postController.likePost);

// @route   POST api/posts/comments/:postId
// @desc    Add comments to Post on basis of Post Id
// @access  Private

router.post(
  '/comment/:postId',
  [authMiddleware, check('text', 'Text is required.').not().isEmpty()],
  postController.commentPost
);

// @route   Delete api/posts/comments/: PostId/:commentId
// @desc    Delete comment by postId and Comment Id
// @access  Private

router.delete(
  '/comment/:postId/:commentId',
  authMiddleware,
  postController.deletComment
);

module.exports = router;
