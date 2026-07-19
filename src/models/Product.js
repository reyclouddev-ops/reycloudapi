const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    productId: {

        type: String,

        unique: true

    },

    name: {

        type: String,

        required: true

    },

    category: {

        type: String,

        required: true

    },

    description: {

        type: String,

        default: ""

    },

    price: {

        type: Number,

        required: true

    },

    discount: {

        type: Number,

        default: 0

    },

    stock: {

        type: Number,

        default: 999999

    },

    image: {

        type: String,

        default: ""

    },

    status: {

        type: Boolean,

        default: true

    }

}, {

    timestamps: true

});

module.exports = mongoose.model("Product", ProductSchema);
