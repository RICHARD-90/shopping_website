var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Shop = new Schema({
  title : String,
  description : String,
});

var Category = new Schema({
  name : String,
  description : String,
  id_shop : String,
});

var Product = new Schema({
  name : String,
  description : String,
  price : Number,
  picture : Object,
  id_cat : String,
});

module.exports = mongoose.model('Shop', Shop);
module.exports = mongoose.model('Category', Category);
module.exports = mongoose.model('Product', Product);