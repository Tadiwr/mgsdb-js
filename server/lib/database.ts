import mysql from 'mysql'

// Connecting to a MQL database
export const studentsDB = mysql.createConnection({
    host : "localhost",
    user : "server",
    password : "expressjs",
    database : "students"
})


// Connecting to tables
// Insert to a table