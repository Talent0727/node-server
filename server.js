const express = require("express");
const bodyParser = require('body-parser');
const { urlencoded } = require("express");
const mongoose = require('mongoose');
const table = require('./model/Table');
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
app.post('/create', async (req, res) => {

    const new_data = new table({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        title: req.body.titl,
        description: req.body.description
    });

    try {
        const result = await new_data.save();
        if (result) {
            res.send(JSON.stringify({
                "message": "success"
            }));
        }
    } catch(err) {
        res.status = '400';
        res.send(JSON.stringify({
            "error": err
        }));
    }
});

/**
 * @func GetAll
 */
app.post('/getall', async (req, res) => {
    const result  = await table.find(); 
    try {
        res.status(200).json(result);
    }catch(err){
        res.status = '400';
        res.send(JSON.stringify({
            "error": err
        }));
    }
});

/**
 * @func DeleteByID
 */
app.post('/delete/:id', async (req, res) => {
    // req.query("id")  req.param("id")
    const gain = await table.findById(req.params.id);
    try {
        const result = await table.deleteOne({_id: req.params.id});
        try {
            res.status(200).send(JSON.stringify({
                'message' : "success"
            }))
        } catch(err) {
            return res.status(400).send(JSON.stringify({
                "message" : err
            }));
        }
    } catch (err) {
        return res.status(400).send(JSON.stringify({
            "message": "no-exist"
        }))
    }
});

const hostname = "127.0.0.1";
const port = 7001;

app.listen(port, hostname, () => {
    console.log(`Server is runnig at http://${hostname}:${port}/`);
});
