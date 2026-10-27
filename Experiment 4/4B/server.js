const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(
        '<h1>Welcome to AWS Elastic Beanstalk!</h1>' +
        '<p>My first cloud application is running successfully.</p>'
    );
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running on port ' + PORT);
});