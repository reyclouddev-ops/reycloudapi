const router = require("express").Router();

const ProductController = require("../controllers/productController");

const auth = require("../middleware/auth");

const admin = require("../middleware/admin");

router.get(

    "/products",

    ProductController.getAll

);

router.post(

    "/products",

    auth,

    admin,

    ProductController.create

);

module.exports = router;
