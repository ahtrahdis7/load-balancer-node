// const https = require('https')
const request = require('request');
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/test',
    method: 'GET'
}
const start = Date.now();
for(let i=0; i < 10000; i++){
    let t = Date.now();
    const req = request({url: 'http://localhost:8080'})
    req.on('error', error => {
        console.log(i)
        // console.error(error)
    })
    req.end()
    console.log(Date.now() - t)
}

console.log(Date.now() - start)