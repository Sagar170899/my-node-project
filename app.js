// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/home', (req, res) => {
    res.send('Hello, Jenkins!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/home`);
});
