const express = require('express');
const app = express();
app.use(express.static('public'));
app.use('/brain', express.static('C:/Users/HP/.gemini/antigravity-ide/brain/0dffca1c-6e73-4362-977a-5ed0e88ed0e1'));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.listen(3000, () => console.log('Running at http://localhost:3000'));
