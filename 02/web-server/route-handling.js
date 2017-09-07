const http = require('http');
const url = require('url');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const routes = {
	'/hello': (req, res) => {
		res.end(JSON.stringify(
			{
				message: 'Hello World!',
				method: req.method
			}
		));
	},
	'/api': (req, res) => {
		res.end(JSON.stringify(
			{
				message: 'API Handler',
				method: req.method, // Verbo del Request
				query: req.X_requestUrl.query // Mostrar los parámetros enviados en la respuesta
			}
		));
	},
	notFound: (req, res) => {
		res.end(JSON.stringify(
			{
				message: 'Not Found',
				path: req.X_requestUrl.path // Ruta completa
			}
		));
	}
};


function handleRequest(req, res) {

	res.setHeader('Content-Type', 'application/json'); // Responder en formato JSON

	let requestUrl = url.parse(req.url, true); // Parametrizar URL

	console.log(requestUrl);

	// Es posible asignar propiedades al objeto Request para utilizarlas posteriormente en los handlers.
	// Esto es útil cuando el valor será utilizado más de una vez.
	// Es considerado buena practica agregar un prefijo para evitar sobre-escribir propiedades
	// utilizadas por Node.js (o por el framework utilizado).
	req.X_requestUrl = requestUrl;

	// url.path vs url.pathname: https://nodejs.org/api/url.html#url_urlobject_path

	if (routes[requestUrl.pathname]) {
		// Si la ruta existe, responder con código 200
		res.statusCode = 200;
		routes[requestUrl.pathname](req, res);
	} else {
		// No existe una ruta definida, responder con código 404 -- Not Found
		res.statusCode = 404;
		routes.notFound(req, res);
	}
}

const server = http.createServer(handleRequest);

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

