var connection = require("../config/connection.js");

var orm = {
    selectAll: () => {
        var queryString = "SELECT * FROM burgers_db;";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (inputs) => {
        var queryString = `INSERT INTO burgers (burger_name) VALUES (?);`;
        connection.query(queryString, inputs, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (inputs) => {
        var queryString = `UPDATE burgers SET devoured = false WHERE id = ?;`;
        connection.query(queryString, inputs, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;