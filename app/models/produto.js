/**
 * Arquivo: produto.js
 * Descrição: Arquivo responsavel onde trataremos o modelo da classe produto
 * Author: Jose Antonio
 * Data de Criação:17/05/2018
 * Obs.: http://mongoosejs.com/docs/schematypes.html
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * 
 * -> id: Int
 * -> nome: String
 * -> preco: Number
 * -> descricao: String
 * 
 */

 var ProdutoSchema = new Schema({ 
     nome: String,
     preco: Number,
     descricao: String
 });

 module.exports = mongoose.model('Produto', ProdutoSchema);

