const Router = require('express');
const router = new Router();
const feedbackController = require('./feedback.controller');
router.get('/', feedbackController.getFeedbacks);

router.post(
  '/',
  feedbackController.validateAddFeedback,
  feedbackController.addFeedback
);

module.exports = router;
