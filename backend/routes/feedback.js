const router = require('express').Router();
let Feedback = require('../models/feedbacks.models');

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  const email = req.body.email;

  const newFeedback = new Feedback({
    name,
    message,
    email,
  });

  newFeedback.save()
  .then(() => res.json('Feedback added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;