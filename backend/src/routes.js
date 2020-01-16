const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController'); 


const routes = Router();

// Métodos HTTP: get(acessar informação), post(criar informação), put(editar recurso da aplicação), delete

// Tipos de parametros:

// Query params: request.query (Filtros, Ordenação, Paginação, ...) 
// Route Params: request.params (Identificar um recurso na alteracao ou remocao) DELETE
// Body: request.body (Dados para criação ou alteração de um registro) POST // PUT
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store); 

routes.get('/search', SearchController.index);
//sudo snap install insomnia
//insomnia serve para trocar as rotas de comunicação, pois o browser so aceita o metodo
//get, com o insomnia sera possivel alterar para post. É mais semantico para a api ser restfull


module.exports = routes;