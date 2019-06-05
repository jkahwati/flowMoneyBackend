const transactionRs = require('../models/transactionRs')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'jeka',
  host: 'localhost',
  database: 'flowdb',
  password: '12345',
  port: 5432,
})

module.exports.health = () => {

    console.log("health-check","ok");
    return new Promise(function (resolver,rechazar) {
        pool.query('SELECT 123 AS value', (error, results) => {
            if (error) {
                rechazar(error);
            } else {
                console.log(results.rows)
                resolver(results.rows);
            }
        })
    }) 
  }

  module.exports.createTransaction = (transaction) => {

    console.log("createTransaction","Inserting new transaction");
    return new Promise(function (resolver,rechazar) {
        const fecha = "'03/06/2019'";
        const query = 'INSERT INTO "TRANSACTIONS" (amount, positive, transaction_date, status, category_id,user_id) VALUES ('+transaction.amount+','+transaction.positive+','+fecha+','+transaction.status+','+transaction.categoryId+','+transaction.userId+')';
        console.log("Query ->" , query)
        pool.query(query, (error, results) => {
            if (error) {
                rechazar(error);
            } else {
                console.log(transactionRs);
                resolver(transactionRs);
            }
        })
    }) 
    
  }