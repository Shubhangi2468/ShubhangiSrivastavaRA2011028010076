const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "operation_code": 1
    });
});

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        const numbers = data.filter(item => typeof item === 'string' && /^[0-9]+$/.test(item));
        const alphabets = data.filter(item => typeof item === 'string' && /^[A-Za-z]$/.test(item));
        const highestAlphabet = alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0] || [];

        res.status(200).json({
            "is_success": true,
            "user_id": "Shubhangi_Srivastava_02032002",
            "email": "ss2383@srmist.edu.in",
            "roll_number": "RA2011028010076",
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_alphabet": highestAlphabet ? [highestAlphabet] : []
        });
    } catch (error) {
        res.status(400).json({
            "is_success": false,
            "error": error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
