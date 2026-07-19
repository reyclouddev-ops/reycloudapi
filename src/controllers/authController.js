const bcrypt = require("bcryptjs");

const User = require("../models/User");

const Response = require("../utils/response");

const JWT = require("../utils/jwt");

class AuthController {

    static async register(req, res) {

        try {

            const { username, email, password } = req.body;

            if (!username || !email || !password) {

                return Response.error(res, "Semua data wajib diisi");

            }

            const checkUsername = await User.findOne({ username });

            if (checkUsername) {

                return Response.error(res, "Username sudah digunakan");

            }

            const checkEmail = await User.findOne({ email });

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

    static async login(req, res) {

        try {

            const { username, password } = req.body;

            if (!username || !password) {

                return Response.error(res, "Username/email dan password wajib diisi");

            }

            const user = await User.findOne({

                $or: [

                    { username },

                    { email: username }

                ]

            });

            if (!user) {

                return Response.error(res, "User tidak ditemukan", 404);

            }

            const checkPassword = await bcrypt.compare(

                password,

                user.password

            );

            if (!checkPassword) {

                return Response.error(res, "Password salah");

            }

            const token = JWT.create({

                id: user._id,

                username: user.username,

                role: user.role

            });

            return Response.success(

                res,

                "Login berhasil",

                {

                    token,

                    user: {

                        id: user._id,

                        username: user.username,

                        email: user.email,

                        role: user.role

                    }

                }

            );

        } catch (err) {

            return Response.error(res, err.message, 500);

        }

    }

    static async profile(req, res) {

        try {

            return Response.success(

                res,

                "Profil berhasil diambil",

                {

                    id: req.user._id,

                    username: req.user.username,

                    email: req.user.email,

                    role: req.user.role,

                    status: req.user.status,

                    createdAt: req.user.createdAt,

                    updatedAt: req.user.updatedAt

                }

            );

        } catch (err) {

            return Response.error(res, err.message, 500);

        }

    }

}

module.exports = AuthController;
