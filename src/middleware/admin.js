const Response = require("../utils/response");

function admin(req, res, next) {

    if (

        req.user.role !== "admin" &&

        req.user.role !== "owner"

    ) {

        return Response.error(

            res,

            "Akses ditolak",

            403

        );

    }

    next();

}

module.exports = admin;
