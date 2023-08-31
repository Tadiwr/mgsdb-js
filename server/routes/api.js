var express = require('express');
var router = express.Router();
const mysql = require('mysql2')

const db = mysql.createConnection({
  host : "localhost",
  user : "server",
  password : "expressjs",
  database : "students"
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.connect((err) => {
    if(err) {
      res.statusCode = 500;
      res.send("There was an error connecting to the database")
    } else {
      res.send("All good brother zvaita")
    }
  })
});

router.get("/students", (req, res, next) => {
  db.query('SELECT * FROM student_info', (err, data, meta) => {
    res.send(data)
  })
})

router.get("/students/:id", (req, res, next) => {
  db.query(`SELECT * FROM student_info WHERE student_id=${req.params.id}`, (err, data, meta) => {
    res.send(data)
  })
})

router.get("/students/form/:form_number", (req, res, next) => {

  const queryStr = `
    SELECT * FROM student_info
    WHERE form = '${req.params.form_number}'
  `;

  db.query(queryStr, (err, data, meta) => {
    res.send(data)
  })

})

router.get("/students/gender/:gender", (req, res, next) => {

  const gender = req.params.gender.toUpperCase()

  if(gender != 'F' && gender != 'M') {
    res.statusCode = 400;
    res.send("The gender of a person can only be 'M' (male) or 'F' (female)")
  } else {
    const queryStr = `
      SELECT * FROM student_info
      WHERE gender = '${req.params.gender}'
    `;

    db.query(queryStr, (err, data, meta) => {
      res.send(data)
    })

  }

  
})

router.get("/students/name/:name", (req, res, next) => {

  const name = req.params.name;

  const queryStr = `
    SELECT * FROM student_info
    WHERE firstname LIKE '${name}%' OR surname LIKE '${name}%'
  `;

  db.query(queryStr, (err, data, meta) => {
   res.send(data)
  })

})

module.exports = router;