const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);

/*routes.get('/', (req, res) =>{

    return res.send("Pagina Inicial node-api");
});*/

module.exports = routes;