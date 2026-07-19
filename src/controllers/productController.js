const Product = require("../models/Product");
const Response = require("../utils/response");
const { randomUUID } = require("crypto");

class ProductController {

    static async create(req, res) {

        try {

            const {

                name,

                category,

                description,

                price,

                discount,

                stock,

                image

            } = req.body;

            const product = await Product.create({

                productId: randomUUID(),

                name,

                category,

                description,

                price,

                discount,

                stock,

                image

            });

            return Response.success(

                res,

                "Produk berhasil ditambahkan",

                product,

                201

            );

        } catch (err) {

            return Response.error(

                res,

                err.message,

                500

            );

        }

    }

    static async getAll(req, res) {

        try {

            const products = await Product.find();

            return Response.success(

                res,

                "Daftar produk",

                products

            );

        } catch (err) {

            return Response.error(

                res,

                err.message,

                500

            );

        }

    }

}

module.exports = ProductController;
