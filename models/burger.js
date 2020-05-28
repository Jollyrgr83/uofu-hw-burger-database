var orm = require("../config/orm.js");

const TABLE = "burgers";

var burger = {
    all: (cb) => {
        orm.selectAll(TABLE, (res) => {
            cb(res);
        });
    },
    add: (name, cb) => {
        orm.insertOne(TABLE, [name], (res) => {
            cb(res);
        });
    },
    update: (name, status, id, cb) => {
        var inputs = [name, status, id];
        orm.updateOne(TABLE, inputs, (res) => {
            cb(res);
        });    
    }
};

module.exports = burger;