const express = require('express');
const cors = require('cors');
const { pool } = require('./config');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

const getFeedback = (req, res) => {
  pool.query('SELECT * FROM feedback', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addFeedback = (req, res) => {
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
};

app
  .route('/feedback')
  // GET endpoint
  .get(getFeedback)
  // POST endpoint
  .post(addFeedback);

app.listen(PORT, () => {
  console.log(`Server listening`);
});
