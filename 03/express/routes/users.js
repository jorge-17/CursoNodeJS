const express = require('express');
const router = express.Router();

const Users = require('../data-bases/users');

//Se registra un usuario en la base de datos Mongo
router.post('/', async (req, res, next) => {
  let user = new Users(req.body);
  let result = await user.save();
  req.app.get('io').emit('UsersGET', result);

  res.json(result);
});


//Se realiza una consulta de todos los usuarios a la base de datos de Mongo
router.get('/', function (req, res, next) {  
  Users.find((error, users) => {
    res.json(users);    
    req.app.get('io').emit('UsersGET', users);
  })
});

//Se realiza la consulta de un usuario especifico a la base de datos de Mongo
router.get('/:id', function (req, res, next) {
  Users.findById(req.params.id, function (err, user) {
    res.json(user);
  });
});

//Se elimina un usuario especifico de la base de datos
router.delete('/',(req,res,next)=>{
  Users.deleteOne(req.params.id, function (err, user){
    res.json(user);
  });
});

//Se actualiza un usuario especifico de la base de datos
router.patch('/:id', async (req, res, next) => {
  let user = await Users.findById(req.params.id);

  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    return nest(err);
  }

  user = Object.assign(user, req.body);
  try{
    let result = await user.save();
    res.json(result);
  }catch(e){
    next(new Error('Mongo Error'));
  }
});

router.use('/', (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: 'Usuario no encontrado', code: err.status });
});


router.use('/', function (req, res, next) {
  req.user = usuario.findIndex(u => u.id === Number(req.params.id));
})

module.exports = router;
