var connection = require("../config/connection.js");

var orm = {
    selectAll: () => {
        var queryString = "SELECT * FROM burgers_db;";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (name, status) => {
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);`;
        connection.query(queryString, [name, status], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (name, status, id) => {
        var queryString = `UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?;`;
        connection.query(queryString, [name, status, id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;