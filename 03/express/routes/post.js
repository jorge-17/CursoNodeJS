const express = require('express');
const router = express.Router();

const mysql = require('../data-bases/db-mysql2');


//Se registra un nuevo post en la base de datos mysql
router.post('/', async (req, res, next) => {
    let [row, error] = await mysql.query("INSERT INTO post (Title, Text) VALUES(?,?)",
        [req.body.title, req.body.text]);
    console.log(row, error);
    let post = req.body;
    post.id = row.insertId;

    res.json(post);
});

//Se consulta la tabla `post` de la base de datos mysql
router.get('/', (req, res, next) => {
    mysql.pool.query(
        'SELECT * FROM `post`',
        function (results, fields) {
            res.json(fields);
        }
    );
});

//Se consulta un registro especifico de la base de datos
router.get('/:id', (req, res, next) => {
    mysql.pool.query(
        'SELECT * FROM `post` WHERE id=?',
        [req.params.id],
        function (results, fields) {
            res.json(fields);
        }
    )
});

//Se actualiza un registro especifico de la base de datos
router.patch('/:id', async (req, res, next) => {
    let [row, error] = await mysql.query(
        'UPDATE `post` SET Title=?, Text=? WHERE id=?',
        [req.body.title, req.body.text, req.params.id]);
    console.log(row, error);
    let post = req.body;
    post.id = row.insertId;

    res.json(post);
});

//Se elimina un registro especifico de la base de datos
router.delete('/:id', (req,res,next)=>{
    mysql.pool.query(
        'DELETE FROM `post` WHERE id=?',
        [req.params.id],
        function (){
            res.json({alert:'Registro eliminado'});
        }
    );
});

router.use('/', (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ message: error.message, code: error.status });
});

module.exports = router;