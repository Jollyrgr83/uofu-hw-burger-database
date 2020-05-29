var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObject = {
            burgers: data
        };
    console.log("hbsObject", hbsObject);
    res.render("index", hbsObject);
    });
});

router.post("/api/", (req, res) => {
    burger.add(req.body.name, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/", function(req, res) {
    console.log("Received PUT req.body", req.body);
    burger.update(req.body.id, function(result) {
        console.log("PUT result", result);
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;