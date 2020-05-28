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
    update: (id, cb) => {
        orm.updateOne(TABLE, id, (res) => {
            cb(res);
        });    
    }
};

module.exports = burger;