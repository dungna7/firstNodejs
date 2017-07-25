'use strict';

const express = require('express');
const app = express();
const person = require('./getAge')
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())
const server = app.listen('3000', function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server start at http://%s:%s', '0.0.0.0', 3000);
});
app.post('/calculate-age', function (req, res) {
    let birthday = req.body.birthday
    if (birthday == 'fail') {
        res.send({success: false, message: 'format birthday yyyy/m/d'})
    } else {
        if (birthday.length == 0) {
            res.send({success: false, message: 'birthday is empty'})
        } else {
            let data = person.getAge(birthday)
            res.send({success: true, age: JSON.stringify(data)})
        }
    }
})
process.argv.slice(2).map(function (y, i) {
    let birthDay = y.split('=')
    if (birthDay[0] === '--birthday') {
        let age = person.getAge(
            [1])
        if (age == 'fail') {
            console.log('format birthday yyyy/m/d')
        } else {
            console.log({age: JSON.stringify(age)})
        }
    } else {
        console.log('key is birthday')
    }
})