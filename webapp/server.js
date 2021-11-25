/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
