const express = require('express');
const request = require('request');

const servers = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003' ];
let cur = 0;

const handler = (req, res) => {
    // Add an error handler for the proxied request
    const _req = request({ url: servers[cur] + req.url }).on('error', error => {
        res.status(500).send(error.message);
    });
    // Pipe the vanilla node HTTP request (a readable stream) into `request`
    // to the next server URL. Then, since `res` implements the writable stream
    // interface, you can just `pipe()` into `res`.
    req.pipe(_req).pipe(res);
    cur = (cur + 1) % servers.length;
};

const server = express().get('*', handler).post('*', handler);
console.log(servers.length + " servers online")
server.listen(8080);