const JWT = require("../utils/jwt");
const User = require("../models/User");
const Response = require("../utils/response");

async function auth(req, res, next) {

    try {

        const authorization = req.headers.authorization;

        if (!authorization) {

            return Response.error(res, "Token tidak ditemukan", 401);

        }

        const token = authorization.replace("Bearer ", "");

        const payload = JWT.verify(token);

        const user = await User.findById(payload.id);

        if (!user) {

            return Response.error(res, "User tidak ditemukan", 404);

        }

        req.user = user;

        next();

    } catch (err) {

        return Response.error(res, "Token tidak valid", 401);

    }

}

module.exports = auth;
