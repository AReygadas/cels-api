const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Employees
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

router.post('/addUss', (req, res) => {
    const {id, nombre, correo, telefono, password} = req.body;
    console.log(id, nombre, correo, telefono, password);
    const query = `
      SET @id = ?;
      SET @nombre = ?;
      SET @correo = ?;
      SET @telefono = ?;
      SET @password = ?;
      CALL user(@id, @nombre, @correo,@telefono,@password);
    `;
    mysqlConnection.query(query, [id, nombre, correo, telefono, password], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'User Saved', nombre:nombre});
      } else {
        console.log(err);
      }
  });  
});


module.exports = router;
