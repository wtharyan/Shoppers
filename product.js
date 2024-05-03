const mongoose = require('mongoose');
const productSchema= mongoose.Schema({
    user: {
        type: String, // You may want to change this data type depending on your user model
        required: true,
      },
      product: {
        type: String,
        enum: ['Tshirt', 'Shirt', 'Pants', 'Lower'], // Enum to limit product options
        required: true,
      },
      quantity: {
        type: Number,
        min: 1,
        required: true,
      },
});
    

module.exports= mongoose.model("product",productSchema);