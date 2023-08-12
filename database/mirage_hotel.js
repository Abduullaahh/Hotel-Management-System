const mysql = require('mysql');

const connection = mysql.createConnection
(
    {
        host : 'bavapqoonhvpof0pift6-mysql.services.clever-cloud.com',
        database : 'bavapqoonhvpof0pift6',
        user : 'uyp3xcjz5d8vzzm7',
        password : 'fvLiKuL9Wsk25F6Xd7dF',
        port : '3306',
    }
)

connection.connect((err) => {
    if(err) throw err;
    console.log('DataBase Connected');
})

module.exports = {connection};