var orm = require("../config/orm.js");

var burger = {
    all: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        });
    },
    add: (name, cb) => {
        orm.insertOne([name], (res) => {
            cb(res);
        });
    },
    update: (id, cb) => {
        orm.updateOne([id], (res) => {
            cb(res);
        });    
    },
    delete: (id, cb) => {
        orm.deleteOne([id], (res) => {
            cb(res);
        });
    }
};

module.exports = burger;