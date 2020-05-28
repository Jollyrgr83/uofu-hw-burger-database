var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObject = {
        burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });
});

router.post("/", (req, res) => {
    burger.add(req.body.name, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/", (req, res) => {
    burger.update(req.body.name, "TRUE", req.body.id, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;