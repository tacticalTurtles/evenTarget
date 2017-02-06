var knex = require('knex');
var bookshelf = require('bookshelf');
var knexConfig = require('../../knexfile.js');

module.exports = bookshelf(knex(knexConfig.development));