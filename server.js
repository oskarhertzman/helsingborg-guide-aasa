const path = require('path');

const express = require('express');

const app = new express();

const PATH_TO_FILE = "/.well-known/apple-app-site-associtation"

const PATH_TO_LANDING = "/.public/index.html"


app.use(express.static(`./${PATH_TO_FILE}`));

app.get(PATH_TO_FILE, (req, res) => {
    res.sendFile(path.resolve(__dirname, `.${PATH_TO_FILE}`));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, `.${PATH_TO_LANDING}`));
});

app.listen(4000, () => {
    console.log('App listening on port 4000')
})
