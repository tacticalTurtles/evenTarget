var bookshelf = require('../config/bookshelf.js');

module.exports = bookshelf.Model.extend({
  tableName: 'users'
});