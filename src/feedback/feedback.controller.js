const { pool } = require('../../config');
const Joi = require('joi');

class FeedbackController {
  getFeedbacks(req, res) {
    pool.query('SELECT * FROM feedback', (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  }
  addFeedback(req, res) {
    const { name, email, message } = req.body;
    pool.query(
      'INSERT INTO feedback (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message],
      (error) => {
        if (error) {
          throw error;
        }
        res.status(201).json({ status: 'success', message: 'Feedback added' });
      }
    );
  }
  validateAddFeedback(req, res, next) {
    const createRules = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      message: Joi.string().required(),
    });

    const validationResult = createRules.validate(req.body);
    if (validationResult.error) {
      return res.status(400).send(validationResult.error);
    }
    next();
  }
}

module.exports = new FeedbackController();
