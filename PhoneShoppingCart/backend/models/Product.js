const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  weight: { type: String, required: true },
  height: { type: String, required: true },
  battery: { type: String, required: true },
  capacity: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);