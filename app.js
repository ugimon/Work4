const express = require('express');
var path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const Views = '../views/'

app.get('/', (req, res) => {
    res.render(
        Views + 'index.ejs');
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use('/', require('./routes/router'));

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});