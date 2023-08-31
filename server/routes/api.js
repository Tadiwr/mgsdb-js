var express = require('express');
var router = express.Router();
const mysql = require('mysql2')
const model = require('../lib/students/data/model/student_model.js')

const db = mysql.createConnection({
  host : "localhost",
  user : "server",
  password : "expressjs",
  database : "students"
})

/* GET users listing. */
router.get("/students", (req, res, next) => {
  db.query('SELECT * FROM student_info', (err, data, meta) => {
    if(err) {
      console.log(err);
      res.send("Internal Server Error 🤕")
    } else {
      res.send(data)
    }
  })
})

router.get("/students/:id", (req, res, next) => {
  const sqlStr = `SELECT * FROM student_info WHERE student_id=${req.params.id}`;

  db.query(sqlStr, (err, data, meta) => {
    if(err) {
      console.log(err);
      res.send("Internal Server Error 🤕")
    } else {
      res.send(data)
    }
  })
})

router.get("/students/form/:form_number", (req, res, next) => {

  const queryStr = `
    SELECT * FROM student_info
    WHERE form = '${req.params.form_number}'
  `;

  db.query(queryStr, (err, data, meta) => {
    if(err) {
      console.log(err);
      res.send("Internal Server Error 🤕")
    } else {
      res.send(data)
    }
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
      if(err) {
        console.log(err);
        res.send("Internal Server Error 🤕")
      } else {
        res.send(data)
      }
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

router.post("/students/add", (req, res, next) => {
  console.log(req.body);
  const dataModel = model.StudentModel.fromJson(req.body)

  db.query(dataModel.toSqlStatement(), (err, data, meta) => {
    if(err) {
      console.log(err);
      res.send("Internal Server Error 🤕")
    } else {
      res.send(data)
    }
  })
})

router.put("/students/update/", (req, res, next) => {
  console.log(req.body);
  const dataModel = model.StudentModel.fromJson(req.body)

  db.query(dataModel.getUpdateSql(), (err, data, meta) => {
    if(err) {
      console.log(err);
      res.send("Internal Server Error 🤕")
    } else {
      res.send(data)
    }
  })
})

router.delete('/students/delete/:id', (req, res, next) => {
  const student_id = req.params.id;

  const tableName = 'student_info';
  const sqlStr = `
    DELETE FROM ${tableName}
    WHERE student_id = ${student_id}
  `

  db.query(sqlStr, (err, data, meta) => {
    if(err) {
      console.log(err);
      res.send("Internal Server Error 🤕")
    }
    res.send(data)
  })
})

module.exports = router;