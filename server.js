/**
 * Arquivo: server.js
 * Descrição:
 * Author: Jose Antonio
 * Data de Criação:17/05/2018
 */

 // Configurar o Setup da App

 //Chamadas o pacote
 var express = require('express'); 
 var app = express();
 var bodyParser = require('body-parser');

 var mongoose = require('mongoose');

 mongoose().connect('mongodb://<node-shark>:<sh123>@ds123500.mlab.com:23500/node-crud-api')

 //Configuração da variavel app usar o 'bodyParser()'
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 //Definindo uma porta onde será executada a API
 var port = process.env.port || 8888;

 //Criando uma instancia das Rotas via Express:
 var router = express.Router();

 //Rota de exemplo
 router.get('/', function(req, res) {
     res.json({ message: 'Sucesso! Bem vindo SK Automotive'})
 });

 //Definindo um padrao das rotas prefixidas: '/api':
 app.use('/api', router);

 //Iniciando  a Aplicação(Servidor):
 app.listen(port);
 console.log("Iniciando a app na porta: " + port);
