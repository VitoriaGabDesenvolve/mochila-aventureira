const db = require("../config/database")

const getAllItens = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM `db_mochila-avertura`.tb_item";

        db.query(sql, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data); 
            }
        });
    });
}

const getItem = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM `db_mochila-avertura`.tb_item WHERE ITEM_ID = ?"

        db.query(sql, [id], function(err, data) {
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = { getAllItens, getItem }