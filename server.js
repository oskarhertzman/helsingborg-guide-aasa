const jsonServer = require('json-server');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

const path = require('path');

const app = express();


app.use(express.static( __dirname+'./well-known', {dotfiles:'allow'} ));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname,'./well-known/apple-app-site-associtation'));
});

server.listen(port);
