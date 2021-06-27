require('dotenv').config({ path: '../.env' })
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const postRoutes = require('./postRouter');

const app = express();

app.use(bodyParser.json({ limit: "300mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "300mb", extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('server running.....');
});

app.use('/api/v1/posts', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`linstening on port ${PORT}`)); 