const express = require('express');
const model = require('../model/Table');
const app = express();

app.post("/api/create", (req, res) => {
    const table = new model(req.body);

    table.save(err => {
        if(err) return res.status(500).send(err);
        
        return res.send(table);
    });
});

app.post("api/get_all", (req, res) => {
    model.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
            return ;
        } else {
            res.json(data);
        }
        
    });
});

app.post("api/delete", (req, res) => {
    model.deleteById(req.body.id, (err) => {
        if(err) {
            res.status(400).send(err);
            return ;
        } else {
            res.send("ok");
        }
    })
})