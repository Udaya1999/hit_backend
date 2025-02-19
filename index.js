const jsonServer = require("json-server"); 
const cors = require("cors"); // Import CORS

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; 

// Enable CORS for all requests
server.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));

// Middleware for handling JSON body requests
server.use(jsonServer.bodyParser);

// Use default middlewares
server.use(middlewares);

// Add router
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
