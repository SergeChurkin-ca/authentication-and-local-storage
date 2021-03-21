// express server to run local session and token

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'admin12345'
    })
})

app.listen(8080, () => console.log('api is running on http://localhost:8080/login'))