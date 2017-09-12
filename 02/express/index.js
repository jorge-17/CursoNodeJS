
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

// El módulo body-parser nos ayuda a extraer el cuerpo de una petición
// con formato JSON o URL Enconded
// Ambos funcionan como Middleware de Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//  Aplica para todos los verbos de REST
//   v
app.use('/api', (req, res, next) => {
  // /api/*
  // /api/users
  // /api/books ...

  // Especialmente útil para autenticar las peticiones
  req.isAuthenticated = req.query.access_token === 'verySecureAuth';

  next();
});

//     Ruta  Petición  Respuesta  Siguiente Middleware
//       v      v         v       v
app.use('/', (request, response, next) => {

  console.log('\nPETICION:');
  console.log(`URL:      `, request.path); // URL de la petición
  console.log(`VERBO:    `, request.method); // Verbo REST utilizado
  console.log(`QUERY:    `, request.query); // 
  console.log(`CUERPO:   `, request.body); // Aplica para peticiones POST PUT PATCH
  console.log(`AUTH:     `, request.isAuthenticated);
  // console.log(`HEADERS:  `, request.headers);
  // console.log(request.header('cookie'));

  // Es posible asignar valores que podamos utilizar en el ciclo de vida
  // de nuestro `pipeline` de cada peticióm
  request.data = {
    logicaDeNegocio: 1,
    datoUtil: 'soy util :)'
  };

  // Mientras no haya algún error, next() debe ser llamado sin parámetros
  next();
});

app.use('/api', (request, response, next) => {
  response.json({
    saludo:'hola'
  });
});


// Verbo      Parámetro
//   v           v
app.get('/api/users/:id/:opcional?', (req, res, next) => {

  console.log(`PARAM:    `, req.params); // Parámetros de la ruta

  // Los valores definidos en middleware previos son conservados
  console.log(req.data);

  // Utilizamos el objeto de Respuesta para enviar datos al solicitante
  res.json({
    user: req.params.id,
    data: req.data
  });

  // Si no llamamos next(), el ciclo de vida de la petición termina
});

// El orden en que son definidos los middleware importa
app.get('/api/users', (req, res, next) => {
  // Este middleware no será ejecutado si el middleware anterior no utiliza next()
});


app.post('/api/users', (req, res, next) => {
  // Crear nuevo usuario
  next();
});
// Continuará vvvvvvv
app.post('/api/users', (req, res, next) => {
  if (!req.body.name) {
    const error = new Error('El nombre es necesario');
    error.status = 400; // Bad Request
    next(error)
    return;
  }

  res.json(req.body);
});


// app.use('/', index);
// app.use('/users', users);


/**
 * Middleware ´global´ que será invocado cuando la ruta no haya coincidido con ninguna
 * de las definidas anteriormente.
 * @param req Objeto de Request (Petición)
 * @param res Objeto de Response (Respuesta)
 * @param next Callback para llamar el siguiente Middleware (en caso de haberlo)
 */
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Este fragmento será ejecutado cuando algún middleware anterior invoque ´next(error);´
 * Middleware de error necesita los 4 parámetros
 * @param error Instancia de un Error ´new Error()´
 * @param req Objeto de Request (Petición)
 * @param res Objeto de Response (Respuesta)
 * @param next Callback para llamar el siguiente Middleware (en caso de haberlo)
 */
app.use((error, req, res, next) => {
  // Las instancias de Error no tienen la propiedad ´status´ por default.
  res.status(error.status || 500);
  res.json({ message: error.message, code: error.status });
});

// Iniciamos el servidor http utilizando como parámetro el objeto de Express ´app´
const server = http.createServer(app)
  .listen(PORT)
  .on('error', onError)
  .on('listening', onListening);

function onError(error) {
  console.log(`Ocurrió un error: ${error.code}`);
  process.exit(1);
}

function onListening() {
  const bind = server.address();
  console.log(`Servidor escuchando en ${bind.address}:${bind.port}`);
}