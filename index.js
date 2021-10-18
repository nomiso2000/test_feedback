const express = require('express');
const cors = require('cors');
const feedbackRouter = require('./src/feedback/feedback.route');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/feedback', feedbackRouter);

app.listen(PORT, () => {
  console.log('Server is starter in port - ' + PORT);
});
