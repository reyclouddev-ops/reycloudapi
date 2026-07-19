const bcrypt = require("bcryptjs");

const User = require("../models/User");

const Response = require("../utils/response");

const JWT = require("../utils/jwt");

class AuthController {

    static async register(req, res) {

        try {

            const {

                username,

                email,

                password

            } = req.body;

            if (!username || !email || !password) {

                return Response.error(res, "Semua data wajib diisi");

            }

            const checkUsername = await User.findOne({

                username

            });

            if (checkUsername) {

                return Response.error(res, "Username sudah digunakan");

            }

            const checkEmail = await User.findOne({

                email

            });

            if (checkEmail) {

                return Response.error(res, "Email sudah digunakan");

            }

            const hash = await bcrypt.hash(password, 10);

            const user = await User.create({

                username,

                email,

                password: hash

            });

            return Response.success(

                res,

                "Register berhasil",

                {

                    id: user._id,

                    username: user.username,

                    email: user.email,

                    role: user.role

                },

                201

            );

        } catch (err) {

            return Response.error(res, err.message, 500);

        }

    }

}

module.exports = AuthController;
