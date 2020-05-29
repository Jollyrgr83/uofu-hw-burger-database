var connection = require("../config/connection.js");

var orm = {
    selectAll: (cb) => {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (inputs, cb) => {
        var queryString = `INSERT INTO burgers (burger_name) VALUES (?);`;
        connection.query(queryString, inputs, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (inputs, cb) => {
        var queryString = `UPDATE burgers SET devoured = true WHERE id = ?;`;
        connection.query(queryString, inputs, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: (inputs, cb) => {
        var queryString = `DELETE FROM burgers WHERE id = ?`;
        connection.query(queryString, inputs, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;