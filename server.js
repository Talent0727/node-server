const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');
const { urlencoded } = require("express");
const mongoose = require('mongoose');
const tb_model = require('./model/Table');
const res = require("express/lib/response");


const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/pro_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('mongodb connected successfully')
})
.catch(err => {
    console.log('error', err)
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(urlencoded({extended: true}));

/**
 * @func Create
 */
app.post('/create', (req, res) => {
    const info = new tb_model(req.body);
    info.save((err) => {
        if(err) return res.status(500).send(err);
        res.status(200).send('created');
    });
});

/**
 * @func GetAll
 */
app.post('/getall', (req, res) => {
    tb_model.find({}, (err, data => {
        if(err) return res.status(500).send(err);
        res.json(data);
    }));
});

/**
 * @func DeleteByID
 */
app.post('/delete/:id', (req, res) => {
    // req.query("id")  req.param("id")
    tb_model.deleteOneById(req.param['id'], (err) => {
        if(err) return res.status(500).send(err);
        res.send('deleted');
    });
});

const hostname = "127.0.0.1";
const port = 7001;

app.listen(port, hostname, () => {
    console.log(`Server is runnig at http://${hostname}:${port}/`);
});