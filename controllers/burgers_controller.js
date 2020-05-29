var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObject = {
            burgers: data
        };
    res.render("index", hbsObject);
    });
});

router.post("/api/", (req, res) => {
    burger.add(req.body.name, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/", (req, res) => {
    burger.update(req.body.id, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

router.delete("/api/", (req, res) => {
    console.log("req.body", req.body);
    burger.delete(req.body.id, (result) => {
        console.log("result", result);
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;