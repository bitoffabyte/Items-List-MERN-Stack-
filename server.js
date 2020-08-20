const express = require('express');
const items = require('./routes/api/Items');
const db = require('./config/db')
const app = express();

const PORT = process.env.port || 5000;

app.use(express.json());

db();

app.use('/api/items', items);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
