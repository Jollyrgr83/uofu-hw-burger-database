var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all(data => res.render("index", {burgers: data}));
});

router.post("/api/", (req, res) => {
    burger.add(req.body.name, result => res.json({id: result.insertId}));
});

router.put("/api/", (req, res) => {
    burger.update(req.body.id, result => result.changedRows === 0 ? res.status(404).end() : res.status(200).end());
});

router.delete("/api/", (req, res) => {
    burger.delete(req.body.id, result => result.affectedRows === 0 ? res.status(404).end() : res.status(200).end());
});

module.exports = router;